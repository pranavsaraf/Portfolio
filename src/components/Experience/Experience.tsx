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
            <h3>Kissht : Software Developer Engineer</h3>
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
            <ul>
              <li>API Development: Led the creation of multiple APIs, each catering to distinct functionalities, optimizing performance and ensuring seamless user experiences.</li>
              <li>Event Tracking Enhancement: Led a pivotal role in a project that involved streamlining data posting and updates to Mixpanel, an external service, using their API. This initiative significantly elevated our analytical capabilities, allowing for in-depth tracking and analysis of user interactions and behaviors, ultimately contributing to data-driven decision-making within the organization.</li>
              <li>Real-time Data Processing: Designed and implemented a fundamental Kafka Consumer, enabling the retrieval of real-time data from various API endpoints, empowering the team with up-to-the-minute insights.</li>
              <li>Frontend Development: Took charge of frontend development for the Admin Panel using React, contributing to the refinement and expansion of diverse features, resulting in a more user-friendly and efficient interface.</li>
              <li>Database Management: Proficiently crafted SQL queries to meet the diverse functional requirements of the team, ensuring seamless data management and retrieval.</li>
            </ul>
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
            <ul>
              <li>RESTful API Development: Led the design and development of RESTful APIs, facilitating seamless communication between the frontend and backend components of the application, resulting in enhanced user experiences.</li>
              <li>Security and Authentication: Implemented robust user data validation and authentication mechanisms, ensuring secure access to the website, safeguarding user data and privacy.</li>
              <li>File Handling Expertise: Demonstrated proficiency in handling file uploads and converting CSV to JSON and vice-versa, all while maintaining data integrity, streamlining data management processes.</li>
              <li>Database Optimization: Acquired valuable insights into database schema design and optimization techniques, significantly enhancing data retrieval efficiency and application performance.</li>
            </ul>
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
      case 'djsce-iete':
        return (
          <>
            <h3>DJSCE IETE-ISF</h3>
            <ul>
              <li>Senior Strike Organizer: Successfully led and managed events, ensuring smooth execution and active participation.</li>
              <li>Editorial: Contributed to the editorial team by creating and reviewing content, enhancing the quality and outreach of publications.</li>
              <li>Leadership: Played a pivotal role in organizing and managing activities, fostering teamwork, and ensuring timely delivery of tasks.</li>
            </ul>
            <footer>
              <ul className="tech-list">
                <li>Leadership</li>
                <li>Event Management</li>
                <li>Content Creation</li>
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
      <h2>My Experiences</h2>
      <div className="experiences">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="body">
              <h3>Kissht - Present</h3>
              <h3>Software Developer Engineer</h3>
              <p>
                Kissht/RING, India's leading fintech launched in 2016 by OnEMi Technology Solutions,
                specializes in data-driven lending with over 11 million customers. At Kissht, I gained
                expertise in Golang development, API creation, serverless API development, and AWS
                Lambda coding. I contributed to cross-pod discussions, team building, and efficient
                project delivery using tools like Jira, Bitbucket, and Postman, while thriving in a
                collaborative work environment.
              </p>
              <button onClick={() => handleCardClick('paywithring-kissht')}>Click here for my Experience</button>
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
              <button onClick={() => handleCardClick('paywithring-intern')}>Click here for my Experience</button>
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
              <button onClick={() => handleCardClick('tag8')}>Click here for my Experience</button>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="body">
              <h3>DJSCE IETE-ISF</h3>
              <h3>Senior Strike Organiser</h3>
              <p>The Institution of Electronics and Telecommunication Engineers (IETE) is India’s leading recognised professional society devoted to the advancement of science and technology of Electronics, Telecommunication and IT. We, the students of Electronics and Telecommunication Engineering (EXTC) at D.J. Sanghvi are a student forum of IETE who are responsible for improving the standard of engineering education within our college.</p>
              <button onClick={() => handleCardClick('djsce-iete')}>Click here for my Experience</button>
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