import React from 'react';
import { FaBookReader, FaDownload, FaRegBookmark } from "react-icons/fa";
import { ImMakeGroup } from "react-icons/im";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = "Koushik_Resume.pdf";
    link.download = 'Koushik_Kadari_Resume.pdf';
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
            date="2022 — Present"
            description="B.Tech in Information Technology 9.58 CGPA"
          />
          <TimelineItem
            title="Sri Chaitanya Junior College, Hyderabad"
            date="2020 — 2022"
            description="Maths Physics Chemistry (MPC) 98.4 %"
          />
          <TimelineItem
            title="Lotus High School, Jadcherla"
            date="2019 — 2020"
            description="Secondary School Certificate (SSC) 10 GPA"
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
        <ol className="timeline-list">
          <TimelineItem
            title="Cuda Programmer"
            date="2024 — Present"
            description={[
              "• Optimized sequential code to parallel code using CUDA, achieving a 25% speedup in performance and efficiency.",
              "• Implemented and tested CUDA kernels, achieving significant speedup in computational tasks.",
              "• Conducted performance analysis and debugging of CUDA applications to ensure optimal functionality.",
            ].map((line, index) => <p key={index}>{line}</p>)}
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
          <span style={{color: 'white', display: 'flex',}}> <h4 style={{marginRight : '15px'}}>Languages </h4> <p className='timeline-text' style={{marginRight : '15px'}}>:</p> C, C++, Python, Java, Javascript</span>
          <span style={{color: 'white', display: 'flex',}}> <h4 style={{marginRight : '15px'}}>Frontend </h4> <p className='timeline-text' style={{marginRight : '15px'}}>:</p> React.js, Tailwind, Bootstrap, HTML, CSS</span>
          <span style={{color: 'white', display: 'flex',}}> <h4 style={{marginRight : '15px'}}>Backend </h4> <p className='timeline-text' style={{marginRight : '15px'}}>:</p> Node.js, Express.js, Flask</span>
          <span style={{color: 'white', display: 'flex',}}> <h4 style={{marginRight : '15px'}}>Databases </h4> <p className='timeline-text' style={{marginRight : '15px'}}>:</p> MongoDB, MySQL</span>
          <span style={{color: 'white', display: 'flex',}}> <h4 style={{marginRight : '15px'}}>Tools & Platforms </h4> <p className='timeline-text' style={{marginRight : '15px'}}>:</p> Git, GitHub, Unix/Linux, Postman, VS Code, Windows</span>
        </div>
      </div>
    </section>
  );
};

export default Resume;
