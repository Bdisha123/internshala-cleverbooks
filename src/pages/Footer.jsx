// import React from "react";
import {
    FaTwitter,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-zinc-900 text-white py-12 lg:px-28 w-full">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap justify-between items-start mb-12">
                    <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
                        {/* <img
              src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326df120ea3eb2_logo-white.svg"
              alt="Crest Logo"
              className="h-16 mb-4"
            /> */}
                        LOGO
                        <p className="text-md pt-6 ">
                            Crest is an AI-powered supply chain software that provides
                            companies tools for demand forecasting, inventory planning and
                            more. This helps them have the right amount of stock, optimise
                            space and fulfil every order.
                        </p>
                    </div>
                    <div className="flex flex-wrap w-full lg:w-3/4 justify-between">
                        <div className="w-full lg:w-1/3 mb-8 lg:mb-0 lg:pl-16">
                            <h4 className="font-bold text-2xl mb-3 ">Explore</h4>
                            <ul>
                                <li className="p-3 pl-0">
                                    <a
                                        href="#"
                                        className="text-white hover:text-gray-400 text-md"
                                    >
                                        Product
                                    </a>
                                </li>
                                <li className="p-3 pl-0">
                                    <a
                                        href="#"
                                        className="text-white hover:text-gray-400 text-md"
                                    >
                                        Pricing
                                    </a>
                                </li>
                                <li className="p-3 pl-0">
                                    <a
                                        href="#"
                                        className="text-white hover:text-gray-400 text-md"
                                    >
                                        Customer Stories
                                    </a>
                                </li>
                                <li className="p-3 pl-0">
                                    <a
                                        href="#"
                                        className="text-white hover:text-gray-400 text-md"
                                    >
                                        Career
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
                            <h4 className="font-bold text-2xl mb-3">Learn</h4>
                            <ul>
                                <li className="p-3 pl-0">
                                    <a
                                        href="#"
                                        className="text-white hover:text-gray-400 text-md"
                                    >
                                        About us
                                    </a>
                                </li>
                                <li className="p-3 pl-0">
                                    <a
                                        href="#"
                                        className="text-white hover:text-gray-400 text-md"
                                    >
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/3 lg:pl-8">
                            <h4 className="font-bold text-2xl mb-3">Contact Crest</h4>
                            <p>
                                <a
                                    href="mailto:sales@getcrest.ai"
                                    className="text-white hover:text-gray-400 text-md font-semibold mt-4"
                                >
                                    sales@getcrest.ai
                                </a>
                            </p>
                            <p className="mt-4 text-md">
                                Registered Office:
                                <br />
                                1507, Incubex, 11th cross road, 19th Main Road, Bengaluru,
                                India. 560102
                            </p>
                            <p className="mt-4 text-md">
                                Corporate Office:
                                <br />
                                291, All Time Space, 4th Floor, 15th A Cross, Sector - 6, HSR
                                Layout, Bengaluru, India. 560102
                            </p>
                            <div className="flex mt-4 space-x-4">
                                <a href="#" className="text-white hover:text-gray-400">
                                    <FaTwitter size={24} />
                                </a>
                                <a href="#" className="text-white hover:text-gray-400">
                                    <FaFacebookF size={24} />
                                </a>
                                <a href="#" className="text-white hover:text-gray-400">
                                    <FaInstagram size={24} />
                                </a>
                                <a href="#" className="text-white hover:text-gray-400">
                                    <FaLinkedinIn size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-left border-t border-gray-700 pt-6">
                    <div className="space-x-4 mt-4">
                        <p className="text-md">
                            &copy; 2024 Crest
                            <a href="#" className="text-white hover:text-gray-400 px-4">
                                Terms of Service
                            </a>
                            <a href="#" className="text-white hover:text-gray-400 p-2">
                                Privacy Policy
                            </a>
                        </p>
                    </div>
                    <p className="mt-4 text-md">
                        Conifer Innovations Private Limited
                        <br />
                        CIN: U72900KA2022PTC163144
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;