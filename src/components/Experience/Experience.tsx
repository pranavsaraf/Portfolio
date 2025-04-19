import React, { useState } from 'react';
import { Container } from './styles';
import ScrollAnimation from 'react-animate-on-scroll';
import Modal from './Modal'; // Adjust this path as needed

export function Experience() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleCardClick = (cardId: string) => {
    setSelectedCard(cardId);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  const renderModalContent = () => {
    switch (selectedCard) {
      case 'paywithring-kissht':
        return (
          <>
            <h3>PayWithRing / Kissht : Software Developer Engineer</h3>
            <ul>
              <li>Wrote clean, testable, and optimized code across both frontend and backend, ensuring maintainability and performance.</li>
              <li>Worked on developing scalable and efficient REST APIs to support key business features.</li>
              <li>Contributed to 10+ core services, including KYC, OCR, document verification, and analytics modules.</li>
              <li>Helped transition systems from API-based to event-driven architecture for better performance and scalability.</li>
              <li>Built features like dashboard APIs, S3 uploads, and validation logic using Goroutines and modular design.</li>
              <li>Maintained low bug count through strong testing practices and effective debugging with Grafana and Sentry.</li>
              <li>Collaborated closely with senior developers, product teams, and DevOps for smooth deliveries.</li>
              <li>Took ownership of documentation and urgent support tasks, ensuring quick resolutions.</li>
              <li>Proactively learning AWS to grow into a strong full-stack developer.</li>
            </ul>
            <div style={{ marginTop: '2rem' }}>
              <footer>
                <ul className="tech-list">
                  <li>Golang</li>
                  <li>Docker</li>
                  <li>React</li>
                  <li>Gin</li>
                  <li>Lambda</li>
                  <li>PHP</li>
                </ul>
              </footer>
            </div>
          </>
        );
      case 'paywithring-intern':
        return (
          <>
            <h3>PayWithRing : Software Developer Intern</h3>
            <p>
              RING, India's leading fintech launched in 2022 by OnEMi Technology Solutions,
              specializes in data-driven lending with over 11 million customers. At RING, I gained
              expertise in Golang development, API creation, serverless API development, and AWS
              Lambda coding. I contributed to cross-pod discussions, team building, and efficient
              project delivery using tools like Jira, Bitbucket, and Postman, while thriving in a
              collaborative work environment.
            </p>
            <footer>
              <div>
                <ul className="tech-list">
                  <li>Golang</li>
                  <li>React</li>
                  <li>Kafka</li>
                  <li>Node</li>
                  <li>MongoDB</li>
                </ul>
              </div>
            </footer>
          </>
        );
      case 'tag8':
        return (
          <>
            <h3>Tag8 : Full Stack Dev Intern</h3>
            <p>
              I designed and developed RESTful APIs, implemented secure authentication and data
              validation, handled file uploads and data conversion, and optimized database schemas
              for efficient retrieval. I also ensured data integrity, improved system performance,
              and collaborated with the team to deliver a seamless and secure web application on
              time.
            </p>
            <footer>
              <ul className="tech-list">
                <li>Node</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>React</li>
              </ul>
            </footer>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Container id="experience">
      <h2>My Experience</h2>
      <div className="experiences">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="body">
              <h3>PayWithRing / Kissht</h3>
              <h3>Software Developer Engineer</h3>
              <p>
                RING, India's leading fintech launched in 2022 by OnEMi Technology Solutions,
                specializes in data-driven lending with over 11 million customers. At RING, I gained
                expertise in Golang development, API creation, serverless API development, and AWS
                Lambda coding. I contributed to cross-pod discussions, team building, and efficient
                project delivery using tools like Jira, Bitbucket, and Postman, while thriving in a
                collaborative work environment.
              </p>
              <button onClick={() => handleCardClick('paywithring-kissht')}>Read More</button>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="body">
              <h3>PayWithRing</h3>
              <h3>Software Developer Intern</h3>
              <p>
                RING, India's leading fintech launched in 2022 by OnEMi Technology Solutions,
                specializes in data-driven lending with over 11 million customers. At RING, I gained
                expertise in Golang development, API creation, serverless API development, and AWS
                Lambda coding. I contributed to cross-pod discussions, team building, and efficient
                project delivery using tools like Jira, Bitbucket, and Postman, while thriving in a
                collaborative work environment.
              </p>
              <button onClick={() => handleCardClick('paywithring-intern')}>Read More</button>
            </div>
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
              <button onClick={() => handleCardClick('tag8')}>Read More</button>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      <Modal isOpen={selectedCard !== null} onClose={closeModal}>
        {renderModalContent()}
      </Modal>
    </Container>
  );
}
