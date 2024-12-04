import { Animated } from "react-animated-css";
import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'black', alignItems: 'center', height: '100vh' }}>
            <Animated animationIn="pulse" animationInDuration={2000} isVisible={true}>
                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'rgb(250, 204, 21)' }}>
                    You make mistake! Go <NavLink to="/" className="border-4 p-2">LINGO BINGO</NavLink>
                </div>
            </Animated>
        </div>
    );
};

export default Error;