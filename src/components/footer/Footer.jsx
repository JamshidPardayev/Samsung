import React from "react";
import { FOOTERLINKS } from "../../static";
import { FaChevronDown } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-10">
      <div className="p-5 flex flex-wrap justify-between gap-x-2 max-md:hidden">
        {FOOTERLINKS?.map((footerLink) => (
          <div key={footerLink.id} className="mb-4">
            <h2 className="font-bold text-lg mb-2">{footerLink.title}</h2>
            <ul className="space-y-1">
              {footerLink.links?.map((link, index) => (
                <li
                  key={index}
                  className="relative text-[16px] max-lg:text-[13px] group text-gray-600 hover:text-black cursor-pointer"
                >
                  {link}
                  <span
                    className={`absolute left-0 bottom-0 bg-black w-0 h-[2px] duration-300 group-hover:w-full`}
                  ></span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="hidden max-md:block ">
        <div className="flex items-center justify-between px-[20px] h-[70px] border-b border-b-[#a3a3a3] text-[32px] font-semibold cursor-pointer "><p>SHOP</p> <FaChevronDown /></div>
        <div className="flex items-center justify-between px-[20px] h-[70px] border-b border-b-[#a3a3a3] text-[32px] font-semibold cursor-pointer "><p>SUPPORT</p> <FaChevronDown /></div>
        <div className="flex items-center justify-between px-[20px] h-[70px] border-b border-b-[#a3a3a3] text-[32px] font-semibold cursor-pointer "><p>OFFERS</p> <FaChevronDown /></div>
        <div className="flex items-center justify-between px-[20px] h-[70px] border-b border-b-[#a3a3a3] text-[32px] font-semibold cursor-pointer "><p>SUSTANIBILITY</p> <FaChevronDown /></div>
        <div className="flex items-center justify-between px-[20px] h-[70px] border-b border-b-[#a3a3a3] text-[32px] font-semibold cursor-pointer "><p>ABOUT US</p> <FaChevronDown /></div>
      </div>
    </div>
  );
};

export default Footer;
