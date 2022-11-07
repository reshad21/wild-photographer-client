import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { userContext } from '../Context/AuthContext/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(userContext);
    const location = useLocation();

    if (loader) {
        return <p>Loading...</p>
    }

    if (user && user.uid) {
        return children;
    }
    return (
        <Navigate to='/login' state={{ from: location }} replace></Navigate>
    );
};

export default PrivateRoute;