import { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authContext } from '../Providers/AuthProvider';

const Register = () => {
    const { handleRegister } = useContext(authContext);

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoURL = e.target.photoURL.value;
        const password = e.target.password.value;

        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const isValidLength = password.length >= 6;

        if (hasUppercase && hasLowercase && isValidLength) {
            setPasswordError('');
            handleRegister(email, password, name, photoURL)
                .then(() => {
                    toast.success('Registration successful! Redirecting to the home page...');
                    setTimeout(() => {
                        navigate('/');
                    }, 1000);
                })
                .catch((error) => {
                    setPasswordError(error.message);
                });
        } else {
            setPasswordError('Password must have at least 6 characters, including an uppercase letter and a lowercase letter.');
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
                </div>
                <div className="card bg-yellow-400 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter your name" name="name" className="input input-bordered placeholder:text-yellow-400 bg-black text-yellow-400" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email" name="email" className="input input-bordered placeholder:text-yellow-400 bg-black text-yellow-400" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" placeholder="Enter your photo URL" name="photoURL" className="input input-bordered placeholder:text-yellow-400 bg-black text-yellow-400" />
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
                            {passwordError && (
                                <span className="text-red-500 text-sm mt-2">{passwordError}</span>
                            )}
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-black border-none hover:bg-black hover:text-white text-yellow-400">Register</button>
                        </div>
                        <p className="text-base mt-4">
                            Already have an account? <NavLink to="/login" className="font-bold">Login here</NavLink>
                        </p>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Register;