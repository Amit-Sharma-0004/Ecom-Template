import HomeLayout from "@/layouts/HomeLayout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { setCookie } from "cookies-next";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formType, setFormType] = useState("login");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Reset errors

        const id = toast.loading("Please wait...");
        try {
            const url =
                formType === "login" ? "/api/auth/login" : "/api/auth/register";
            const body =
                formType === "login" ? { email, password } : { name, email, password };

            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            const data = await response.json();

            if (!response.ok) {
                await new Promise((resolve) => setTimeout(resolve, 1500));
                toast.update(id, {
                    render: data.message,
                    type: "error",
                    isLoading: false,
                });
                setError(data.message);
                return;
            }
            
            if (formType === "login") {
                toast.success("Success! You're logged in!");
                setCookie("token", data.token, {
                    path: "/",
                    secure: true,
                    sameSite: "strict",
                });
    
                router.push("/");
            } else {
                toast.update(id, {
                    render: data.message,
                    type: "success",
                    isLoading: false,
                });
                setFormType("login");
            }

        } catch (err) {
            console.error("Error during login:", err); // Log the issue
            setError(err.message); // Set the error message to display on the frontend
        }
    };

    return (
        <div className="flex flex-col w-full items-center bg-gray-50 py-10">
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <div className="flex flex-col w-full items-center  min-h-[510px]">
                {/* Breadcrumb */}
                <div className="w-full max-w-6xl text-sm text-gray-500 mb-4">
                    HOME &gt; <span className="text-black">MY ACCOUNT</span>
                </div>

                {/* Login/Register Form */}
                <div className="w-full max-w-md bg-white shadow-lg rounded-md p-8 pb-12 mb-16 transition-all delay-300 ease-in-out">
                    <div className="flex justify-center mb-6">
                        <span
                            className={`text-lg font-bold pb-1 mr-4 cursor-pointer ${formType === "login"
                                    ? "border-b-2 border-black"
                                    : "text-gray-400"
                                }`}
                            onClick={() => setFormType("login")}
                        >
                            LOGIN
                        </span>
                        <span
                            className={`text-lg font-bold pb-1 cursor-pointer ${formType === "register"
                                    ? "border-b-2 border-black"
                                    : "text-gray-400"
                                }`}
                            onClick={() => setFormType("register")}
                        >
                            REGISTER
                        </span>
                    </div>

                    {formType === "login" ? (
                        <form onSubmit={handleFormSubmit}>
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
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
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
                        <form onSubmit={handleFormSubmit}>
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
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
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
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
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
