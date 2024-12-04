import { NavLink } from "react-router-dom";

const AboutLingoBingo = () => {
    return (
        <div className="hero shadow-sm">
            <div className="hero-content text-center">
                <div>
                    <h1 className="text-5xl font-bold">About Lingo Bingo</h1>
                    <p className="py-6">
                    Welcome to Lingo Bingo, your go-to destination for mastering new languages in a fun, engaging, and interactive way! At Lingo Bingo, we believe that learning a new language is not just about enhancing communication skills—it’s about connecting with different cultures, thinking in new ways, and opening up a world of opportunities. Our mission is to make language learning accessible and enjoyable for everyone, regardless of age or background.
                    </p>
                    <NavLink to="/about-us" className="btn bg-black hover:bg-black hover:text-white text-yellow-400">About Us</NavLink>
                </div>
            </div>
        </div>
    );
};

export default AboutLingoBingo;