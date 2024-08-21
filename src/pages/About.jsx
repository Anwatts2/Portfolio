import { NavLink } from 'react-router-dom';
import PlaceholderImage from '../assets/placeholder_image.png';
import Headshot from '../assets/headshot.jpg';

// Replace these variables with your information
const firstName = 'Ashley';
const jobTitle = 'Product Manager';
const company = 'Citibank';
const mainDuty = 'lending product management department';
const jobLocation = 'Irving, TX';
const briefJobDescription = 'I mitigate risk during the lifecycle of a loan transactions';
const careerObjective = 'One of my career goals, is to become a senior leader in the fintech or tech industry';
const personalLife = 'I love life, family, friends, food, and traveling';


const About = () => {
  return (
    <main className="about-container">
      <section className='about-content-container'>
        <section className='image-container'>
          {/* Replace this placeholder image and alt tag with a professional headshot */}
          <img className='Headshot' src={Headshot} alt="headshot" />
        </section>
        <section className='description-container'>
          <h2 className='text-xl font-medium'>I&apos;m {firstName}, a {jobTitle} at {company} in the {mainDuty} located in {jobLocation}</h2>
          <p>{briefJobDescription}</p>
          <p>{careerObjective}</p>
          <p>{personalLife}</p>
          <p className='mb-4'>I am confident that my skills and experience would be a valuable addition to your team. Please feel free to contact me to discuss how I can contribute to your organization!</p>
          <NavLink to="/contact" className="contact-me-btn">Contact Me</NavLink>
        </section>
      </section>
    </main>
  )
}
 export default About;