import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { authContext } from '../Providers/AuthProvider';

const Profile = () => {
    const { user } = useContext(authContext);
    const [completedLessons, setCompletedLessons] = useState({});

    useEffect(() => {
        if (user) {
            const lessons = JSON.parse(localStorage.getItem(`completed_${user.uid}`)) || {};
            setCompletedLessons(lessons);
        }
    }, [user]);

    return (
        <div className="min-h-screen bg-black text-yellow-400 p-8">
            <div className="card bg-yellow-400 max-w-lg mx-auto p-6 text-black">
                <h1 className="text-4xl font-bold mb-4">Profile Details</h1>
                {user && (
                    <div>
                        {user.photoURL && (
                            <img src={user.photoURL} alt="Avatar" className="w-32 h-32 rounded-full mb-4" />
                        )}
                        <p><strong>Name:</strong> {user.displayName}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <h3 className="text-3xl font-bold mt-4 mb-2">Completed Lessons</h3>
                        {Object.keys(completedLessons).length > 0 ? (
                            <ul>
                                {Object.entries(completedLessons).map(([lessonNo, details]) => (
                                    <li key={lessonNo}>
                                        Lesson {details.lessonNo} in {details.languageName} - {details.completed ? "Completed" : "Incomplete"}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No Lessons Yet Completed</p>
                        )}
                        <div className="flex justify-between mt-6">
                            <NavLink to="/update-profile" className="btn bg-black text-yellow-400 border-none hover:bg-black hover:text-white">
                                Update Profile
                            </NavLink>
                            <NavLink to="/" className="btn bg-gray-600 text-yellow-400 border-none hover:bg-gray-600 hover:text-white">
                                Go Back
                            </NavLink>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;