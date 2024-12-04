const HowItWorks = () => {
    return (
        <div className="hero shadow-sm">
            <div className="hero-content text-center">
                <div className="space-y-2">
                    <h1 className="text-5xl font-bold">How It Works</h1>
                    <p className="py-6">
                    Lingo Bingo is designed to help you expand your vocabulary across multiple languages through a variety of games, quizzes, and interactive challenges. Here is how you can start learning and growing your language skills with us.
                    </p>
                    <div className="collapse bg-yellow-400">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">Choose Your Language</div>
                        <div className="collapse-content">
                            <p>Whether you are looking to brush up on Spanish, dive into French, or explore Japanese, start by selecting the language you want to learn or improve.</p>
                        </div>
                    </div>
                    <div className="collapse bg-yellow-400">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">Interactive Games</div>
                        <div className="collapse-content">
                            <p>Jump into our array of engaging games that challenge your vocabulary retention and usage. From word matching to sentence construction, each game is designed to reinforce your learning in a dynamic way.</p>
                        </div>
                    </div>
                    <div className="collapse bg-yellow-400">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">Daily Challenges</div>
                        <div className="collapse-content">
                            <p>Keep your skills sharp with daily challenges that encourage regular practice. Earn points and badges as you progress and compete with fellow learners on our leader boards.</p>
                        </div>
                    </div>
                    <div className="collapse bg-yellow-400">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">Personalized Learning Paths</div>
                        <div className="collapse-content">
                            <p>Customize your learning experience based on your proficiency level and personal goals. Lingo Bingo tracks your progress and adapts the difficulty and type of vocabulary presented, ensuring you always have just the right level of challenge.</p>
                        </div>
                    </div>
                    <div className="collapse bg-yellow-400">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">Community and Collaboration</div>
                        <div className="collapse-content">
                            <p>Join groups or chat with other users to practice your new vocabulary in real-world contexts. Share tips, ask questions, and learn from peers who are as enthusiastic about language learning as you are.</p>
                        </div>
                    </div>
                    <div className="collapse bg-yellow-400">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">Resource Hub</div>
                        <div className="collapse-content">
                            <p>Access our extensive library of resources, including word lists, pronunciation guides, and grammatical tips to aid your learning journey.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;