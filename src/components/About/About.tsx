import { Container } from "./styles";
import PranavSaraf from "../../assets/profile_pic.png";
import htmlIcon from "../../assets/html-icon.svg";
import kafkaIcon from "../../assets/icons8-apache-kafka.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import Golang from "../../assets/Screenshot 2025-01-19 185733.png";
import Gin from "../../assets/Gin.png"
import Java from "../../assets/Java.png"
import Docker from "../../assets/Docker.png";
import Postman from "../../assets/Postman.png";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 500}>
          <p>
          I'm Pranav, a Software Developer passionate about building scalable and efficient solutions. With hands-on experience in both frontend and backend development, I specialize in creating robust applications using technologies like Golang, Gin, Docker, Kafka, Java, React, AWS Lambda etc.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 500} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 500}>
          <p>
          I'm passionate about creating efficient, scalable applications and have experience building APIs, optimizing backend systems, and designing user-friendly interfaces.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 500} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 500}>
          <p>
          At present, I've developed my skills in Golang, working on real-time data processing, serverless API development, My work spans distributed systems, SQL queries, and seamless integration of frontend and backend.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 500}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 500}>
              <img src={Golang} alt="golang" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 500}>
              <img src={Gin} alt="golang" />

            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 500}>
              <img src={Docker} alt="docker" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 500}>
              <img src={kafkaIcon} alt="Kafka" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 500}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 500}>
              <img src={Java} alt="java" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 500}>
              <img src={Postman} alt="postman" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 500}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 500}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 500}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        {/* <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}> */}
          <img src={PranavSaraf} alt="Pranav Saraf" />
        {/* </ScrollAnimation> */}
      </div>
    </Container>
  )
}
