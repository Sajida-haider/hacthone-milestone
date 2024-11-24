import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
 

const Skills = () => {
  return (



<div className="skills-container">
<h1 className="skills-heading">
  <span>My Skills</span>
</h1>
<p className="text-[#555] font-poppins text-base mb-12 ">
        I specialize in building visually appealing and interactive web applications using modern technologies.
      </p>
<div className="skills-icons">
  <div className="skill">
    <FontAwesomeIcon icon={faHtml5} className="icon html" title="HTML5" />
    <p className="skill-description">Structuring Web Pages</p>
  </div>
  <div className="skill">
    <FontAwesomeIcon icon={faCss3} className="icon css" title="CSS3" />
    <p className="skill-description">Styling and Layouts</p>
  </div>
  <div className="skill">
    <FontAwesomeIcon icon={faJs} className="icon js" title="JavaScript" />
    <p className="skill-description">Interactive Web Features</p>
  </div>
  <div className="skill">
    <FontAwesomeIcon icon={faReact} className="icon react" title="React" />
    <p className="skill-description">Dynamic Web Applications</p>
  </div>
</div>
</div>

  )
}
export default Skills;