import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import Footer from "./components/Footer/Footer";
import AllProducts from "./components/AllProducts/AllProducts";
import {CartProvider} from "./context/CartContext";
import Cart from "./components/Cart/Cart";


const App: React.FC = () => {
    return (
        <Router>
            <CartProvider>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/all-chairs" element={<AllProducts />} />
                    <Route path="/all-sofas" element={<AllProducts />} />
                    <Route path="/cart" element={<Cart/>} />
                </Routes>
                <Footer/>
            </div>
            </CartProvider>
        </Router>
    );
};

export default App;

