import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { FaLanguage } from "react-icons/fa";

const Lessons = () => {
    const { languageName } = useParams();
    const [lessons, setLessons] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchLessons = async () => {
            const response = await fetch(`../lessons.json`);
            const data = await response.json();
            const filteredLessons = data.filter(lesson => lesson.language_name === languageName);
            setLessons(filteredLessons);
        };

        fetchLessons();
    }, [languageName]); // Dependency array ensures this runs on mount and every time languageName changes

    const handleLessonDetails = (lesson) => {
        navigate(`/start-learning/${lesson.language_name}/${lesson.id}`);
    };

    const getDifficultyClass = (difficulty) => {
        switch (difficulty.toLowerCase()) {
            case 'difficult':
                return 'text-red-500';
            case 'medium':
                return 'text-blue-500';
            case 'easy':
                return 'text-green-500';
            default:
                return 'text-gray-500';
        }
    };

    return (
        <div className="mt-6">
            <h2 className="text-center text-3xl font-semibold">Total Lessons: {lessons.length}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 md:gap-12 mb-6 mt-6">
                {lessons.map((lesson) => (
                    <div key={lesson.id} className="card card-compact w-full shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title"><span className="text-2xl"><FaLanguage /></span> {lesson.language_name}</h2>
                            <p className={`font-medium ${getDifficultyClass(lesson.difficulty)}`}>
                                {lesson.difficulty}
                            </p>
                            <p>{lesson.example}</p>
                            <button
                                onClick={() => handleLessonDetails(lesson)}
                                className="btn btn-sm bg-black hover:bg-black hover:text-white text-yellow-400">
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Lessons;