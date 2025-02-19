/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

import React from "react";
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

const description =
  "To secure the digital world by identifying and mitigating cyber threats, educating future cybersecurity professionals, and empowering organizations with robust security strategies. My goal is to drive cybersecurity awareness, innovation, and resilience.";

const skillsList = [
  "VAPT: Kali Linux, Metasploit, Burp Suite, Nmap",
  "Incident Response: Root cause analysis, threat containment, Splunk, EnCase",
  "Threat Intelligence & OSINT: Maltego, Shodan, OSINT frameworks",
  "Security Audits: Nessus, Qualys, CIS Benchmarks",
  "Cybersecurity Training: Delivered programs (banking sector), KnowBe4",
  "Cloud Security: AWS, Google Cloud, Terraform, ISO 27001, GDPR",
  "Programming & Scripting: Python, Bash, PowerShell",
  "Leadership & Project Management: Jira, Confluence, Asana",
  "SIEM: Splunk, IBM QRadar, LogRhythm",
  "Encryption: OpenSSL, GPG, PGP",
  "Forensics: FTK Imager, X1 Search, Autopsy",
  "Red Teaming: Cobalt Strike, BloodHound, Empire",
  "Threat Hunting: ELK Stack, AIL (Analytical Intelligence Layer)",
  "Network Security: Firewalls (pfSense, Cisco), Wireshark, Snort",
];

const detailOrQuote =
  "Cybersecurity & Forensics Specialist focused on ethical hacking, threat intelligence, and digital forensics. I contribute to GitHub, share insights on Medium, and mentor future security experts to stay ahead of evolving threats.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            fontSize: "1.25rem",
            margin: "2rem auto",
            padding: "0",
            listStyleType: "none",
            gap: "1rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;

 
