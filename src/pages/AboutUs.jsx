import { NavLink } from "react-router-dom";

const AboutUs = () => {
    return (
        <div className="shadow-sm">
            <div className="container mx-auto px-4 py-8 min-h-screen">
                <section className="mb-10">
                    <h1 className="text-3xl font-bold text-center mb-4">About Lingo Bingo</h1>
                    <p className="text-xl text-center">Your fun gateway to mastering new languages!</p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold mb-3">How Lingo Bingo Works</h2>
                    <p>Interactive games, daily challenges, and a smart progress tracker designed to enhance your vocabulary retention in multiple languages.</p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold mb-3">Meet the Team</h2>
                    <div>
                        <p>Our team is made up of passionate educators, developers, and linguists from around the world, committed to making learning enjoyable and effective.</p>
                    </div>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold mb-3">Success Stories</h2>
                    <i>Thanks to Lingo Bingo, I have improved my Spanish vocabulary significantly and can now enjoy conversations with native speakers! - Jane Doe</i>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold mb-3">Commitment to Education and Diversity</h2>
                    <p>We collaborate with a variety of educational institutions and support a diverse range of learning styles and needs to ensure accessibility for all learners.</p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold mb-3">Join Us</h2>
                    <p>Start your language learning journey with Lingo Bingo today!</p>
                    <NavLink to="/register">
                        <button className="mt-4 bg-black hover:bg-black hover:text-white text-yellow-400 font-bold py-2 px-4 rounded">
                            Join Now
                        </button>
                    </NavLink>
                </section>
            </div>
        </div>

    );
};

export default AboutUs;