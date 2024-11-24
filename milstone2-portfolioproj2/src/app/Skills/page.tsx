import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  return (
    <div className="skills-container text-center mt-16 px-4 max-w-3xl mx-auto mb-14">
      {/* Heading */}
      <h1 className="relative text-4xl font-bold mb-8 text-[#00ADB5] uppercase group font-poppins">
        My Skills
        <span className="absolute left-0 bottom-[-5px] h-[3px] w-0 bg-[#00ADB5] group-hover:w-full transition-all duration-500 ease-in-out"></span>
      </h1>
      
      {/* Short Description */}
      <p className="text-[#555] font-poppins text-base mb-12 ">
        I specialize in building visually appealing and interactive web applications using modern technologies.
      </p>

      {/* Skills Icons */}
      <div className="flex justify-center gap-12 flex-wrap mt-20">
        <div className="text-center">
          <FontAwesomeIcon
            icon={faHtml5}
            className="text-4xl text-[#E34C26] hover:scale-110 transition-transform duration-300 ease-in-out"
            title="HTML5"
          />
          <p className="mt-2 text-sm text-[#555] font-poppins">Structuring Web Pages</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon
            icon={faCss3}
            className="text-4xl text-[#264DE4] hover:scale-110 transition-transform duration-300 ease-in-out"
            title="CSS3"
          />
          <p className="mt-2 text-sm text-[#555] font-poppins">Styling and Layouts</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon
            icon={faJs}
            className="text-4xl text-[#F0DB4F] hover:scale-110 transition-transform duration-300 ease-in-out"
            title="JavaScript"
          />
          <p className="mt-2 text-sm text-[#555] font-poppins">Interactive Web Features</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon
            icon={faReact}
            className="text-4xl text-[#61DAFB] hover:scale-110 transition-transform duration-300 ease-in-out"
            title="React"
          />
          <p className="mt-2 text-sm text-[#555] font-poppins">Dynamic Web Applications</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
