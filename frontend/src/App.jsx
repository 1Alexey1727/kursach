import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Components/Header';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Contact from '../pages/Contacts';
import Footer from '../Components/Footer';
import Vopros from '../Components/Vopros';
import { AuthProvider } from '../context/AuthContext';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Vopros/>
                <Footer />
            </Router>
        </AuthProvider>
    );
}

export default App;