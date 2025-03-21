import { Carousel } from "../components/ui/Carousel.jsx";
import { slideData } from "../assets/asset.js";
function Home() {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-fixed h-screen bg-center pt-16 text-white text-center "
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/2148459304/video/3d-rendering-of-a-dna-double-helix-structure-with-spheres-on-a-white-background-with-copy.jpg?s=640x640&k=20&c=iuza0h65C-c0WyTVm6dn3DWRK3UyRz7pBNp05TEZ4Ak=')",
        }}
      >
        {/* Overlay Div */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="relative h-screen flex flex-col justify-center items-center z-10 container mx-auto px-4">
          <h1 className="text-black text-4xl sm:text-4xl md:text-8xl font-bold mb-10">
            Welcome to <span className="text-green-800">Bio</span>
            <span className="text-sky-950">EnGene</span>
          </h1>
          <p className="text-slate-800 sm:text-lg md:text-xl mb-6 max-w-full font-medium mx-auto">
            BioEnGene (Engaging Genes for Innovation & Entrepreneurship) is a
            team of UG and PG students of our institute from various disciplines
            who came together as a research team to contribute in the field of
            Bio-Engineering.
          </p>
        </div>
      </section>

      {/* Notice Board */}
      <div className="flex flex-col gap-4 bg-cyan-950 pt-2 pb-2">
        <div className="marquee-container">
          <div className="marquee-content">
            <span>BIOTSAV'19: Register Now</span>
            <span>BIOTSAV'19: National Level Students' Fest</span>
            <span>Summer Internship Structure 2019</span>
            <span>Smart India Hackathon 2019</span>
            <span>Inter-IIT Tech meet 2018</span>
            <span>BIOTSAV'19: Register Now</span>
            <span>BIOTSAV'19: National Level Students' Fest</span>
            <span>Summer Internship Structure 2019</span>
            <span>Smart India Hackathon 2019</span>
            <span>Inter-IIT Tech meet 2018</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center gap-[30px] max-w-5xl mx-auto p-4">
        {/* Text Section (Takes Remaining Width) */}
        <div className="flex-1 flex flex-col text-center md:text-left px-4 md:px-8 py-6 ">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
            Welcome to <span className="text-blue-800">BioEnGene</span>
          </h1>
          <p className="mt-4 text-lg text-gray-950 leading-relaxed">
            BioEnGene, a student research group at the
            <span className="font-semibold text-gray-950 ">
              {" "}
              Indian Institute of Technology Kharagpur
            </span>
            , is dedicated to exploring new frontiers in biotechnology, genetic
            engineering, and bioprocess innovation.
          </p>
          <p className="mt-4 text-gray-950 leading-relaxed">
            Our goal is to contribute to meaningful advancements in biosciences
            and biotechnology, with a strong focus on sustainability , practical
            healthcare solutions, and real-world industrial applications.
          </p>
        </div>
        {/* Carousel Section (Fixed Width) */}
        <div className="w-[400px] md:w-[600px] flex items-center justify-center rounded-xl p-6 mx-auto md:mx-0">
          <div className="relative overflow-hidden w-full h-full py-20">
            <Carousel slides={slideData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
