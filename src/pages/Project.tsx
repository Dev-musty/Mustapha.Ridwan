import Divider from "../component/Divider";
import Footer from "../component/Footer";
import { Nav } from "../component/nav";
import { portfolio_data } from "../../data";
import ProjectComp from "../component/Project";
import notisys from "../assets/notification system.png";
import country from "../assets/country.png";
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
        />
        <ProjectComp
          img={country}
          title={portfolio_data.project.country_exchange_api.title}
          tag={portfolio_data.project.country_exchange_api.tags}
          short_description={
            portfolio_data.project.country_exchange_api.short_description
          }
        />
        <ProjectComp
          img={country}
          title={portfolio_data.project.tickect_generator.title}
          tag={portfolio_data.project.tickect_generator.tags}
          short_description={
            portfolio_data.project.tickect_generator.short_description
          }
        />
        {/* Let's connect*/}
        <div className="mt-[50px]">
          <h2 className="text-center">Let's connect</h2>
          <div className="social-links flex justify-center gap-[10px] mt-[15px]">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <span className="slash">//</span>Email
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
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

export default Project;
