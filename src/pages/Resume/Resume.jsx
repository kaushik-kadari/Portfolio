import React from 'react';
import { FaBookReader, FaDownload, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = "src\\pages\\Resume\\Koushik_Resume.pdf";
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
            description="Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur."
          />
          {/* <TimelineItem
            title="Art director"
            date="2013 — 2015"
            description="Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
          />
          <TimelineItem
            title="Web designer"
            date="2010 — 2013"
            description="Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
          /> */}
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">Technical Skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="Python" value={100} />
          <SkillItem title="C++" value={100} />
          <SkillItem title="JavaScript" value={90} />
          <SkillItem title="Java" value={80} />
          <SkillItem title="React" value={80} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
