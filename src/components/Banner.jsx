import { NavLink } from "react-router-dom";
import bannerImg from "../assets/banner.webp"

const Banner = () => {
    return (
        <div className="hero shadow-sm">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={bannerImg}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Lingo Bingo</h1>
                    <p className="py-6">
                        Play, Learn, Connect — Master Languages with Fun!
                    </p>
                    <NavLink to="/start-learning" className="btn bg-black hover:bg-black hover:text-white text-yellow-400">Start Learning</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Banner;