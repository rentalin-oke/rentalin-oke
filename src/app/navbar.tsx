"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("/");
  const pathname = usePathname();

  // Tambahkan pengecekan rute
  const hideNavbarRoutes = ['/auth/login', '/auth/register'];
  const shouldHideNavbar = hideNavbarRoutes.includes(pathname);

  useEffect(() => {
    setActiveItem(pathname);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleItemClick = (item: string, targetId: string) => {
    setActiveItem(item);
    const target = document.getElementById(targetId);
    if (target) {
      event?.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Tambahkan pengecekan sebelum me-render navbar
  if (shouldHideNavbar) {
    return null;
  }

  return (
    <nav className="bg-blue-950 fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 sm:p-6">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse animate-fade-in-up"
        >
          <img
            src="/images/tulisan_rentalin.png"
            className="h-6 sm:h-10"
            alt="Logo Rentalin"
          />
        </a>
        <div className="flex md:order-2 space-x-2 sm:space-x-3 md:space-x-4 rtl:space-x-reverse">
          <a
            href="/auth/login"
            className="text-black bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xs sm:text-sm px-3 sm:px-5 py-1.5 sm:py-2.5 text-center dark:bg-white dark:hover:bg-gray-200 dark:focus:ring-blue-800"
          >
            Login
          </a>
          <a
            href="/auth/register"
            className="text-black bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xs sm:text-sm px-3 sm:px-5 py-1.5 sm:py-2.5 text-center dark:bg-white dark:hover:bg-gray-200 dark:focus:ring-blue-800"
          >
            Register
          </a>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-8 h-8 sm:w-10 sm:h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Buka menu utama</span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            isMenuOpen ? "flex" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-blue-950 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <a
                href="#home"
                onClick={(e) => handleItemClick("#home", "home")}
                className={`block py-2 px-3 rounded ${
                  activeItem === "#home"
                    ? "text-white bg-blue-700 md:bg-transparent md:text-blue-500"
                    : "text-white hover:bg-blue-800 md:hover:bg-transparent md:hover:text-blue-500"
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => handleItemClick("#about", "about")}
                className={`block py-2 px-3 rounded ${
                  activeItem === "#about"
                    ? "text-white bg-blue-700 md:bg-transparent md:text-blue-500"
                    : "text-white hover:bg-blue-800 md:hover:bg-transparent md:hover:text-blue-500"
                }`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#features"
                onClick={(e) => handleItemClick("#features", "features")}
                className={`block py-2 px-3 rounded ${
                  activeItem === "#features"
                    ? "text-white bg-blue-700 md:bg-transparent md:text-blue-500"
                    : "text-white hover:bg-blue-800 md:hover:bg-transparent md:hover:text-blue-500"
                }`}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleItemClick("#contact", "contact")}
                className={`block py-2 px-3 rounded ${
                  activeItem === "#contact"
                    ? "text-white bg-blue-700 md:bg-transparent md:text-blue-500"
                    : "text-white hover:bg-blue-800 md:hover:bg-transparent md:hover:text-blue-500"
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
