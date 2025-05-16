import React from "react";

const Products = ({ name, items, title, desc, btn1, btn2, backImg, color }) => {
  const isWhite = color === "white";

  const textColor = isWhite ? "text-white" : "text-black";
  const btn2Text = isWhite ? "text-black" : "text-white";
  const borderColor = isWhite ? "bg-white" : "bg-black";
  const btn2Bg = isWhite ? "bg-white" : "bg-black";
  const btn2HoverText = isWhite ? "hover:text-white" : "hover:text-black";
  const btn2HoverBg = isWhite ? "hover:bg-black" : "hover:bg-white";

  return (
    <div
      style={{
        backgroundImage: `url(${backImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "650px",
      }}
      className="mt-15 flex flex-col justify-between items-center text-center gap-y-4 px-[15px] py-12"
    >
      <div>
        <h2 className={`text-[32px] font-bold ${textColor}`}>{name}</h2>
        <ul className={`flex flex-wrap justify-center gap-4 font-medium mt-2 ${textColor}`}>
          {items?.map((item) => (
            <li key={item} className="relative cursor-pointer group">{item} <span
            className={`absolute left-0 bottom-0 w-full h-[2px] duration-300 scale-0 group-hover:scale-100 ${borderColor}`}
          ></span></li>
          ))}
        </ul>
      </div>

      <div>
        <h1 className={`text-[36px] max-sm:text-[30px] font-bold ${textColor}`}>{title}</h1>
        <p className={`max-w-[500px] mx-auto text-[16px]  ${textColor}`}>{desc}</p>
        <div className="flex max-sm:flex-col-reverse gap-4 mt-4 justify-center">
          <button
            className={`relative group ${textColor} font-semibold text-[16px] cursor-pointer`}
          >
            {btn1}
            <span
                      className={`absolute left-0 bottom-0 w-full h-[2px] duration-300 scale-0 group-hover:scale-100 ${borderColor}`}
                    ></span>
          </button>

          <button
            className={`px-4 py-2 rounded-3xl font-semibold ${btn2Bg} ${btn2Text} ${btn2HoverBg} ${btn2HoverText} duration-300 cursor-pointer`}
          >
            {btn2}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
