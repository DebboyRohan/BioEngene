import { BackgroundBoxes } from "../components/BackgroundBoxes";

function About() {
  return (
    <div>
      <BackgroundBoxes />
      <div className="text-white py-12 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Who We Are - Spanning 2 Columns */}
          <div className="bg-gradient-to-r from-gray-800 to bg-green-800 p-6 md:p-8 rounded-xl shadow-lg md:col-span-2">
            <h2 className="text-2xl font-bold text-blue-300 mb-4">
              Who We Are
            </h2>
            <p className="text-lg leading-relaxed">
              At BioEnGene, we bring together a multidisciplinary team of
              undergraduate project scholars, student researchers, and top
              faculties, committed to addressing global challenges in energy,
              healthcare, and the environment. Our work spans diverse fields
              like bioprocess engineering, environmental biotechnology, genetic
              research, and bio-inspired materials. At BioEnGene, we’re
              passionate about exploring new ideas, sharing knowledge, and
              making a meaningful impact through our research. Whether you’re a
              researcher, student, or industry collaborator, we welcome you to
              explore our cutting-edge work and be part of a community working
              towards shaping the future of biotechnology and genetic
              engineering.
            </p>
          </div>

          {/* Remaining Sections - Arranged in Two Columns */}
          <div className="bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">
              Our Vision
            </h2>
            <p className="text-lg leading-relaxed">
              With rapid growth, development, and availability of ample
              opportunities in Bio-Engineering, government and private sectors
              have started exploring this uncharted territory. We believe in a
              future where bio-based solutions will solve fundamental challenges
              globally and locally. BioEnGene aims to be a platform facilitating
              collaboration among young minds, industry experts, and academia.
            </p>
          </div>

          <div className="bg-gradient-to-b from-gray-800 to bg-green-800 p-6 md:p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-blue-300 mb-4">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed">
              Rapid prototyping in healthcare, Med-tech, and diagnostics. We
              focus on solving immediate societal challenges and exploring
              Bio-Engineering applications in various domains.
            </p>
          </div>

          <div className="bg-gradient-to-b from-gray-800 to bg-green-800 p-6 md:p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-blue-300 mb-4">
              Our Strength
            </h2>
            <p className="text-lg leading-relaxed">
              Our team comprises proactive members with deep expertise,
              energetic to serve the nation. Strong leadership, expert advisors,
              and a collaborative work culture set us apart.
            </p>
          </div>

          <div className="bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">
              Our Working Style
            </h2>
            <p className="text-lg leading-relaxed">
              We employ rigorous cross-questioning, structured research
              methodologies, and theoretical validation before execution. Our
              approach minimizes failure and ensures optimal utilization of
              national resources.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
