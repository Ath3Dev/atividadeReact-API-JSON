import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Shop } from './pages/Shop';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ProductCrud } from "./pages/ProductCrud";
import { SingleProduct } from "./pages/SingleProduct";

const Router = () => {
    const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
    const [isCheckingAuthentication, setIsCheckingAuthentication] = useState(true);

    useEffect(() => {
        checkAuthentication();
    }, []);

    const checkAuthentication = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const username = urlParams.get('username');
        const password = urlParams.get('password');

        if (username === "admin" && password === "admin") {
            setIsAdminAuthenticated(true);
        }
        setIsCheckingAuthentication(false);
    };

    if (isCheckingAuthentication) {
        return <div>Verificando autenticação...</div>;
    }

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} /> 
                <Route path="/about" element={<About />} /> 
                <Route path="/contact" element={<Contact />} />
                <Route path="/product/:id" element={<SingleProduct />}></Route>
                <Route
                    path="/productcrud"
                    element={
                        isAdminAuthenticated ? (
                            <ProductCrud />
                        ) : (
                            <Navigate to="/" replace />
                        )
                    }
                />
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
};

export default Router;
