import { useLoaderData } from "react-router-dom";
import Videos from "../components/Videos";

const Tutorials = () => {
    const videos = useLoaderData()
    return (
        <div>
            <div className="mt-6">
            <h2 className="text-center text-3xl font-semibold">Premium Videos on Learning Language</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 md:gap-12 mb-6 mt-6">
                {
                    videos.map(video =>
                        <Videos key={video.id} video={video}></Videos>
                    )
                }
            </div>
        </div>
        </div>
    );
};

export default Tutorials;