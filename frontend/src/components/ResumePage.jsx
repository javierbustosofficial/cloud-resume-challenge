import React from "react";

export default function ResumePage() {
  return (
    <article className="article">
      <section className="section">
        <h1 className="name">
          <span className="first">JAVIER</span> <span className="last">BUSTOS</span>
        </h1>

        <div className="contact-bar">
          Austin, TX |{" "}
          <a href="mailto:javierbustosofficial@gmail.com">javierbustosofficial@gmail.com</a> | LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/javierbustosofficial">
            www.linkedin.com/in/javierbustosofficial
          </a>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Professional Summary</h2>
        <p className="summary">
          Technical professional with 6 years of experience providing systems administration and IT support for business
          clients and internal users. Skilled in resolving complex hardware, software, and network issues while prioritizing
          customer satisfaction. Proven ability to deliver reliable IT solutions that improve efficiency and minimize downtime.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Skills</h2>

        <div className="skills">
          <ul className="ul-skills">
            <li><strong>Cloud Services:</strong> S3, CloudFront, API Gateway, Lambda, EC2, IAM, VPC</li>
            <li><strong>Operating Systems:</strong> Windows 7/10/11, Windows Server, MacOS, Linux, Android, iOS</li>
            <li><strong>Networking:</strong> TCP/IP, DNS, DHCP, VLANs, VPNs, LAN/WAN, Routers, Switches, Firewalls</li>
            <li><strong>Tools & Applications:</strong> Terraform, Ansible, Active Directory, Microsoft 365, Google Workspace, Remote Monitoring & Management (RMM), GitHub, VS Code</li>
            <li><strong>Languages:</strong> HCL, Python, YAML, HTML/CSS, JavaScript</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Work History</h2>

        <div className="job">
          <div className="job-head">
            <p className="job-title">Systems Administrator III</p>
            <p className="job-dates">12/2023 - Current</p>
          </div>
          <p className="job-company">Texas Health and Human Services Commission – Austin, TX</p>
          <ul>
            <li>Senior Deskside Support role, handling Tier 2/3 incidents and supporting agency-wide infrastructure initiatives within a 10,000+ user enterprise environment</li>
            <li>Owned on-site technical setup and real-time troubleshooting for executive-level agency conferences and events, ensuring uninterrupted operations and minimal downtime</li>
            <li>Performed system configuration and ongoing maintenance across hardware, software, operating systems, and network settings to maintain reliability and performance</li>
            <li>Supported disaster recovery preparedness and provided advanced end-user technical assistance, including troubleshooting and training</li>
          </ul>
        </div>

        <div className="job">
          <div className="job-head">
            <p className="job-title">Deskside Support Technician (Contract)</p>
            <p className="job-dates">01/2022 - 12/2023</p>
          </div>
          <p className="job-company">Texas Health and Human Services Commission – Austin, TX</p>
          <ul>
            <li>Supported a 10,000+ user enterprise environment, providing Tier 2 support across hardware, software, network, and mobile device issues via phone, email, and chat</li>
            <li>Resolved 200+ problem tickets per month while documenting work in Remedy and meeting established SLA requirements</li>
            <li>Performed end-user device provisioning and lifecycle support (desktops, laptops, and mobile devices), while maintaining accurate inventory of assets</li>
            <li>Delivered high-touch service and technical support to a diverse user base, including executives and VIP stakeholders, escalating complex issues as needed to appropriate specialized teams</li>
          </ul>
        </div>

        <div className="job">
          <div className="job-head">
            <p className="job-title">Help Desk Technician II</p>
            <p className="job-dates">11/2020 - 04/2021</p>
          </div>
          <p className="job-company">Contigo Technology – Austin, TX</p>
          <ul>
            <li>Served as the primary technician for a healthcare client with 13 offices across Central Texas, delivering on-site support, deploying networking equipment, and assisting with IT projects</li>
            <li>Resolved escalated Tier 2 incidents from the Tier 1 team, providing remote support via phone, email, and chat</li>
            <li>Mentored Tier 1 technicians on complex issues, escalations, and client-facing communication</li>
          </ul>
        </div>

        <div className="job">
          <div className="job-head">
            <p className="job-title">Help Desk Technician I</p>
            <p className="job-dates">12/2019 - 11/2020</p>
          </div>
          <p className="job-company">Contigo Technology – Austin, TX</p>
          <ul>
            <li>Provided Tier 1 technical support for hardware, software, and networking issues, assisting clients via phone, email, and remote chat. Traveled on-site to client offices when issues could not be resolved remotely</li>
            <li>Documented incidents and resolutions in the AutoTask PSA system while creating internal documentation to support team knowledge and consistency</li>
          </ul>
        </div>

        <div className="job">
          <div className="job-head">
            <p className="job-title">PC Setup Technician</p>
            <p className="job-dates">05/2019 - 12/2019</p>
          </div>
          <p className="job-company">Contigo Technology – Austin, TX</p>
          <ul>
            <li>Configured and deployed end-user PCs using RMM, antivirus, helpdesk tools, and company-specific applications, supporting account setup in Active Directory, Office 365, and Google Workspace</li>
            <li>Performed on-site hardware troubleshooting and repairs, providing recommendations for equipment upgrades and purchases when needed</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Certifications</h2>
        <p className="plain-lines">
          AWS Certified Solutions Architect - Associate
          <br />
          AWS Certified Developer – Associate
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Education</h2>
        <div className="edu-row">
          <p className="edu-school">
            <strong>Texas State Technical College - Hutto, TX</strong>
          </p>
          <p className="edu-date">12/2019</p>
        </div>
        <p className="edu-left">Associate of Applied Science: Cybersecurity Technology</p>
      </section>

      <section className="section">
        <h2 className="section-title">Languages</h2>

        <div className="langs">
          <div className="lang">
            <p className="lang-label">English</p>
            <div className="bar" aria-label="English proficiency">
              <span className="seg" />
              <span className="seg" />
              <span className="seg" />
              <span className="seg" />
              <span className="seg" />
            </div>
            <p className="lang-level">Native or Bilingual</p>
          </div>

          <div className="lang">
            <p className="lang-label">Spanish</p>
            <div className="bar" aria-label="Spanish proficiency">
              <span className="seg" />
              <span className="seg" />
              <span className="seg" />
              <span className="seg" />
              <span className="seg" />
            </div>
            <p className="lang-level">Native or Bilingual</p>
          </div>
        </div>
      </section>
    </article>
  );
}