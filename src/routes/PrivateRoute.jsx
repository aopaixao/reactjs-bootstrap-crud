import React from 'react';
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    if(!token){
        return <Navigate to={'/login'} />;
    }else{
        return children;
    }
}
  
export default PrivateRoute;