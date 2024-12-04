import { useContext } from 'react';
import { authContext } from '../Providers/AuthProvider';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaLanguage } from "react-icons/fa";
import "../assets/styles.css";

const Navbar = () => {
    const { user, handleLogout } = useContext(authContext);
    const navigate = useNavigate();

    const handleUserLogout = async () => {
        await handleLogout();
        navigate('/login');
    };

    return (
        <div className="navbar bg-base-100 shadow-md sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/start-learning">Start Learning</NavLink>
                        <NavLink to="/tutorials">Tutorials</NavLink>
                        <NavLink to="/about-us">About Us</NavLink>
                    </ul>
                </div>
                <NavLink to="/" className="btn bg-yellow-400 hover:bg-black hover:text-yellow-400 text-xl">
                    <span className="text-3xl"><FaLanguage /></span> Lingo Bingo
                </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-6">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/start-learning">Start Learning</NavLink>
                    <NavLink to="/tutorials">Tutorials</NavLink>
                    <NavLink to="/about-us">About Us</NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div className="flex items-center space-x-4">
                        {user.photoURL && (
                            <img src={user.photoURL} alt="Avatar" className="w-10 h-10 rounded-full" />
                        )}
                        <NavLink to="/profile" className="font-bold text-black">
                            {user.displayName}
                        </NavLink>
                        <button onClick={handleUserLogout} className="btn bg-black text-yellow-400 border-none hover:bg-black hover:text-white">
                            Logout
                        </button>
                    </div>
                ) : (
                    <NavLink to="/login" className="btn bg-black text-yellow-400 border-none hover:bg-black hover:text-white">
                        Login
                    </NavLink>
                )}
            </div>
        </div>
    );
};

export default Navbar;