import Divider from "../component/Divider"
import Footer from "../component/Footer"
import ContactForm from "../component/Form"
import { Nav } from "../component/nav"
import resume from '../assets/Mustapha Ridwan Temitope Resume (1).pdf'
import { portfolio_data } from "../../data"
const Contact = () => {
  return (
    <>
      <Nav/>
      <main className="font-firacode mx-[15px] mt-[50px] text-[#E4E4E7]">
        <h1>LET'S CONNECT & <br /> COLLABORATE</h1>
        <div className="social-links grid grid-cols-3 gap-x-[10px] gap-y-[10px] mt-[15px]">
          <a href={resume} target="_blank" rel="noopener noreferrer" download>
            <span className="slash">//</span>Resume
          </a>
          <a href={portfolio_data.user_details.linkedin} target="_blank" rel="noopener noreferrer">
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
          <a href={portfolio_data.user_details.whatsapp} target="_blank" rel="noopener noreferrer">
            <span className="slash">//</span>WhatsApp
          </a>
        </div>
        <ContactForm/>
        <Divider/>
      </main>
      <Footer/>
    </>
  )
}

export default Contact

