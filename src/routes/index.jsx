import React from "react";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AuthorizationContext  = React.createContext();

const RoutesNavigation = () => {
    const token = localStorage.getItem('token');
    return (
        <AuthorizationContext.Provider value={token}>
          {!!token ? <PrivateRoute /> : <PublicRoute />}
        </AuthorizationContext.Provider>
    );
}
export default RoutesNavigation;