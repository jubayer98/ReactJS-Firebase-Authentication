import { useContext } from "react";
import PropTypes from 'prop-types';
import { authContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user } = useContext(authContext);
    const location = useLocation();

    if (!user) {
        // Redirects to the login page and passes the current location in state
        return <Navigate to="/login" replace state={{ from: location.pathname }} />;
    }

    return children;
};

PrivateRoute.propTypes = {
    children: PropTypes.node
};

export default PrivateRoute;