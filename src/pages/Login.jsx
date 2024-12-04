import { useState, useContext } from 'react';
import { authContext } from '../Providers/AuthProvider';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { handleGoogleLogin, handleLogin } = useContext(authContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || '/';

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email && password) {
            try {
                await handleLogin(email, password);
                toast.success('Login successful! Redirecting...');
                navigate(from);
            } catch (error) {
                const errorMessage = error?.message || 'Invalid email or password. Please try again.';
                console.error('Login error:', errorMessage);
                toast.error(errorMessage); // Display the error as a toast
            }
        } else {
            const errorMsg = 'Please provide both email and password.';
            toast.error(errorMsg); // Display the validation error as a toast
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await handleGoogleLogin();
            toast.success('Login successful! Redirecting...');
            navigate(from);
        } catch (error) {
            const errorMessage = error?.message || 'Google login failed. Please try again.';
            console.error('Google login failed:', errorMessage);
            toast.error(errorMessage); // Display the error as a toast
        }
    };

    return (
        <div className="hero bg-black min-h-screen">
            <form onSubmit={handleSubmit} className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-yellow-400">Welcome to Lingo Bingo!</h1>
                    <p className="py-6 text-lg text-yellow-400">
                        Expand your vocabulary, learn new languages, and have fun while doing it! Login now to start your language adventure with Lingo Bingo.
                    </p>
                    <p className="text-yellow-400">
                        New here? <NavLink to="/register" className="link text-white">Click here to register!</NavLink>
                    </p>
                </div>
                <div className="card bg-yellow-400 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                className="input input-bordered placeholder:text-yellow-400 bg-black text-yellow-400"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                name="password"
                                className="input input-bordered placeholder:text-yellow-400 bg-black text-yellow-400"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <label className="label">
                                <NavLink to="/forget-password" className="label-text-alt link link-hover">Forgot password?</NavLink>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-black border-none hover:bg-black hover:text-white text-yellow-400">Login</button>
                        </div>
                        <div className="divider">or</div>
                        <div className="form-control">
                            <button onClick={handleGoogleSignIn} type="button" className="btn btn-outline flex items-center justify-center">
                                <span className="mr-2">
                                    <i className="fab fa-google"></i>
                                </span>
                                Login with Google
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;