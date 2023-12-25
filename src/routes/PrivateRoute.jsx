/* eslint-disable react/prop-types */
import useAuth from '../hooks/useAuth'
import { Navigate/* , useLocation */ } from 'react-router-dom'
import Loader from '../components/Shared/Loader.jsx'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    // const location = useLocation()
    console.log(loading)
    if (loading) return <Loader />
    if (user) return children
    return <Navigate to='/login' replace='true' />
    // return <Navigate to='/login' state={{ from: location }} replace='true' />
}

export default PrivateRoute