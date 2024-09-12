"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('/');
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setActiveItem(pathname);
    }, [pathname]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleItemClick = (item: string) => {
        setActiveItem(item);
    };

    const toggleLogin = () => {
        setIsLoginOpen(!isLoginOpen);
    };

    return (
        <nav className="bg-blue-950 fixed w-full z-20 top-0 start-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/images/tulisan_rentalin.png" className="h-10" alt="Logo Rentalin" />
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-4 rtl:space-x-reverse">
                    <button onClick={toggleLogin} type="button" className="text-black bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-white dark:hover:bg-gray-200 dark:focus:ring-blue-800">Login</button>
                    <button type="button" className="text-black bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-white dark:hover:bg-gray-200 dark:focus:ring-blue-800">Register</button>
                    <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded={isMenuOpen}>
                        <span className="sr-only">Buka menu utama</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div className={`items-center justify-between ${isMenuOpen ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-blue-950 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
                        <li>
                            <a href="/" onClick={() => handleItemClick('/')} className={`block py-2 px-3 rounded ${activeItem === '/' ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-500' : 'text-white hover:bg-blue-800 md:hover:bg-transparent md:hover:text-blue-500'}`}>Home</a>
                        </li>
                        <li>
                            <a href="#about" onClick={() => handleItemClick('#about')} className={`block py-2 px-3 rounded ${activeItem === '#about' ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-500' : 'text-white hover:bg-blue-800 md:hover:bg-transparent md:hover:text-blue-500'}`}>About</a>
                        </li>
                        <li>
                            <a href="#features" onClick={() => handleItemClick('#features')} className={`block py-2 px-3 rounded ${activeItem === '#features' ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-500' : 'text-white hover:bg-blue-800 md:hover:bg-transparent md:hover:text-blue-500'}`}>Features</a>
                        </li>
                        <li>
                            <a href="#features" onClick={() => handleItemClick('/Contact')} className={`block py-2 px-3 rounded ${activeItem === '/Contact' ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-500' : 'text-white hover:bg-blue-800 md:hover:bg-transparent md:hover:text-blue-500'}`}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
            
            {/* Pop-up Login */}
            {isLoginOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg p-8 max-w-md w-full">
                        <h2 className="text-2xl font-bold mb-4">Login</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                <input id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required type="email" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                <input id="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" required type="password" />
                            </div>
                            <div className="flex items-center justify-between">
                                <button type="submit" className="bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign In</button>
                                <button type="button" onClick={toggleLogin} className="text-gray-600 hover:text-gray-800">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </nav>
    );
}