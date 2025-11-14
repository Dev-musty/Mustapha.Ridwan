import { Link } from "react-router-dom";
import { portfolio_data } from "../../data";
const Footer = () => {
  return (
    <>
      <footer className="font-firacode text-[#E4E4E7]">
        <div className="mx-[15px] mt-[10px]  flex justify-between">
          <div className="flex flex-col leading-[2]">
            <h2 className="text-[15px] md:text-[30px]">Quick links</h2>
            <Link className="cursor-pointer md:text-[22px]" to="/">
              Home
            </Link>
            <Link className="cursor-pointer md:text-[22px]" to="/about">
              About
            </Link>
            <Link className="cursor-pointer md:text-[22px]" to="/project">
              Project
            </Link>
            <Link className="cursor-pointer md:text-[22px]" to="/contact">
              Contact
            </Link>
          </div>
          <div className="flex flex-col leading-[2]">
            <h2 className="text-[15px] md:text-[30px]">Dev</h2>
            <a
              href={portfolio_data.user_details.github}
              className="md:text-[22px]"
            >
              Github
            </a>
          </div>
          <div className="flex flex-col leading-[2]">
            <h2 className="text-[15px] md:text-[30px]">Social</h2>
            <a href={portfolio_data.user_details.X} className="md:text-[22px]">
              X
            </a>
            <a
              href={portfolio_data.user_details.linkedin}
              className="md:text-[22px]"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <p className="flex items-center justify-center text-[10px] ">
          <span className="text-[20px] mr-2">&copy;</span>
          <span>2025 Mustapha Ridwan.</span>
        </p>
      </footer>
    </>
  );
};

export default Footer;
