import React from "react";
import { IoIosSearch, IoIosMenu } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import { LINKS } from "../../static";

const Header = () => {
  return (
    <div>
      <div className="max-w-[1300px] mx-auto px-[15px] flex justify-between items-center min-h-[80px]">
        <div className="flex gap-x-10">
          <img src="./image/samsung.png" alt="samsungLogo" />
          <ul className="flex gap-x-3 text-[15px] font-bold max-lg:hidden">
            {LINKS?.map((link, index) => (
              <li
                key={index}
                className="relative cursor-pointer hover:text-black duration-300 before:absolute before:left-0 before:bottom-[-26px] before:h-[3px] before:w-[0%] hover:before:w-[100%] before:duration-300 before:bg-black"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-x-3 text-[28px]">
          <IoIosSearch className="cursor-pointer"/>
          <AiOutlineShoppingCart className="cursor-pointer"/>
          <HiOutlineUser className="cursor-pointer"/>
          <IoIosMenu className="hidden max-lg:block cursor-pointer text-[30px]"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
