import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-wrap justify-between items-center max-w-4xl mx-auto px-0 py-12 ">
      {/* Text Section */}
      <div className="flex-1 min-w-[300px]">
        <div className="group">
        <h1 className="text-3xl md:text-4xl font-bold text-[#00adb5] uppercase mb-4 relative group mr-6 font-poppins">
  Contact Me
  <span className="absolute w-0 h-1 bg-[#00adb5] left-0 bottom-[-4px] transition-all duration-500 ease-in-out group-hover:w-full"></span>
</h1>
        </div>
        <p className="text-gray-600 text-lg leading-relaxed">
          If you have any questions or would like to work together, feel free
          to reach out!
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="flex-1 min-w-[300px]">
        <form className="flex flex-col gap-6">
          {/* Name Input */}
          <div className="flex flex-col">
            <label htmlFor="name" className="font-semibold text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              required
              className="p-3 border-2 border-gray-300 rounded-lg focus:border-[#00adb5] focus:outline-none"
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col">
            <label htmlFor="email" className="font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              required
              className="p-3 border-2 border-gray-300 rounded-lg focus:border-[#00adb5] focus:outline-none"
            />
          </div>

          {/* Message Input */}
          <div className="flex flex-col">
            <label htmlFor="message" className="font-semibold text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows={4}
              required
              className="p-3 border-2 border-gray-300 rounded-lg focus:border-[#00adb5] focus:outline-none resize-none h-32"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#00adb5] text-white font-semibold py-3 rounded-lg hover:bg-[#007f8a] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
