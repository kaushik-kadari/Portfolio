import React from 'react';
import { FaBookReader, FaDownload, FaRegBookmark } from "react-icons/fa";
import { ImMakeGroup } from "react-icons/im";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  const handleDownload = () => {
    const fileId = '1i4xFjFGUF-0gxLvrKGKUmJR023WeZKNN';
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Koushik_Kadari_Resume.pdf';
    link.target = '_self';
    link.click();
  };

  return (
    <section>
      <header className="Resume-header">
        <h2 className="h2 article-title">Resume</h2>
        <button className="article-title Resume-btn" onClick={handleDownload}><FaDownload/></button>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Keshav Memorial Institute of Technology, Hyderabad"
            date="2022 — 2026"
            description="B.Tech in Information Technology - 9.1 CGPA"
          />
          <TimelineItem
            title="Sri Chaitanya Junior College, Hyderabad"
            date="2020 — 2022"
            description="Maths Physics Chemistry (MPC) - 98.4 %"
          />
          <TimelineItem
            title="Lotus High School, Jadcherla"
            date="2019 — 2020"
            description="Secondary School Certificate (SSC) - 10 GPA"
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list has-logos">
          <TimelineItem
            title="ABC Fitness - Software Engineer"
            date="Sep 2026 – Present"
            description="Full-time · Hybrid · Hyderabad, Telangana, India"
            logo="/images/companies/abc-fitness.png"
            logoAlt="ABC Fitness"
          />
          <TimelineItem
            title="ABC Fitness - Software Engineer Apprentice - AI"
            date="Jun 2026 – Sep 2026"
            description="Apprenticeship · Hybrid · Hyderabad, Telangana, India"
            logo="/images/companies/abc-fitness.png"
            logoAlt="ABC Fitness"
          />
          <TimelineItem
            title="Eventbrite - SDE Intern"
            date="Jul 2025 – Present"
            description={[
              "• Led the end-to-end migration of the Organizer App's architecture from TCA 0.52 → 1.17, adopting Swift Concurrency (async/await) and retiring legacy Combine workflows.",
              "• Built new features for the Stripe Reader M2 including interactive tutorials, device-pairing flows, and hardware menus.",
              "• Enhanced performance and scalability by fixing pagination loops, adding pull-to-refresh, and optimizing data handling to support 10K+ attendees."
            ].map((line, index) => <p key={index}>{line}</p>)}
            logo="/images/companies/eventbrite.png"
            logoAlt="Eventbrite"
          />
          <TimelineItem
            title="High-Performance Computing Intern"
            date="Jun 2024 – May 2025"
            description={[
              "• Cut GPU runtime for missile-flow (CFD simulations) by 25.93%—from 30 days to 22 by converting sequential solvers into parallel CUDA kernels with optimized memory access patterns.",
              "• Engineered and tuned CUDA kernels to boost SM/core utilization, improving warp efficiency and eliminating bottlenecks in computation-heavy loops.",
              "• Collaborated with DRDL scientists while conducting Nsight-driven profiling and debugging to refine CUDA kernels and align them with simulation and modeling requirements.",
            ].map((line, index) => <p key={index}>{line}</p>)}
            logo="/images/companies/drdl.png"
            logoAlt="DRDO"
          />
        </ol>
      </div>

      <div className="skill">
        <div className='title-wrapper'>
          <div className='icon-box'>
            <ImMakeGroup/>
          </div>
          <h3 className="h3 ">Technical Skills</h3>
        </div>
        <div className='timeline-text' style={{display: 'flex', flexDirection: 'column', gap: '10px', marginLeft: '60px'}}>
          <span style={{color: 'white', display: 'flex', alignItems: 'flex-start'}}>
            <h4 style={{width: '100px', flexShrink: 0}}>Languages</h4>
            <p className='timeline-text' style={{marginRight: '15px'}}>:</p>
            <p>C, C++, Python, Java, Javascript</p>
          </span>
          <span style={{color: 'white', display: 'flex', alignItems: 'flex-start'}}>
            <h4 style={{width: '100px', flexShrink: 0}}>Frontend</h4>
            <p className='timeline-text' style={{marginRight: '15px'}}>:</p>
            <p>React.js, Tailwind, Bootstrap, HTML, CSS</p>
          </span>
          <span style={{color: 'white', display: 'flex', alignItems: 'flex-start'}}>
            <h4 style={{width: '100px', flexShrink: 0}}>Backend</h4>
            <p className='timeline-text' style={{marginRight: '15px'}}>:</p>
            <p>Node.js, Express.js, Flask</p>
          </span>
          <span style={{color: 'white', display: 'flex', alignItems: 'flex-start'}}>
            <h4 style={{width: '100px', flexShrink: 0}}>Databases</h4>
            <p className='timeline-text' style={{marginRight: '15px'}}>:</p>
            <p>MongoDB, MySQL</p>
          </span>
          <span style={{color: 'white', display: 'flex', alignItems: 'flex-start'}}>
            <h4 style={{width: '100px', flexShrink: 0}}>Tools & Platforms</h4>
            <p className='timeline-text' style={{marginRight: '15px'}}>:</p>
            <p>Git, GitHub, Unix/Linux, Postman, VS Code, Windows</p>
          </span>
          <span style={{color: 'white', display: 'flex', alignItems: 'flex-start'}}>
            <h4 style={{width: '100px', flexShrink: 0}}>Relevant Coursework</h4>
            <p className='timeline-text' style={{marginRight: '15px'}}>:</p>
            <p>Software Engineering, Computer Networks, Operating Systems, Parallel Programming, DBMS</p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Resume;
