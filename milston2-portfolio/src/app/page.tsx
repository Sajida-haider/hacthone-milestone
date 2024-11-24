import Image from "next/image";
import "@/app/favicon.ico/";

export default function Home() {
  return (
    <div className="home-container">
      {/* Text Section */}
      <div className="text-section">
        <h1 className="name-heading">Welcome to My Portfolio</h1>
        <p className="intro-text">I am a web developer passionate about creating interactive websites.</p>
      </div>

      {/* Image Section */}
      <div className="image-section">
        <div className="profile-container">
          <Image
            src="/myimage.jpg" // Path to your profile image in the 'public' folder
            alt="Profile Image"
            className="profile-image"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}


