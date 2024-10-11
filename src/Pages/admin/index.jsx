import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

const Admin = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/auth/login');
        }
    }, [navigate]);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        navigate('/auth/login');
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-blue-600 text-white py-4 shadow-md">
                <h1 className="text-3xl font-bold text-center">Admin Dashboard</h1>
            </header>
            <div className="flex">
                <nav className="w-1/4 bg-white shadow-md p-4">
                    <ul className="space-y-4">
                        <li>
                            <NavLink
                                to="recipe"
                                className={({ isActive }) =>
                                    isActive
                                        ? "block py-2 px-4 rounded bg-blue-500 text-white"
                                        : "block py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition duration-300"
                                }
                            >
                                Recipes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="doctor"
                                className={({ isActive }) =>
                                    isActive
                                        ? "block py-2 px-4 rounded bg-blue-500 text-white"
                                        : "block py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition duration-300"
                                }
                            >
                                Doctors
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="article"
                                className={({ isActive }) =>
                                    isActive
                                        ? "block py-2 px-4 rounded bg-blue-500 text-white"
                                        : "block py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition duration-300"
                                }
                            >
                                Articles
                            </NavLink>
                        </li>
                        <li>
                            <button
                                onClick={handleLogout}
                                className="block py-2 px-4 rounded bg-red-500 text-white w-full"
                            >
                                Logout
                            </button>
                        </li>
                    </ul>
                </nav>
                <main className="w-3/4 p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Admin;