import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6"; // Only need one icon
import { Link } from "react-router-dom";
import resume from '../assets/Mustapha Ridwan Temitope Resume (1).pdf'
export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`font-firacode flex justify-between px-[10px] transition-all duration-300 ease-in-out ${
        menuOpen ? "items-start py-[10px]" : "items-center py-[10px]"
      }`}
    >
      <h3 className="text-[#E4E4E7] text-[16px]">{"<MustaphaRidwan/>"}</h3>
      <div
        className={`menu flex flex-col bg-[#E4E4E7] text-[#000000] transition-all duration-300 ease-in-out ${
          menuOpen ? "rounded-[10px] p-[10px]" : "rounded-[30px] p-[10px] h-[40px]"
        }`}
      >
        <div className="flex items-center justify-between">
          <p className="mr-[10px] text-[16px]">Menu</p>
          <button onClick={handleClick}>
            <FaAngleDown
              className={`text-[#000000] text-[20px] pt-[3px]
                        transition-transform duration-300
                        ${menuOpen ? "rotate-180" : "rotate-0"}`}
            />
          </button>
        </div>
        <div
          className={`links flex flex-col
                  transition-all duration-300 ease-in-out
                  ${
                    menuOpen
                      ? "max-h-96 opacity-100 gap-[8px] pt-[8px]"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
        >
          <Link className="link" to="/about">
            About
          </Link>
          <Link className="link" to="/project">
            Project
          </Link>
          <Link className="link" to="/contact">
            Contact
          </Link>
          <a className="link text-[13px]" href={resume} download>
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};
