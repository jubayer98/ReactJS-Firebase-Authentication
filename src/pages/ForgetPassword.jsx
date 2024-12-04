import { useState, useContext } from 'react';
import { authContext } from '../Providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
    const { handlePasswordReset } = useContext(authContext);
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (email) {
            try {
                await handlePasswordReset(email);
                toast.success('Password reset email sent! Please check your inbox.');
                setTimeout(() => {
                    navigate('/login');
                }, 3000);
            } catch (error) {
                console.error('Failed to send password reset email:', error);
                setError('Failed to send password reset email. Please try again.');
            }
        } else {
            setError('Please provide your email address.');
        }
    };

    return (
        <div className="hero bg-black min-h-screen">
            <form onSubmit={handleSubmit} className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-yellow-400 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h2 className="text-3xl font-bold text-center text-black mb-4">Forgot Password?</h2>
                        <p className="text-center mb-4 text-black">
                            Enter your email below to receive a password reset link.
                        </p>
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
                            {error && (
                                <span className="text-red-500 text-sm mt-2">{error}</span>
                            )}
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-black border-none hover:bg-black hover:text-white text-yellow-400">Send Reset Link</button>
                        </div>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default ForgetPassword;
