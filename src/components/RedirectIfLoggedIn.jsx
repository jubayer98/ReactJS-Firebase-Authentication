import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { authContext } from '../Providers/AuthProvider';
import PropTypes from 'prop-types';

const RedirectIfLoggedIn = ({ children }) => {
    const { user } = useContext(authContext);
    const location = useLocation();
    const isAuthenticated = user !== null;

    const redirectPath = location.state?.from || '/profile';

    if (isAuthenticated) {
        return <Navigate to={redirectPath} replace />;
    }

    return children;
};

RedirectIfLoggedIn.propTypes = {
    children: PropTypes.node
};

export default RedirectIfLoggedIn;