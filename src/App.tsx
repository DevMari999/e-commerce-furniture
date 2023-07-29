import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import ShoppingCartPage from "./components/ShoppingCartPage/ShoppingCartPage";
import CheckoutPage from "./components/CheckoutPage/CheckoutPage";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import AllChairs from "./components/AllChairs/AllChairs";
import Footer from "./components/Footer/Footer";
import AllSofas from "./components/AllSofas/AllSofas";

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/cart" element={<ShoppingCartPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/all-chairs" element={<AllChairs />} />
                    <Route path="/all-sofas" element={<AllSofas />} />
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
};

export default App;

