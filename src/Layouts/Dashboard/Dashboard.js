import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Shared/Sidebar';

const Dashboard = () => {
    return (
        <div className='flex w-screen'>
            <Sidebar />
            <div className='w-full py-2 px-8'>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;