import { Container } from "./styles";
// import DownloadApp from '../../assets/download.webp'
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <>
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="body">
            <h3> JWT_Authentication</h3>
              <p> Developed a robust JWT Authentication system using Golang, implementing secure user authentication and authorization workflows. The project includes features such as token generation, validation, and role-based access control, ensuring data integrity and security. Designed for scalability and ease of integration, the solution follows industry-standard practices for secure API authentication. </p>
            </div>
            <footer> <ul className="tech-list"> <li>Golang</li> </ul> </footer>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="body">
              <h3 >Where You</h3>
              <p>
              Developed a full-stack web application using ReactJs, NodeJs, ExpressJs, and MongoDB, featuring secure user authentication and validation for login and signup. Enabled users to upload and share their current location, with integration of the Google Maps API to display these locations interactively. Incorporated third-party and RESTful APIs for efficient photo storage and retrieval, and enhanced user experience with seamless CRUD operations.              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Node</li>
                <li>Express</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>


        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="body">
              <h3 >Docker Project</h3>
              <p>
              Developed a project leveraging Docker to containerize applications for seamless deployment and scalability. Implemented Docker images, containers, and networks to streamline application environments. Ensured portability and consistency across development and production setups by creating custom Dockerfiles and managing multi-container applications with Docker Compose.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Docker</li>
                <li>Golang</li>
                <li>Nodejs</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
    </>
  );
}