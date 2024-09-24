
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../../api/auth/Context";
import { useRouter } from "next/navigation";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState(""); // Tambahkan state untuk nama
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const { login } = useAuth();
  const router = useRouter();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validateName = (value: string) => {
    if (/[0-9!@#$%^&*(),.?":{}|<>]/.test(value)) {
      setNameError("Names cannot contain numbers or special characters.");
    } else {
      setNameError("");
    }
    setName(value);
  };

  const validatePassword = (value: string) => {
    if (value.length < 6) {
      setPasswordError("Password must be at least 6 characters");
    } else {
      setPasswordError("");
    }
    setPassword(value);
  };

  const validateConfirmPassword = (value: string) => {
    if (value !== password) {
      setConfirmPasswordError("Password does not match");
    } else {
      setConfirmPasswordError("");
    }
    setConfirmPassword(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      const success = login(email, password);
      if (success) {
        router.push('/');
      } else {
        alert('Login gagal. Periksa kembali email dan password Anda.');
      }
    } else {
      // Logika untuk menangani registrasi
      console.log("Register submitted");
    }
  };

  const variants = {
    enter: {
      rotateY: 90,
      opacity: 0,
    },
    center: {
      rotateY: 0,
      opacity: 1,
    },
    exit: {
      rotateY: -90,
      opacity: 0,
    },
  };

  return (
    <div className="min-h-screen bg-blue-950 flex flex-col justify-center sm:py-12">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <a href="/">
          <img
            src="/images/rentalin_logo_baru_02.png"
            alt="Logo Rentalin"
            className="mx-auto h-12 mb-5"
          />
        </a>
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <AnimatePresence mode="wait">
            <motion.div
              key={isLogin ? "login" : "register"}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                rotateY: { type: "spring", stiffness: 200, damping: 20 },
                opacity: { duration: 0.1 },
              }}
            >
              <form onSubmit={handleSubmit} className="px-5 py-7">
                {isLogin ? (
                  <>
                    <label className="font-semibold text-sm text-gray-600 pb-1 block">
                      E-mail
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                      required
                    />
                    <label className="font-semibold text-sm text-gray-600 pb-1 block">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full pr-10"
                        required
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center justify-center text-sm leading-5"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <FaEyeSlash className="text-gray-500" />
                        ) : (
                          <FaEye className="text-gray-500" />
                        )}
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <label className="font-semibold text-sm text-gray-600 pb-1 block">
                      Name
                    </label>
                    <input
                      type="text"
                      className="border rounded-lg px-3 py-2 mt-1 mb-1 text-sm w-full"
                      value={name}
                      onChange={(e) => validateName(e.target.value)}
                    />
                    {nameError && (
                      <p className="text-red-500 text-xs mb-3">{nameError}</p>
                    )}
                    <label className="font-semibold text-sm text-gray-600 pb-1 block">
                      E-mail
                    </label>
                    <input
                      type="email"
                      className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className="font-semibold text-sm text-gray-600 pb-1 block">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="border rounded-lg px-3 py-2 mt-1 mb-1 text-sm w-full"
                        value={password}
                        onChange={(e) => validatePassword(e.target.value)}
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <FaEyeSlash className="text-gray-500" />
                        ) : (
                          <FaEye className="text-gray-500" />
                        )}
                      </button>
                    </div>
                    {passwordError && (
                      <p className="text-red-500 text-xs mb-3">
                        {passwordError}
                      </p>
                    )}
                    <label className="font-semibold text-sm text-gray-600 pb-1 block">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        className="border rounded-lg px-3 py-2 mt-1 mb-1 text-sm w-full"
                        value={confirmPassword}
                        onChange={(e) =>
                          validateConfirmPassword(e.target.value)
                        }
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                        onClick={toggleConfirmPasswordVisibility}
                      >
                        {showConfirmPassword ? (
                          <FaEyeSlash className="text-gray-500" />
                        ) : (
                          <FaEye className="text-gray-500" />
                        )}
                      </button>
                    </div>
                    {confirmPasswordError && (
                      <p className="text-red-500 text-xs mb-3">
                        {confirmPasswordError}
                      </p>
                    )}
                  </>
                )}
                <button
                  type="submit"
                  className="transition duration-200 bg-blue-800 hover:bg-blue-950 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                >
                  <span className="inline-block mr-2">
                    {isLogin ? "Login" : "Register"}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 inline-block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={isLogin ? "M17 8l4 4m0 0l-4 4m4-4H3" : "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"}
                    />
                  </svg>
                </button>
              </form>
            </motion.div>
          </AnimatePresence>
          <div className="p-5">
            <div className="flex justify-center gap-4">
              <button
                type="button"
                className="transition duration-200 border border-gray-200 text-gray-500 w-1/3 py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block flex items-center justify-center"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </button>
              <button
                type="button"
                className="transition duration-200 border border-gray-200 text-gray-500 w-1/3 py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block flex items-center justify-center"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                    fill="#000000"
                  />
                </svg>
                Apple
              </button>
            </div>
          </div>
          <div className="py-5">
            <div className="grid grid-cols-2 gap-1">
              <div className="text-center sm:text-left whitespace-nowrap">
                {isLogin ? (
                  <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4 inline-block align-text-top"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="inline-block ml-1">Forgot Password</span>
                  </button>
                ) : (
                  <span className="transition duration-200 mx-5 px-5 py-4 font-normal text-sm text-gray-500 flex items-center">
                    Already Registered?
                  </span>
                )}
              </div>
              <div className="text-center sm:text-right whitespace-nowrap">
                <button
                  onClick={toggleForm}
                  className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 inline-block align-text-bottom"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    />
                  </svg>
                  <span className="inline-block ml-1">
                    {isLogin ? "Register" : "Login"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5">
          <div className="grid grid-cols-2 gap-1">
            <div className="text-center sm:text-left whitespace-nowrap"></div>
          </div>
        </div>
      </div>
    </div>
  );
}