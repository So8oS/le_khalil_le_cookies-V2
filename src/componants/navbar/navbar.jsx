import React from "react";
// import "./navbar.css";
import Logo from "./logo.svg";
import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { Cart } from "../cart/cart";
import { Cartdropdown } from "../cartdropdown/cartdropdown";
// export const Navbar = () => {
//   return (
//     <Fragment>
//       <nav className="container">
//         <Link className="nav-link" to="./">
//           <div className="title-container">
//             <img src={Logo} className="title-logo" alt="Logo" />
//             <h1 className="title-name">Le Khalil Le Cookies</h1>
//           </div>
//         </Link>

//         <ul className="nav-items">
//           <Link className="nav-link" to="./contactus">
//             <li className="nav-item">Contact us</li>
//           </Link>

//           <Link className="nav-link" to="./whoarewe">
//             <li className="nav-item">Who Are We </li>
//           </Link>
//           <li className="nav-item">
//             <Cart />
//           </li>
//         </ul>
//       </nav>
//     </Fragment>
//   );
// };
export const Navbar = () => {
  return (
    <Fragment>
      <nav className="w-screen flex justify-between bg-white h-14 lg:h-fit">
        <Link className="cursor-pointer" to="./">
          <div className="flex items-center">
            <img src={Logo} className="w-10 lg:w-12" alt="Logo" />
            <div className="font-bold font-pacifico text-sm lg:text-xl ml-1">
              Le Khalil Le Cookies
            </div>
          </div>
        </Link>

        <ul className="lg:flex hidden lg:items-center space-x-3 mr-4">
          <Link className="cursor-pointer" to="./contactus">
            <li className="text-[1.35rem] hover:scale-110 transition-all duration-150">
              Contact us
            </li>
          </Link>

          <Link className="cursor-pointer" to="./whoarewe">
            <li className="text-[1.35rem]">Who Are We </li>
          </Link>
          <li className="text-[1.35rem]">
            <Cart />
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};
