import React, { useRef, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";
import userImg from "../../assets/images/avatar-icon.png";
import { BiMenu } from "react-icons/bi";

import { navLink } from "../../packages/navlink"; // to create nav menu from packages

function Header() {
  const headerref = useRef(null); //where navbar will be at fix position
  const menuref = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ) {
        headerref.current.classList.add("sticky_header");
      } else {
        headerref.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  });

  const toggleMenu = () => menuref.current.classList.toggle("show_menu"); // for toggling the side menu 

  return (
    //here header is modified 
    <header className="header flex items-center" ref={headerref}>   
      <div className="container ">
        <div className=" flex items-center justify-between">
          {/* -logo- */}

          <div>
            <img src={logo} alt="" />
          </div>

          {/* -Navbar Menu- */}

          <div className="navigation" ref={menuref} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLink.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primanryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[600] hover:text-primanryColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>


          {/* -nav right - */}

          <div className="flex items-center gap-4">
            <div className=" hidden">
              <Link to={"/"}>
                <figure className="w-[35px] h-[35] rounded-full cursor-pointer ">
                  <img src={userImg} className="w-full rounded-full " alt="" />
                </figure>
              </Link>
            </div>

            <Link to={"/login"}>
              <button className=" bg-primanryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center rounded-[50px]">
                Login
              </button>
            </Link>

            <span className=" md:hidden" onClick={toggleMenu}>
              <BiMenu className=" w-20 font-bold text-6xl h-12 cursor-pointer " />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
