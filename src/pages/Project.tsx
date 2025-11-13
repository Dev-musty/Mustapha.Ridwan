import Divider from "../component/Divider";
import Footer from "../component/Footer";
import { Nav } from "../component/nav";
import { portfolio_data } from "../../data";
import ProjectComp from "../component/Project";
import notisys from "../assets/notification system.png";
import country from "../assets/country.png";
import ai_agent from "../assets/ai.png"
import ConnectSection from "../component/ConnectSection";
const Project = () => {
  return (
    <>
      <Nav />
      <main className=" mt-[50px] mx-[15px] font-firacode text-[#E4E4E7]">
        <h2 className="text-[18px] text-[#00E5FF] text-center">//Project</h2>
        <Divider />
        {/* Project */}
        <ProjectComp
          img={notisys}
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
          img={country}
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
          img={ai_agent}
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
        {/* Let's connect*/}
        <ConnectSection />
      </main>
      <Footer />
    </>
  );
};

export default Project;
