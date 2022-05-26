import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Header from './Header';
import SignIn from '../pages/SignIn';
import User from '../pages/User';
import Error404 from '../pages/Error404';
import Footer from './Footer';

/**
 * The Router function returns a BrowserRouter component that contains a Header, Routes, and a Footer
 * component
 * @returns A BrowserRouter component with a Header, Routes, and Footer component.
 */

function Router() {
    
    return (
        <BrowserRouter>
            <Header />
            <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/user" element={<User />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Router