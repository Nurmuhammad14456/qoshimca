import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
   return (
      <div className="bg-indigo-950 border fixed w-full">
         <nav
            aria-label="Global"
            className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
         >
            <div className="flex lg:flex-1">
               <Link to="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                     src="https://dummyimage.com/100x40/4f46e5/ffffff&text=Logo"
                     alt="Logo"
                     className="h-8 w-auto"
                  />
               </Link>
            </div>

            <div className="hidden lg:flex lg:gap-x-12">
               <Link to="/xodimlar" className="text-sm font-semibold text-white">
                  Xodimlar haqida
               </Link>
               <Link to="/statistika" className="text-sm font-semibold text-white">
                  Statistika
               </Link>
               <a href="#" className="text-sm font-semibold text-white">
                  Marketplace
               </a>
               <a href="#" className="text-sm font-semibold text-white">
                  Company
               </a>
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
               <a
                  href="#"
                  className="border px-3 py-2 rounded-2xl text-sm font-semibold text-white"
               >
                  Log in <span aria-hidden="true">&rarr;</span>
               </a>
            </div>
         </nav>
      </div>
   );
};

export default Header;
