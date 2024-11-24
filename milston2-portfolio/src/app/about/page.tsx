import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1 className="about-heading">About Me</h1>
        <p className="about-description">
          I am a dedicated web developer with a passion for building responsive
          and interactive web applications. My focus is on delivering high-quality
          solutions that meet client needs.
        </p>
      </div>
      <div className="about-image">
      <Image
            src="/men.jpg" // Path to your profile image in the 'public' folder
            alt="Profile Image"
            className="profile-image"
            width={300}
            height={300}
          />
      </div>
    </div>
  );
};

export default About;
