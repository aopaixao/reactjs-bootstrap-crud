import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from "../pages/Login";

const PublicRoute = () => {
  
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Login />} path="/login"  />
            </Routes>
        </BrowserRouter>
    )
  }
  
  export default PublicRoute;