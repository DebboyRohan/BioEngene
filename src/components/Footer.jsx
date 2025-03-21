import { NavLink } from "react-router-dom";
function Footer() {
  const handleClick = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50); // Small delay to ensure navigation happens first
  };
  return (
    <footer className="bg-cyan-950 text-white py-8">
      <div className="container mx-auto px-10">
        {/* Top Section: Contact, Logo, and Social (Flex Layout) */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-center gap-8">
          {/* Contact Section (Left) */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-gray-400">
              BioEnGene, Department of Biotechnology <br />
              Indian Institute of Technology <br />
              Kharagpur, India - 721302
            </p>
            <p className="text-gray-300 mt-2">
              Email:{" "}
              <a
                href="mailto:bioengene.iitkgp@gmail.com"
                className="text-green-400 hover:underline"
              >
                bioengene@iitkgp.ac.in
              </a>
            </p>
          </div>

          {/* Logo (Center) */}
          <div className="flex-1 text-center">
            <NavLink
              to="/"
              className="text-3xl sm:text-2xl font-bold"
              onClick={handleClick}
            >
              BioEnGene
            </NavLink>
          </div>

          {/* Social Connect (Right) */}
          <div className="flex-1 text-center md:text-right">
            <h3 className="text-lg font-semibold mb-2">Social Connect</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://www.facebook.com/bioengene.iitkgp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/color/48/000000/facebook.png"
                  className="w-8 h-8 hover:scale-110 transition-transform"
                  alt="Facebook"
                />
              </a>
              <a
                href="https://www.instagram.com/bioengene.iitkgp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/color/48/000000/instagram-new--v1.png"
                  className="w-8 h-8 hover:scale-110 transition-transform"
                  alt="Instagram"
                />
              </a>
              <a
                href="https://twitter.com/BioEnGene"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/color/48/000000/twitter--v1.png"
                  className="w-8 h-8 hover:scale-110 transition-transform"
                  alt="Twitter"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section: Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>© 2025 BioEnGene, IIT Kharagpur</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
