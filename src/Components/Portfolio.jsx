/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Secure Your Kali Linux with UFW: Uncomplicated Firewal setup 🎉",
    description:
      "Securing your system from unauthorized access is crucial, and UFW (Uncomplicated Firewall) simplifies firewall management, making it ideal for users unfamiliar with complex tools like iptables. While Kali Linux is a powerful tool for security professionals, enabling and configuring UFW enhances its protection against threats.",
    url: "https://medium.com/@kiplagatkelvin034/secure-your-kali-linux-with-ufw-uncomplicated-firewall-setup-5cdaa55eead9",
  },
  {
    title: "Threat Hunting with OSINT and Splunk: A Hands-on Guide",
    description:
      "In this hands-on activity, we’ll use OSINT to gather threat data and analyze security logs with Splunk on Kali Linux. You'll learn to: perform OSINT reconnaissance with Shodan, ingest and analyze logs in Splunk, detect suspicious activity, and propose mitigation strategies.",
    url: "https://medium.com/@kiplagatkelvin034/threat-hunting-with-osint-and-splunk-a-hands-on-guide-13907a7e2765",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://kiplagatkelvin.github.io/My-resume-1/",
  },
  {
    title: "wireshark-traffic-analysis-comparing-telnet-and-ssh",

    description:
      "This project analyzes network traffic using Wireshark to compare the security of Telnet and SSH. It demonstrates how Telnet transmits data in plaintext, making it vulnerable to interception, while SSH encrypts communication for secure remote access.",
    url: "https://github.com/kiplagatkelvin/wireshark-traffic-analysis-comparing-telnet-and-ssh",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
