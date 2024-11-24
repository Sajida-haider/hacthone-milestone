

export default function Home() {
  return (
    <div className="flex justify-between items-center max-w-screen-xl mx-auto my-24 px-12">
      {/* Text Section */}
      <div className="flex-1 mr-8">
        <h1 className="text-5xl font-bold text-[#00adb5] mb-4 animate-slide-in ">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-gray-600 animate-slide-in  font-poppins  mb-12">
         
        
  I am a web developer passionate about creating responsive,<br />
  interactive, and visually appealing websites.
</p>
      </div>

      {/* Image Section */}
<div className="flex justify-center items-center mt-8 group mr-10">
<div className="relative w-64 h-64 bg-teal-500 rounded-full overflow-hidden animate-glow">
      <img 
        src="/my-image.jpg" 
        alt="Glowing Circle" 
        className="w-full h-full object-cover rounded-full"
      />
    </div>
    </div>

</div>
  )}
  


