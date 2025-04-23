import { Container } from "./styles";
// import DownloadApp from '../../assets/download.webp'
import ScrollAnimation from "react-animate-on-scroll";


export function Education() {
  return (
    <>
    <Container id="project">
      <h2>My Education</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="body">
            <h4> D.J Sanghvi College of Engineering, Mumbai</h4>
            <h4> B.Tech in EXTC</h4>
            <h4> Honors In Artificial Intelligence and Machine learning</h4>
              {/* <p>Pursued a Bachelor's degree in Electronics and Telecommunication,with a stellar CGPA of 8.90. Learned Data Structures and Algorithms, Python, Java, Artificial Intelligence, Machine Learning. Contibuted in multiple projects and hackathons, including the final year Degree project.</p> */}
            </div>
            <footer> <ul className="tech-list"> <li>CGPA: 8.90 </li> </ul> </footer>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="body">
              <h4>HSC</h4>
              <h4>Maherbanu College of Science, Akola</h4>
              <h4> Expertise in Computer Science</h4>
            </div>
            <footer> <ul className="tech-list"> <li>Percentage: 80.1% </li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="body">
              <h4>SSC</h4>
              <h4>Mount Carmel Secondary and higher Secondary School, Akola</h4>
              <h4> </h4>
            </div>
            <footer> <ul className="tech-list"> <li>Percentage: 95.20% </li> </ul> </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
    </>
  );
}