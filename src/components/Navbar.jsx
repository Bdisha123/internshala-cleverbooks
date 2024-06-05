import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-150px";
        }
        prevScrollpos = currentScrollPos;
    };

    return (
        <>
            <nav id="navbar"
                className={`sticky top-0 z-50 py-4 backdrop-blur-xl backdrop-opacity-60 border-b border-neutral-700/80 ${mobileDrawerOpen ? "bg-neutral-900" : ""
                    }`}
                style={{ backgroundColor: mobileDrawerOpen ? "rgb(23, 23, 23)" : "rgba(0, 0, 0, 0.6)" }}
            >
                <div className="container px-4 mx-auto relative text-sm">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center flex-shrink-0">
                            <img className="h-8 w-22 ml-2 pl-3" src={logo} alt="logo" />
                        </div>
                        <ul className="hidden lg:flex ml-14 space-x-12">
                            {navItems.map((item, index) => (
                                <li
                                    key={index}
                                    className="text-white font-medium hover:bg-gradient-to-r from-blue-400 to-purple-400 hover:text-transparent bg-clip-text transition duration-300"
                                >
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="hidden lg:flex justify-center space-x-12 items-center mr-10">
                            <a
                                href="#"
                                className="py-2 px-3 font-medium rounded-md bg-clip-text text-transparent bg-gradient-to-r from-[#FC907E] to-[#9F6EED] hover:bg-none hover:text-white transition duration-300"
                            >
                                Login
                            </a>
                            <a
                                href="#"
                                className="bg-gradient-to-tr from-salmon to-medium-purple py-2 px-3 rounded-md text-white hover:bg-white hover:text-purple-800 transition duration-300"
                            >
                                Talk to Us
                            </a>
                        </div>
                        <div className="lg:hidden md:flex flex-col justify-end">
                            <button onClick={toggleNavbar}>
                                {mobileDrawerOpen ? <X color="white" /> : <Menu color="white" />}
                            </button>
                        </div>
                    </div>
                    {mobileDrawerOpen && (
                        <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                            <ul>
                                {navItems.map((item, index) => (
                                    <li
                                        key={index}
                                        className="py-4 text-white font-medium hover:bg-gradient-to-r from-blue-400 to-purple-400 hover:text-transparent bg-clip-text transition duration-300"
                                    >
                                        <a href={item.href}>{item.label}</a>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex space-x-6">
                                <a
                                    href="#"
                                    className="py-2 px-3 font-medium rounded-md bg-clip-text text-transparent bg-gradient-to-r from-[#FC907E] to-[#9F6EED] hover:bg-none hover:text-white transition duration-300"
                                >
                                    Login
                                </a>
                                <a
                                    href="#"
                                    className="bg-gradient-to-tr from-salmon to-medium-purple py-2 px-3 rounded-md text-white hover:bg-white hover:text-purple-800 transition duration-300"
                                >
                                    Create an account
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
