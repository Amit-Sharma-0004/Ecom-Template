import HomeLayout from "@/layouts/HomeLayout";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [currentFormType, setCurrentFormType] = useState("login");

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex flex-col w-full items-center bg-gray-50 py-10">
            <div className="flex flex-col w-full items-center  min-h-[510px]">
                {/* Breadcrumb */}
                <div className="w-full max-w-6xl text-sm text-gray-500 mb-4">
                    HOME &gt; <span className="text-black">MY ACCOUNT</span>
                </div>

                {/* Login/Register Form */}
                <div className="w-full max-w-md bg-white shadow-lg rounded-md p-8 mb-16 ">
                    <div className="flex justify-center mb-6">
                        <span
                            className={`text-lg font-bold pb-1 mr-4 cursor-pointer ${currentFormType === "login"
                                ? "border-b-2 border-black"
                                : "text-gray-400"
                                }`}
                            onClick={() => setCurrentFormType("login")}
                        >
                            LOGIN
                        </span>
                        <span
                            className={`text-lg font-bold pb-1 cursor-pointer ${currentFormType === "register"
                                ? "border-b-2 border-black"
                                : "text-gray-400"
                                }`}
                            onClick={() => setCurrentFormType("register")}
                        >
                            REGISTER
                        </span>
                    </div>

                    {currentFormType === "login" ? (
                        <form>
                            {/* Login Form */}
                            <div className="mb-4">
                                <label
                                    className="block text-gray-600 text-sm mb-1"
                                    htmlFor="email"
                                >
                                    Username or email address *
                                </label>
                                <input
                                    id="email"
                                    type="text"
                                    placeholder="Enter your email"
                                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="mb-4 relative">
                                <label
                                    className="block text-gray-600 text-sm mb-1"
                                    htmlFor="password"
                                >
                                    Password *
                                </label>
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute right-3 top-9 text-gray-500 hover:text-blue-500 focus:outline-none"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>

                            <div className="flex items-center justify-between mb-4">
                                <label className="flex items-center text-gray-500 text-sm">
                                    <input type="checkbox" className="mr-2" />
                                    Remember me
                                </label>
                                <a href="#" className="text-blue-500 text-sm hover:underline">
                                    Lost your password?
                                </a>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                            >
                                Log in
                            </button>
                        </form>
                    ) : (
                        <form>
                            {/* Register Form */}
                            <div className="mb-4">
                                <label
                                    className="block text-gray-600 text-sm mb-1"
                                    htmlFor="name"
                                >
                                    Full Name *
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    className="block text-gray-600 text-sm mb-1"
                                    htmlFor="email"
                                >
                                    Email Address *
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="mb-4 relative">
                                <label
                                    className="block text-gray-600 text-sm mb-1"
                                    htmlFor="password"
                                >
                                    Password *
                                </label>
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Create your password"
                                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute right-3 top-9 text-gray-500 hover:text-blue-500 focus:outline-none"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                            >
                                Register
                            </button>
                        </form>
                    )}
                </div>
            </div>
            {/* Newsletter Section */}
            <div className="w-full bg-[#233A95] text-white py-10">
                <div className="my-container flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
                    {/* Left Text */}
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold">
                            $20 discount for your first order
                        </h3>
                        <p className="text-2xl font-bold mb-2">
                            Join our newsletter and get...
                        </p>
                        <p className="text-gray-300 text-sm">
                            Join our email subscription now to get updates on promotions and
                            coupons.
                        </p>
                    </div>

                    {/* Email Input */}
                    <div className="flex w-full md:w-auto">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full md:w-80 px-4 py-2 text-gray-700 rounded-l focus:outline-none"
                        />
                        <button className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-r">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

LoginPage.Layout = HomeLayout;
