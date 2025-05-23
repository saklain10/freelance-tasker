import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../providers/AuthProvider'; 

const PrivateRoute = ({ children }) => {
        const { user, loading } = useContext(AuthContext); 
    const location = useLocation();

    if (loading) {
        return <div className="text-center py-10 text-lg font-semibold">Loading...</div>;
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute;
