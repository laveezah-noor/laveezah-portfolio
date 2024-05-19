import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Bonjour! My name is Laveezah Noor, A fresh software engineer grad
             at the University of Karachi, and I am working on getting 𝗔𝗪𝗦
            𝗖𝗲𝗿𝘁𝗶𝗳𝗶𝗲𝗱 𝗦𝗼𝗹𝘂𝘁𝗶𝗼𝗻 𝗔𝗿𝗰𝗵𝗶𝘁𝗲𝗰𝘁, after getting AWS Cloud Practitioner
            Certification this year. After joining the Institute of Emerging
            Careers for the past Summer, I’ve shifted my educational spotlight
            to Cloud Computing and DevOps.
          </p>
          <p className="about-grid-info-text">
            Throughout my education, I’ve taken on several leadership roles, and
            feel comfortable in that sphere. I excel when working in cooperative
            groups to solve software problems, and I’ve also learned how to
            apply critical thinking and problem-solving strategies at{" "}
            <Link
              href="https://www.linkedin.com/company/trafix-llc/"
              className="link"
              target="_blank"
            >
              TRAFiX LLC
            </Link>
          </p>

          <p className="about-grid-info-text">
            I get excited about opportunities where I can practice my Solution
            Architect skills in the industry and make some contribution on my
            behalf.
          </p>
          <p className="about-grid-info-text">
          I love connecting with new people, you can reach me at laveezahnoor@gmail.com or here on LinkedIn.
            {/* <Link
              className="link"
              target="_blank"
              href="https://frontendvita.com"
            >
              FrontendVita,
            </Link> */}
            {/* &nbsp;aimed at enhancing frontend development skills. */}
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies and skills that I’ve learned and still working with recently throughout my exciting journey:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">React Native</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">DevOps</li>
            <li className="about-grid-info-list-item">Redux Toolkit</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">Python</li>
            <li className="about-grid-info-list-item">Java</li>
            <li className="about-grid-info-list-item">CSS</li>
            <li className="about-grid-info-list-item">Html</li>
            <li className="about-grid-info-list-item">C#</li>
            <li className="about-grid-info-list-item">SQL</li>
            <li className="about-grid-info-list-item">Tailwind Css</li>
            <li className="about-grid-info-list-item">Bootstrap</li>
            <li className="about-grid-info-list-item">MangoDb</li>
            <li className="about-grid-info-list-item">Express Js</li>
            <li className="about-grid-info-list-item">Firebase</li>
            <li className="about-grid-info-list-item">Git</li>
            <li className="about-grid-info-list-item">Chart.js</li>
            <li className="about-grid-info-list-item">Bash</li>
            <li className="about-grid-info-list-item">AWS</li>
            <li className="about-grid-info-list-item">Django</li>
            <li className="about-grid-info-list-item">Docker</li>
            <li className="about-grid-info-list-item">.NET</li>
            <li className="about-grid-info-list-item">Electron.js</li>
            <li className="about-grid-info-list-item">Flask</li>
            <li className="about-grid-info-list-item">Heroku</li>
            <li className="about-grid-info-list-item">Kubernetes</li>
            <li className="about-grid-info-list-item">Linux</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/laveezah-img-portfolio.png" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
