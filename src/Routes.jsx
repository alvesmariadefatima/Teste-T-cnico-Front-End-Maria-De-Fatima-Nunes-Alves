import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import CarrinhoCompras from './components/CarrinhoCompras/CarrinhoCompras';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} index />
                <Route path="/carrinho" element={<CarrinhoCompras />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;