import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        toast.success("Thank you for subscribing!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        console.log('Subscribed with:', email);
        setEmail('');  // Reset the input field after submission
    };

    return (
        <div className="relative newsletter bg-black py-12 px-8 md:px-0">
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-yellow-400 mb-8">
                    Subscribe to our newsletter to get our latest news straight to your inbox.
                </p>
                <form onSubmit={handleSubmit} className="flex justify-center items-center gap-2">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="py-2 px-4 rounded-lg w-full placeholder:text-black md:w-auto focus:outline-none bg-yellow-400 text-black focus:shadow-outline"
                    />
                    <button
                        type="submit"
                        className="bg-yellow-400 hover:bg-white font-bold py-2 px-4 rounded-lg transition duration-200"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Newsletter;
