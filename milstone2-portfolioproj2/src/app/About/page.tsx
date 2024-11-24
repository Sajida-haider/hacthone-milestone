import Image from "next/image";

const About = () => {
  return (
    <div className="flex justify-center  items-center py-12 mb-24 mt-16 ml-16">
      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
        {/* About Text */}
        <div className="text-center md:text-left ml-14 px-8 mt-10">
        <h1 className="text-4xl font-bold text-[#00adb5] uppercase mb-4 relative group font-poppins">
  About Me
  <span className="absolute w-0 h-1 bg-[#00adb5] left-0 bottom-[-4px] transition-all duration-500 ease-in-out group-hover:w-full"></span>
</h1>
          <p className="mt-4 text-lg text-gray-700">
            I am a dedicated web developer with a passion for building
            responsive and interactive web applications. My focus is on
            delivering high-quality solutions that meet client needs.
          </p>
        </div>

        {/* About Image */}
        <div className="flex justify-center md:justify-start ">
          <Image
            src="/My-men.jpg" // Path to your profile image in the 'public' folder
            alt="Profile Image"
            className="object-cover" // Ensures the image covers the given area while maintaining its aspect ratio
            width={600} // Customize the width for a rectangular shape
            height={600} // Customize the height for a rectangular shape
          />
        </div>
      </div>
    </div>
  );
};

export default About;
