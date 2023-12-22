import PropTypes from "prop-types"
import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, OAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

const providerGoogle = new GoogleAuthProvider();
const providerApple = new OAuthProvider('apple.com');
const providerGithub = new GithubAuthProvider();
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const loginWithGoogle = () => {
        return signInWithPopup(auth, providerGoogle);
    }

    const loginWithApple = () => {
        return signInWithPopup(auth, providerApple);
    }

    const loginWithGithub = () => {
        return signInWithPopup(auth, providerGithub);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (profileObject) => {
        return updateProfile(auth.currentUser, profileObject);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                // console.log(currentUser);
                // get token and store client
                const userInfo = { email: currentUser.email }
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                            // console.log(res.data.token);
                            setLoading(false);
                        }
                    })
            }
            else {
                // TODO: remove token (if token in the client side: Local storage, caching, in memory)
                localStorage.removeItem('access-token');
                // setLoading(false);
                // setLoading(false);
                // setLoading(false);
            }
            console.log("current user", currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        };
    }, [axiosPublic]);

    const authInfo = {
        user,
        loading,
        createUser,
        setUser,
        updateUserProfile,
        signIn,
        loginWithGoogle,
        loginWithApple,
        loginWithGithub,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AuthProvider;