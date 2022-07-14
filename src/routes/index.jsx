import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import GridProduto from "../pages/GridProduto";
import CadastroProduto from "../pages/CadastroProduto";
import CadastroCategoria from "../pages/CadastroCategoria";

const RoutesNavigation = () => {
   return(
       <BrowserRouter>
        <Routes>
            <Route element = { <Home /> }  path="/" exact />
            <Route element = { <GridProduto /> }  path="/produtos" />
            <Route element = { <CadastroProduto /> }  path="/produto-cadastro" />
            <Route element = { <CadastroCategoria /> }  path="/categoria-cadastro" />
        </Routes>
       </BrowserRouter>
   )
}

export default RoutesNavigation;