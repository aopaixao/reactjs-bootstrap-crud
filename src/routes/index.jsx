import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login";
import Home from "../pages/Home";
import GridProduto from "../pages/GridProduto";
import CadastroProduto from "../pages/CadastroProduto";
import CadastroCategoria from "../pages/CadastroCategoria";

const RoutesNavigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/login'
                    element={
                        <Login />
                    }
                />
                <Route
                    path='/' exact
                    element={
                        <PrivateRoute>
                            <Home />
                        </PrivateRoute>
                    }
                />
                <Route
                    path='/produtos'
                    element={
                        <PrivateRoute>
                            <GridProduto />
                        </PrivateRoute>
                    }
                />
                <Route
                    path='/produto-cadastro'
                    element={
                        <PrivateRoute>
                            <CadastroProduto />
                        </PrivateRoute>
                    }
                />
                <Route
                    path='/categoria-cadastro'
                    element={
                        <PrivateRoute>
                            <CadastroCategoria />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}
export default RoutesNavigation;