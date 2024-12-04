import CountUp from 'react-countup';

const Success = () => {
    // Dummy data for counts
    const userCount = 1500;
    const lessonCount = 75;
    const vocabularyCount = 1200;
    const tutorialCount = 50;

    return (
        <div className="hero shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
            <div className="count-item p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                <h2 className="text-5xl font-semibold text-indigo-600">
                    <CountUp end={userCount} duration={2.75} />+
                </h2>
                <p className="text-lg text-gray-600 mt-2">Users</p>
            </div>
            <div className="count-item p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                <h2 className="text-5xl font-semibold text-green-600">
                    <CountUp end={lessonCount} duration={2.75} />+
                </h2>
                <p className="text-lg text-gray-600 mt-2">Lessons</p>
            </div>
            <div className="count-item p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                <h2 className="text-5xl font-semibold text-blue-600">
                    <CountUp end={vocabularyCount} duration={2.75} />+
                </h2>
                <p className="text-lg text-gray-600 mt-2">Vocabulary Words</p>
            </div>
            <div className="count-item p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                <h2 className="text-5xl font-semibold text-red-600">
                    <CountUp end={tutorialCount} duration={2.75} />+
                </h2>
                <p className="text-lg text-gray-600 mt-2">Tutorials</p>
            </div>
        </div>
    </div>
    );
}

export default Success;
