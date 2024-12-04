import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { IoCaretBack } from "react-icons/io5";
import { authContext } from "../Providers/AuthProvider";

const LessonDetails = () => {
    const { user } = useContext(authContext);
    const loaderData = useLoaderData();
    const [singleLesson, setSingleLesson] = useState(loaderData || null);
    const [completed, setCompleted] = useState(false);
    const [isDataReady, setIsDataReady] = useState(!!loaderData);
    const navigate = useNavigate();

    useEffect(() => {
        if (loaderData) {
            setSingleLesson(loaderData);
            localStorage.setItem("currentLesson", JSON.stringify(loaderData));
        } else {
            const storedLesson = JSON.parse(localStorage.getItem("currentLesson"));
            if (storedLesson) {
                setSingleLesson(storedLesson);
                setIsDataReady(true);
            } else {
                console.error("Lesson data is not available");
                navigate("/error");
            }
        }
    }, [loaderData, navigate]);

    useEffect(() => {
        if (singleLesson) {
            const completedLessons =
                JSON.parse(localStorage.getItem(`completed_${user?.uid}`)) || {};
            setCompleted(!!completedLessons[singleLesson.lesson_no]);
        }
    }, [singleLesson, user]);

    if (!singleLesson) {
        return <div className="text-center">Loading lesson details...</div>;
    }

    const {
        word,
        language_name,
        pronunciation,
        meaning,
        part_of_speech,
        difficulty,
        lesson_no,
        when_to_say,
        example,
    } = singleLesson;

    const handleCompleteLesson = () => {
        const completedLessons =
            JSON.parse(localStorage.getItem(`completed_${user?.uid}`)) || {};
        completedLessons[lesson_no] = { lessonNo: lesson_no, languageName: language_name, completed: true };
        localStorage.setItem(`completed_${user?.uid}`, JSON.stringify(completedLessons));
        setCompleted(true);
    };

    const handleBack = () => {
        if (window.history.length > 1) {
            navigate(-1);
        } else if (isDataReady) {
            navigate(`/start-learning/${language_name}`);
        } else {
            console.error("Navigation attempted without valid data");
        }
    };

    return (
        <div className="w-7/12 mb-4 mx-auto p-6 bg-white shadow-md rounded-lg mt-4 min-h-screen">
            <div className="text-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    <span className="text-yellow-400 bg-black p-1 rounded-lg">{word}</span>
                </h2>
                <p className="text-gray-600">
                    Language: <span className="font-medium">{language_name}</span>
                </p>
            </div>
            <div className="mb-6">
                <p className="text-gray-700">
                    <span className="font-bold">Lesson No:</span> {lesson_no}
                </p>
                <p className="text-gray-700">
                    <span className="font-bold">Difficulty:</span> {difficulty}
                </p>
                <p className="text-gray-700">
                    <span className="font-bold">Pronunciation:</span> {pronunciation}
                </p>
                <p className="text-gray-700">
                    <span className="font-bold">Meaning:</span> {meaning}
                </p>
                <p className="text-gray-700">
                    <span className="font-bold">Part of Speech:</span> {part_of_speech}
                </p>
                <p className="text-gray-700">
                    <span className="font-bold">When to Say:</span> {when_to_say}
                </p>
                <p className="text-gray-700">
                    <span className="font-bold">Example:</span> {example}
                </p>
            </div>
            <div className="text-end">
                <button
                    className="px-6 py-2 btn btn-sm bg-black hover:bg-black hover:text-white text-yellow-400 mr-4"
                    onClick={handleCompleteLesson}
                    disabled={completed}
                >
                    {completed ? "Completed" : "Mark Complete"}
                </button>
                <button
                    onClick={handleBack}
                    disabled={!isDataReady}
                    className="px-6 py-2 btn btn-sm"
                >
                    <IoCaretBack /> Back
                </button>
            </div>
        </div>
    );
};

export default LessonDetails;