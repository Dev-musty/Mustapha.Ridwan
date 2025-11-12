import { Nav } from "../component/nav";
import Footer from "../component/Footer";
import { portfolio_data } from "../../data";
import Education from "../component/Education";
import Divider from "../component/Divider";
import resume from '../assets/Mustapha Ridwan Temitope Resume (1).pdf'
const About = () => {
  return (
    <>
      <Nav />
      <main className="mt-[50px] mx-[15px] font-firacode text-[#E4E4E7]">
        <h2 className="text-[18px] text-[#00E5FF] text-center">
          //Mustapha Ridwan
        </h2>
        <h6 className="text-[16px] text-[400] text-center pt-[10px]">
          I'm a Full Stack Developer
        </h6>
        <div
          className="mt-[25px] text-center
        "
        >
          <p className="text-[14px] text-[400] mb-[4px]">
            {portfolio_data.user_details.bio}
          </p>
          <span className="text-[11px] text-[#E4E4E7] text-[100] opacity-85">
            {portfolio_data.user_details.tag}
          </span>
          <br />
        </div>
        {/* Resume */}
        <div className="mt-[10px] text-center">
          <a href={resume} target="_blank" rel="noopener noreferrer" download>
            <span className="slash">//</span>Resume
          </a>
        </div>
        {/* Experience */}
        <div className="mt-[50px]">
          <h2 className="text-[50px]">1+</h2>
          <p className="mb-[5px]">Experience</p>
          <hr className="mb-[10px]" />
        </div>
        {/* Exducation */}
        <h2 className="text-[#00E5FF] text-[16px] mt-[50px] mb-[20px]">
          //Education
        </h2>
        <Education
          title="Bachelor of science in Mechanical Engineering"
          timeLine="2023-2027"
          about=""
          state={["Inveiw"]}
        />
        <Education
          title="Full Stack Development"
          timeLine=""
          about="Cap Tech hub program"
          state={[
            "Currently in the luanch phase of the program.",
            "Building CampusLink",
            "Specialized in React and Node.js",
          ]}
        />
        {/* What I'm up to */}
        <div className="mt-[50px]">
          <h2 className="text-[#00E5FF] text-[16px] mb-[10px]">
            //What I'm up to
          </h2>
          <div className="text-[13px]">
            <p className="pb-[2px]">
              <span className="pound-sign text-[#3ECF8E]">#</span> Building
              CampusLink
            </p>
            <p>
              <span className="pound-sign text-[#3ECF8E]">#</span> Open to Full
              Stack and Backend engineering roles{" "}
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

export default About;
