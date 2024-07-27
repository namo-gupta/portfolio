import React from "react";
import { BsBag } from "react-icons/bs";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import { Row, Col } from "react-bootstrap";
// import { BsBag } from "react-icons/bs";

function Experience() {
    // const experience = [
    //     {
    //       company: 'ZopSmart, Bangalore India',
    //       position: 'Software Developer',
    //       startDate: 'Jul 2022',
    //       endDate: 'Apr 2024',
    //       description: [
    //         "Designed and developed multiple web pages with diverse functionalities and user role considerations.",
    //         "Ensured each page within the platform met specific user requirements and functional needs.",
    //         "Implemented responsive design principles across all web pages to guarantee seamless adaptation to various screen sizes and devices.",
    //         "Prioritized user experience by ensuring consistent functionality and aesthetics across desktop, tablet, and mobile devices.",
    //         "Vigilantly identified and resolved bugs to maintain the smooth operation of the platform.",
    //         "Conducted thorough testing and debugging procedures to ensure the highest level of functionality and user satisfaction.",
    //         "Contributed to the development of a reusable component package aimed at enhancing development efficiency.",
    //         "Enabled seamless integration of components across multiple projects, amplifying code reusability and streamlining development processes."
    //       ],
    //     },
    //     {
    //       company: 'ZopSmart, Bangalore India',
    //       position: 'SDE Intern',
    //       startDate: 'Jan 2022',
    //       endDate: 'Jul 2022',
    //       description: [
    //         "Learned to identify and resolve coding issues by employing debugging techniques. Gained confidence in troubleshooting errors and ensuring smooth functionality.",
    //         "Worked closely with designers, backend developers, and other team members. Gained insights into the collaborative nature of web development projects and the importance of effective communication.",
    //         "Applied theoretical knowledge to hands-on projects, contributing to the development of user-facing features and enhancing user experiences on live websites.",
    //       ],
    //     }
    // ]
    return (
      <div style={{
        paddingTop: '30px',
        paddingBlockStart: '80px'
      }}>
      <VerticalTimeline>
      <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{
       background: '#2d1950',
       color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #2d1950' }}
    date="07/2022-04/2024"
    iconStyle={{ 
      background: '#2d1950',
       color: '#fff' }}
    icon={<BsBag />}
  >
    <h3 className="vertical-timeline-element-title">Software Developer</h3>
    <h5 className="vertical-timeline-element-subtitle">(Frontend Developer)</h5>
    <h6 className="vertical-timeline-element-subtitle">ZopSmart, Bangalore India</h6>
    {/* <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p> */}
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{
       background: '#2d1950',
       color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #2d1950' }}
    date="01/2022-07/2022"
    iconStyle={{ 
      background: '#2d1950',
       color: '#fff' }}
    icon={<BsBag />}
  >
    <h3 className="vertical-timeline-element-title">Software Developer Intern</h3>
    <h6 className="vertical-timeline-element-subtitle">ZopSmart, Bangalore India</h6>
    {/* <p>
    Learned to identify and resolve coding issues by employing debugging techniques. Gained confidence in troubleshooting errors and ensuring smooth functionality.
    </p> */}
  </VerticalTimelineElement>
      </VerticalTimeline>
      </div>
    )
}

export default Experience;