import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/timing-project-scheduling_74855-4584.jpg?w=2000&t=st=1703214100~exp=1703214700~hmac=cc9892889ddb200dd372a65665b3876441d3927859b829330ab2208d3027d8b2)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
                        <p className="mb-5">Are you get meshed up with your task? If yes; then you can explore our TaskMan to get your task organized</p>
                        <Link to={`/dashboard`}><button className="btn btn-primary">Let&apos;s Explore</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;