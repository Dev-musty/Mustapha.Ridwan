import { Nav } from "../component/nav";
import Skills from "../component/Skills";
import { portfolio_data } from "../../data";
import { Link } from "react-router-dom";
import ProjectComp from "../component/Project";
import Footer from "../component/Footer";
import resume from "../assets/MUSTHAPHA RIDWAN RESUME.pdf";
import ConnectSection from "../component/ConnectSection";
import UptoSection from "../component/UptoSection";
import Experience from "../component/Experience";
const Home = () => {
  return (
    <>
      <Nav />
      <main className="font-firacode mx-[25px] mt-[50px] text-[#E4E4E7]">
        <h1 className=" text-[32px] font-[600] w-[2%] md:text-[70px] md:w-[100%]">
          MUSTAPHA RIDWAN
        </h1>
        <p className="text-[16px] text-[400] md:text-[30px] md:text-[700]">
          I'm a Full Stack Developer
        </p>
        <div className="mt-[45px] md:mt-[100px]">
          <p className="text-[14px] text-[400] mb-[4px] md:text-[23px] md:ml-[200px]">
            {portfolio_data.user_details.bio}
          </p>
          <span className="text-[11px] text-[#E4E4E7] text-[100] opacity-85 md:text-[21px] md:ml-[200px]">
            {portfolio_data.user_details.tag}
          </span>
        </div>
        <div className="social-links flex justify-between md:justify-start md:gap-[10px] mt-[15px] md:mt-[30px]">
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="md:text-[23px]"
            download
          >
            <span className="slash">//</span>Resume
          </a>
          <a
            href={portfolio_data.user_details.linkedin}
            target="_blank"
            className="md:text-[23px]"
            rel="noopener noreferrer"
          >
            <span className="slash">//</span>LinkedIn
          </a>
          <a
            href={portfolio_data.user_details.X}
            target="_blank"
            className="md:text-[23px]"
            rel="noopener noreferrer"
          >
            <span className="slash">//</span>X
          </a>
          <a
            href={portfolio_data.user_details.email}
            target="_blank"
            className="md:text-[23px]"
            rel="noopener noreferrer"
          >
            <span className="slash">//</span>Email
          </a>
          <a
            href={portfolio_data.user_details.github}
            target="_blank"
            className="md:text-[23px]"
            rel="noopener noreferrer"
          >
            <span className="slash">//</span>Github
          </a>
        </div>
        {/* Skills */}
        <div className="skills mt-[50px] md:mt-[70px]">
          <h2 className="text-[#00E5FF] text-[16px] mb-[20px] md:text-[30px]">
            //Skills
          </h2>
          <div className=" lg:grid lg:grid-cols-2 lg:gap-8">
            <Skills
              title={portfolio_data.skills.backend.title}
              skillList={portfolio_data.skills.backend.tools}
            />
            <Skills
              title={portfolio_data.skills.frontend.title}
              skillList={portfolio_data.skills.frontend.tools}
            />
          </div>
        </div>
        {/* Experience */}
        <Experience />
        {/* Project */}
        <div>
          <div className="flex items-center mt-[50px] mb-[20px]">
            <h2 className="text-[#00E5FF] text-[16px] md:text-[30px]">
              //Projects
            </h2>
            <hr className="flex-1 mx-[3px] text-[#E4E4E7] md:border-[1.5px]" />
            <Link to="/project" className="text-white md:text-[25px]">
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
            stack={portfolio_data.project.notification_system.stack}
            problem={portfolio_data.project.notification_system.problem}
            solution={portfolio_data.project.notification_system.solution}
            features={portfolio_data.project.notification_system.features}
            glinks={portfolio_data.project.notification_system.github_repo}
            links_live={portfolio_data.project.notification_system.live_link}
          />
          <ProjectComp
            img=""
            title={portfolio_data.project.country_exchange_api.title}
            tag={portfolio_data.project.country_exchange_api.tags}
            short_description={
              portfolio_data.project.country_exchange_api.short_description
            }
            stack={portfolio_data.project.country_exchange_api.stack}
            problem={portfolio_data.project.country_exchange_api.problem}
            solution={portfolio_data.project.country_exchange_api.solution}
            features={portfolio_data.project.country_exchange_api.features}
            glinks={portfolio_data.project.country_exchange_api.github_repo}
            links_live={portfolio_data.project.country_exchange_api.live_link}
          />
          <ProjectComp
            img=""
            title={portfolio_data.project.task_management_AI.title}
            tag={portfolio_data.project.task_management_AI.tags}
            short_description={
              portfolio_data.project.task_management_AI.short_description
            }
            stack={portfolio_data.project.task_management_AI.stack}
            problem={portfolio_data.project.task_management_AI.problem}
            solution={portfolio_data.project.task_management_AI.solution}
            features={portfolio_data.project.task_management_AI.features}
            glinks={portfolio_data.project.task_management_AI.github_repo}
            links_live={portfolio_data.project.task_management_AI.live_link}
          />
        </div>
        {/* Development process */}
        {/* What I'm up to */}
        <UptoSection />
        {/* Let's connect*/}
        <ConnectSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
