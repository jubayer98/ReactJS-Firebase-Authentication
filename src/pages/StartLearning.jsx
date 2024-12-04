import { useLoaderData, useNavigate } from "react-router-dom";
import Languages from "../components/Languages";

const StartLearning = () => {

    const languages = useLoaderData();
    const navigate = useNavigate();

    const handleStartLearning = (languageName) => {
        navigate(`/start-learning/${languageName}`);
    };

    return (
        <div className="mt-6">
            <h2 className="text-center text-3xl font-semibold">Available Languages to Start Learning</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 md:gap-12 mb-6 mt-6">
                {
                    languages.map(language =>
                        <Languages
                            key={language.id}
                            language={language}
                            onStartLearning={handleStartLearning}>
                        </Languages>
                    )
                }
            </div>
        </div>
    );
};

export default StartLearning;