import React, { useState } from "react";
import logo from "../assets/logo6.png";
import Search from "./Search";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import useMobile from "../hooks/useMobile";
import { BsCartDash } from "react-icons/bs";
import { useSelector } from "react-redux";
import { TfiAngleDown } from "react-icons/tfi";
import { TfiAngleUp } from "react-icons/tfi";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import UserMenu from "./UserMenu";

const Header = () => {
  const [isMobile] = useMobile();
  const location = useLocation();
  const isSearchPage = location.pathname === "/search";
  const navigate = useNavigate();
  const user = useSelector((state) => state?.user);
  const [openUserMenu, setOpenUserMenu] = useState(false);

  console.log("user from store", user);

  const redirectToLoginPage = () => {
    navigate("/login");
  };

  const handleCloseUserMenu = () => {
    setOpenUserMenu(false);
  };

  const handleMobileUser = () => {
    if (!user._id) {
      navigate("/login");
      return;
    }

    navigate("/user");
  };

  return (
    <header className="sticky top-0 z-40 flex flex-col justify-center h-24 gap-1 bg-white lg:h-20 lg:shadow-md">
      {!(isSearchPage && isMobile) && (
        <div className="container flex items-center justify-between px-2 mx-auto">
          {/**logo */}
          <div className="h-full">
            <Link to={"/"} className="flex items-center justify-center h-full">
              <img
                src={logo}
                width={170}
                height={60}
                alt="logo"
                className="hidden lg:block"
              />
              <img
                src={logo}
                width={120}
                height={60}
                alt="logo"
                className="lg:hidden"
              />
            </Link>
          </div>

          {/**Search */}
          <div className="hidden lg:block">
            <Search />
          </div>

          {/**Login and my cart*/}
          <div className="">
            {/**user icons display in only mobile version**/}
            <button
              className="text-neutral-600 lg:hidden"
              onClick={handleMobileUser}
            >
              <FaRegUserCircle size={26} />
            </button>

            {/* Desktop */}
            <div className="items-center hidden gap-10 lg:flex">
              {user?._id ? (
                <div className="relative">
                  <div
                    onClick={() => setOpenUserMenu((preve) => !preve)}
                    className="flex items-center gap-1 cursor-pointer select-none"
                  >
                    <p>Account</p>
                    {openUserMenu ? (
                      <GoTriangleUp size={25} />
                    ) : (
                      <GoTriangleDown size={25} />
                    )}
                  </div>
                  {openUserMenu && (
                    <div className="absolute right-0 top-12">
                      <div className="p-4 bg-white rounded min-w-52 lg:shadow-lg">
                        <UserMenu close={handleCloseUserMenu} />
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button onClick={redirectToLoginPage} className="px-2 text-lg ">
                  Login
                </button>
              )}
              <button className="flex items-center gap-2 px-4 py-3 text-white bg-green-800 rounded hover:bg-green-700">
                {/* add to cart  */}
                <div className="animate-bounce">
                  <BsCartDash size={26} />
                </div>

                <div className="font-semibold">
                  <p>My Cart</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="container px-2 mx-auto lg:hidden">
        <Search />
      </div>
    </header>
  );
};

export default Header;
