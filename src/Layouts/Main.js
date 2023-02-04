import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Shared/Footer';
import Header from './Shared/Header';

const Main = () => {
    return (
        <div className="bg-gradient-to-b from-green-20 to-green-50">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;