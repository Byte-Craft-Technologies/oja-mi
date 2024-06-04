import React from 'react';

const Navbar = () => {
    
    return (
        <div className="bg-white md:flex md:justify-between">
            <div className="logo">
                <img src="/logo.svg" alt="Oja mi logo"/>
            </div>
            <div className="hidden md:block nav-items mt-10 font-inter text-gray-600">
                <ul className="list-none flex">
                    <li className="mr-5 px-4 py-2 hover:rounded-md hover:bg-gray-100"><a href="#">Acceil</a></li>
                    <li className="mr-5 px-4 py-2 hover:rounded-md hover:bg-gray-100"><a href="#">Avantages</a></li>
                    <li className="mr-5 px-4 py-2 hover:rounded-md hover:bg-gray-100"><a href="#">Shopping</a></li>
                    <li className="mr-5 px-4 py-2 hover:rounded-md hover:bg-gray-100">
                        <div className="relative inline-block text-left">
                            <a type="button" className="inline-flex items-center  text-sm font-medium text-gray-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                CCM
                                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </a>

                        </div>
                    </li>
                </ul>
            </div>
            <div></div>
        </div>
    );
};

export default Navbar;
