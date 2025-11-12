import { Nav } from "../component/nav";
import Skills from "../component/Skills";
import { portfolio_data } from "../../data";
import { Link } from "react-router-dom";
import ProjectComp from "../component/Project";
import Divider from "../component/Divider";
import Footer from "../component/Footer";
import resume from "../assets/Mustapha Ridwan Temitope Resume (1).pdf"
const Home = () => {
  return (
    <>
      <Nav />
      <main className="font-firacode mx-[15px] mt-[50px] text-[#E4E4E7]">
        <h1 className=" text-[32px] font-[600] w-[2%]">
          MUSTAPHA RIDWAN
        </h1>
        <p className="text-[16px] text-[400]">I'm a Full Stack Developer</p>
        <div className="mt-[45px]">
          <p className="text-[14px] text-[400] mb-[4px]">
            {portfolio_data.user_details.bio}
          </p>
          <span className="text-[11px] text-[#E4E4E7] text-[100] opacity-85">
            {portfolio_data.user_details.tag}
          </span>
        </div>
        <div className="social-links flex justify-between mt-[15px]">
          <a href={resume} target="_blank" rel="noopener noreferrer" download>
            <span className="slash">//</span>Resume
          </a>
          <a href={portfolio_data.user_details.linkedin} target="_blank" rel="noopener noreferrer" >
            <span className="slash">//</span>LinkedIn
          </a>
          <a href={portfolio_data.user_details.X} target="_blank" rel="noopener noreferrer">
            <span className="slash">//</span>X
          </a>
          <a href={portfolio_data.user_details.email} target="_blank" rel="noopener noreferrer">
            <span className="slash">//</span>Email
          </a>
          <a href={portfolio_data.user_details.github} target="_blank" rel="noopener noreferrer">
            <span className="slash">//</span>Github
          </a>
        </div>
        {/* Skills */}
        <div className="skills mt-[50px]">
          <h2 className="text-[#00E5FF] text-[16px] mb-[20px]">//Skills</h2>
          <Skills
            title={portfolio_data.skills.backend.title}
            skillList={portfolio_data.skills.backend.tools}
          />
          <Skills
            title={portfolio_data.skills.frontend.title}
            skillList={portfolio_data.skills.frontend.tools}
          />
        </div>
        {/* Experience */}
        <div className="mt-[50px]">
          <h2 className="text-[50px]">1+</h2>
          <p className="mb-[5px]">Experience</p>
          <hr className="mb-[10px]" />
        </div>
        {/* Project */}
        <div>
          <div className="flex items-center mt-[50px] mb-[20px]">
            <h2 className="text-[#00E5FF] text-[16px]">//Projects</h2>
            <hr className="flex-1 mx-[3px] text-[#E4E4E7]" />
            <Link to="/project" className="text-white">
              See all
            </Link>
          </div>
          <ProjectComp
            img=""
            title={portfolio_data.project.notification_system.title}
            tag={portfolio_data.project.notification_system.tags}
            short_description={
              portfolio_data.project.notification_system.short_description
            }
          />
          <ProjectComp
            img=""
            title={portfolio_data.project.country_exchange_api.title}
            tag={portfolio_data.project.country_exchange_api.tags}
            short_description={
              portfolio_data.project.country_exchange_api.short_description
            }
          />
          <ProjectComp
            img=""
            title={portfolio_data.project.tickect_generator.title}
            tag={portfolio_data.project.tickect_generator.tags}
            short_description={
              portfolio_data.project.tickect_generator.short_description
            }
          />
        </div>
        {/* Development process */}
        {/* What I'm up to */}
        <div className="mt-[50px]">
          <h2 className="text-[#00E5FF] text-[16px] mb-[10px]">
            //What I'm up to
          </h2>
          <div className="text-[13px]">
            <p className="pb-[2px]">
              <span className="pound-sign text-[#3ECF8E]">#</span> Building CampusLink
            </p>
            <p>
              <span className="pound-sign text-[#3ECF8E]">#</span> Open to Full Stack and
              Backend engineering roles{" "}
            </p>
          </div>
        </div>
        {/* Let's connect*/}
        <div className="mt-[50px]">
          <h2 className="text-center">Let's connect</h2>
          <div className="social-links flex justify-center gap-[10px] mt-[15px]">
            <a href={portfolio_data.user_details.email} target="_blank" rel="noopener noreferrer">
              <span className="slash">//</span>Email
            </a>
            <a href={portfolio_data.user_details.whatsapp} target="_blank" rel="noopener noreferrer">
              <span className="slash">//</span>WhatsApp
            </a>
          </div>
          <Divider />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
