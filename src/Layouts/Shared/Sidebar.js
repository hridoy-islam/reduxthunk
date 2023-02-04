import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="w-60 h-full shadow-md bg-white" id="sidenavSecExample">
            <div className="pt-4 pb-2 px-6">
                <a href="#!">
                    <div className="flex items-center">
                        <div className="shrink-0">
                            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" className="rounded-full w-10" alt="Avatar" />
                        </div>
                        <div className="grow ml-3">
                            <p className="text-sm font-semibold text-blue-600">Jason McCoel</p>
                        </div>
                    </div>
                </a>
            </div>
            <ul className="relative px-1">
            <li className="relative">
                <Link className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" to="/dashboard" data-mdb-ripple="true" data-mdb-ripple-color="primary"> <span>Dashboard</span> </Link>
                </li>
                <li className="relative">
                <Link className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" to="/dashboard/addpost" data-mdb-ripple="true" data-mdb-ripple-color="primary"> <span>Add Post</span> </Link>
                </li>

            </ul>
            <div className="text-center bottom-0 absolute w-full">

                <p className="py-2 text-sm text-gray-700">tailwind-elements.com</p>
            </div>
        </div>
    );
};

export default Sidebar;