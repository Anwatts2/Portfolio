import { NavLink } from "react-router-dom";
import Hawaii from '../assets/hawaii.jpg'


const fullName = 'Ashley Watts';
const personalQuote = 'Life Is What You Make It!';
const professionalSummary = 'Seasoned professional with more than ten years of banking industry experience currently working as an Assistant Vice President within the lending product management department. Empowered, committed, and constantly learning with a broad range of experience in programming languages and interactive user interfaces. Possess knowledge of the entire web development process, command line, and shell scripting.';

const Home = () => {
  return (
    <main className="home-container">
      <section className="home-hero home-subsection">
        <h2 className="text-4xl mb-2">Hi, I am {fullName}</h2>
        <p className="subsection-paragraph">{personalQuote}</p>
        <NavLink to="/contact">
        Contact Me
        </NavLink>
        {/* Replace the src with your own placeholder and change the alt to match the description */}
        <img className="hero-background" src={Hawaii} alt="placeholder hero image" />
      </section>
      <section className="overview home-subsection">
        <h3 className="subsection-intro-header">Introduction</h3>
        <h2 className="subsection-big-header">Overview.</h2>
        <p className="subsection-paragraph">{professionalSummary}</p>
        <NavLink to="/about">
        Learn More About Me
        </NavLink>
      </section>
      <section className="projects home-subsection">
        <h3 className="subsection-intro-header">My Works</h3>
        <h2 className="subsection-big-header">Projects.</h2>
        <p className="subsection-paragraph">I have worked on multiple project, the projects I have worked on demonstrate my skills and experience through real-life examples of my work. Each project is briefly deescribed and includes links to code repositories that showcase my ability to tackle challenging problems. If you are interested in my work click on the link below to go to the project page.</p>
        <NavLink to="/projects">
        View Projects
        </NavLink>
      </section>
    </main>
  )
}

export default Home