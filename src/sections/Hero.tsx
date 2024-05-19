import Button from "@/components/Button";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
function Hero() {
  return (
    <div className="hero">
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.6,
        }}
      >
        Hi my name is
      </motion.h1>
      <motion.h2
        className="hero-title-large"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.75,
        }}
      >
        Laveezah Noor.
      </motion.h2>
      <motion.h3
        className="hero-title-large hero-title-sub"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.05,
        }}
      >
        a Software Engineer.
      </motion.h3>
      <motion.p
        className="hero-text"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.35,
        }}
      >
        Experienced AWS Certified Cloud Practitioner, DevOps Engineer, and
        Software Engineer proficient in Python, Java, C#, and SQL. Expertise in
        scripting, Docker, and Git version control. Skilled in frontend
        technologies like React, Next.js, and React Native, as well as backend
        frameworks including Django, Flask, and Node.js. A dedicated professional 
        with a passion for creating innovative solutions and enhancing software 
        development processes and have previously worked at {" "}
        <Link href="https://www.linkedin.com/company/trafix-llc/" target="_blank" className="link">
          TRAFIX LLC
        </Link>
        , and currently working at {" "}
        <Link href="https://www.linkedin.com/company/baritechsolofficial/" target="_blank" className="link">
          BariTechSol.
        </Link> 
      </motion.p>
      <motion.div
        className="hero-button"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.65,
        }}
      >
        {/* <Button
          text="Check out my course"
          link="https://youtube.com/kishansheth21"
        /> */}
      </motion.div>
    </div>
  );
}

export default Hero;
