"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "./api/auth/Context";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("/");
  const pathname = usePathname();
  const router = useRouter();
  const { user, login, logout } = useAuth(); // Gunakan hook autentikasi

  // Tambahkan pengecekan rute
  const hideNavbarRoutes = ["/auth/login", "/auth/register"];
  const shouldHideNavbar = hideNavbarRoutes.includes(pathname);

  useEffect(() => {
    setActiveItem(pathname);
  }, [pathname]);

  // Tambahkan useEffect baru untuk memeriksa status login
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser && !user) {
      // Jika ada data user di localStorage dan belum ada user di state, update state user
      const userData = JSON.parse(storedUser);
      // Pastikan fungsi login dari useAuth dipanggil untuk memperbarui state global
      login(userData.email, ""); // Password kosong karena kita tidak menyimpan password
    }
  }, [user, login]);

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

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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
        <div className="flex md:order-2 space-x-2 sm:space-x-3 md:space-x-4 rtl:space-x-reverse items-center">
          {user ? (
            <>
              <button
                onClick={handleLogout}
                className="text-black bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xs sm:text-sm px-3 sm:px-5 py-1.5 sm:py-2.5 text-center dark:bg-white dark:hover:bg-gray-200 dark:focus:ring-blue-800"
              >
                Logout
              </button>
              <button
                onClick={toggleSidebar}
                className="text-white hover:text-gray-300 focus:outline-none transition duration-300 ease-in-out transform hover:scale-110"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </> 
            // <a
            //   href="/auth/login"
            //   className="text-black bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xs sm:text-sm px-3 sm:px-5 py-1.5 sm:py-2.5 text-center dark:bg-white dark:hover:bg-gray-200 dark:focus:ring-blue-800"
            // >
            //   Login
            // </a>
          ) : null}
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
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-blue-900 text-white p-6 transform transition-all duration-500 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-white transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-70"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="mt-8 transition-opacity duration-500 ease-in-out opacity-100">
          <h2 className="text-xl font-bold mb-4">User Profile</h2>
          {/* Tambahkan konten profil di sini */}
          <p className="transition-all duration-300 ease-in-out">
            Name: {user?.name}
          </p>
          <p className="transition-all duration-300 ease-in-out">
            Email: {user?.email}
          </p>
          {/* Tambahkan lebih banyak informasi profil jika diperlukan */}
        </div>
      </div>
    </nav>
  );
}
