import Banner from "../components/Banner";
import AboutLingoBingo from "../components/AboutLingoBingo";
import HowItWorks from "../components/HowItWorks";
import Success from "../components/Success";
import Newsletter from "../components/Newsletter";

const Home = () => {
    return (
        <div className="space-y-6">
            <Banner></Banner>
            <AboutLingoBingo></AboutLingoBingo>
            <HowItWorks></HowItWorks>
            <Success></Success>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;