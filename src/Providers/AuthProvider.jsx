import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { Animated } from "react-animated-css";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
    sendPasswordResetEmail,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

export const authContext = createContext();
const AuthProvider = ({ routes }) => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleRegister = (email, password, name, photoURL) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                return updateProfile(result.user, {
                    displayName: name,
                    photoURL: photoURL,
                }).then(() => {
                    setUser(result.user);
                });
            })
            .finally(() => setLoading(false));
    };

    const handleLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .finally(() => setLoading(false));
    };

    const handleGoogleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
            .finally(() => setLoading(false));
    };

    const handleLogout = () => {
        setLoading(true);
        return signOut(auth).finally(() => setLoading(false));
    };

    const handlePasswordReset = (email) => {
        return sendPasswordResetEmail(auth, email);
    };

    const updateUserProfile = async ({ displayName, photoURL }) => {
        if (auth.currentUser) {
            const promises = [];

            if (displayName || photoURL) {
                promises.push(updateProfile(auth.currentUser, { displayName, photoURL }));
            }

            try {
                await Promise.all(promises);
                setUser(auth.currentUser);
                console.log("Profile updated successfully");
            } catch (error) {
                console.error("Error updating profile:", error);
                throw new Error("Failed to update profile. Please try again.");
            }
        } else {
            throw new Error("No authenticated user to update.");
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        handleRegister,
        handleLogin,
        handleGoogleLogin,
        handleLogout,
        handlePasswordReset,
        updateUserProfile,
    };

    return (
        <authContext.Provider value={authInfo}>
            {loading ? (
                <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'black', alignItems: 'center', height: '100vh' }}>
                    <Animated animationIn="pulse" animationInDuration={2000} isVisible={true}>
                        <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'rgb(250, 204, 21)' }}>
                            Lingo Bingo
                        </div>
                    </Animated>
                </div>
            ) : (
                routes
            )}
        </authContext.Provider>
    );
};

AuthProvider.propTypes = {
    routes: PropTypes.node
};

export default AuthProvider;