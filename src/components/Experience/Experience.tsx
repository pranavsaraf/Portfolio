import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Experience() {
  return (
    <>
    <Container id="experience">
    <h2>My Experience</h2>
    <div className="experiences">

      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <div className="body">

          <h3  >PayWithRing / Kissht</h3>
          <h3 >Software Developer Engineer</h3>
            <p>
            RING, India's leading fintech launched in 2022 by OnEMi Technology Solutions, specializes in data-driven lending with over 11 million customers. At RING, I gained expertise in Golang development, API creation, serverless API development, and AWS Lambda coding. I contributed to cross-pod discussions, team building, and efficient project delivery using tools like Jira, Bitbucket, and Postman, while thriving in a collaborative work environment.
            </p>
          </div>
          <footer> <ul className="tech-list"> <li>Golang</li><li>Docker</li><li>React</li><li>Gin</li><li>lambda</li><li>php (laravel)</li> </ul> </footer>
        </div>
      </ScrollAnimation>
      
      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <div className="body">
          <h3  >PayWithRing</h3>
          <h3 >Software Developer Intern</h3>
            <p>
            RING, India's leading fintech launched in 2022 by OnEMi Technology Solutions, specializes in data-driven lending with over 11 million customers. At RING, I gained expertise in Golang development, API creation, serverless API development, and AWS Lambda coding. I contributed to cross-pod discussions, team building, and efficient project delivery using tools like Jira, Bitbucket, and Postman, while thriving in a collaborative work environment.
          </p>
          </div>
          <footer>
            <ul className="tech-list">
            <li>Golang</li>
              <li>React</li>
              <li>Kafka</li>
              <li>Node</li>
              <li>MongoDB</li>
            </ul>
          </footer>
        </div>
      </ScrollAnimation>


      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <div className="body">
            <h3>Tag8</h3>
            <h3>Full Stack Dev Intern</h3>
            <p>
            I designed and developed RESTful APIs, implemented secure authentication and data validation, handled file uploads and data conversion, and optimized database schemas for efficient retrieval. I also ensured data integrity, improved system performance, and collaborated with the team to deliver a seamless and secure web application on time.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>Node</li>
              <li>Express</li>
              <li>MySQL</li>
              <li>React</li>
            </ul>
          </footer>
        </div>
      </ScrollAnimation>
    </div>
  </Container>
    </>
  );
}