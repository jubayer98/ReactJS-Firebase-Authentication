import { useContext, useState } from 'react';
import { authContext } from '../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateProfile = () => {
    const { user, updateUserProfile } = useContext(authContext);
    const [displayName, setDisplayName] = useState(user?.displayName || '');
    const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
    const navigate = useNavigate();

    const handleUpdate = async () => {
        try {
            await updateUserProfile({ displayName, photoURL });
            toast.success('Profile updated successfully.');
            setTimeout(() => {
                navigate('/profile');
            }, 3000);
        } catch (error) {
            console.error('Failed to update profile:', error);
            toast.error('Failed to update profile. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-black text-yellow-400 p-8">
            <ToastContainer />
            <div className="card bg-yellow-400 max-w-lg mx-auto p-6 text-black">
                <h1 className="text-4xl font-bold mb-4">Update Profile</h1>
                <div className="mb-4">
                    <label className="block text-black font-bold mb-2" htmlFor="displayName">Name:</label>
                    <input
                        type="text"
                        id="displayName"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-black font-bold mb-2" htmlFor="photoURL">Photo URL:</label>
                    <input
                        type="text"
                        id="photoURL"
                        value={photoURL}
                        onChange={(e) => setPhotoURL(e.target.value)}
                        className="input input-bordered w-full"
                    />
                </div>
                <div>
                    <button onClick={handleUpdate} className="btn bg-black text-yellow-400 border-none hover:bg-black hover:text-white mt-4">
                        Update
                    </button>
                    <button onClick={() => navigate('/profile')} className="btn bg-gray-600 text-yellow-400 border-none hover:bg-gray-600 hover:text-white mt-4 ml-4">
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;