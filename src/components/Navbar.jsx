import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/MovingBorder";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50); // Small delay to ensure navigation happens first
  };
  return (
    <nav className="sticky bg-slate-900 flex justify-between text-white p-4 top-0 z-100">
      <div>
        <NavLink
          to="/"
          className="text-xl sm:text-2xl font-bold tracking-tight text-white"
          onClick={handleClick}
        >
          BioEnGene
        </NavLink>
      </div>
      <div className="flex justify-center items-center bg-slate-900 md:px-10 md:rounded-full">
        <div className="container mx-auto flex justify-center items-center">
          {/* Hamburger Icon for Mobile */}
          <div>
            <button
              className="md:hidden text-2xl focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Navigation Links */}
          <div>
            <ul
              className={`${
                isOpen ? "flex" : "hidden"
              } md:flex flex-col items-center md:flex-row md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-700 md:bg-transparent p-4 md:p-0 transition-all`}
            >
              {[
                "Home",
                "About",
                "Team",
                "Research",
                "Achievement",
                "Gallery",
              ].map((item) => (
                <li key={item}>
                  <NavLink
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className={({ isActive }) =>
                      `block py-2 md:py-0 hover:text-green-200 hover:scale-110 transition-all duration-300 ease-in-out ${
                        isActive ? "text-green-200" : ""
                      }`
                    }
                    onClick={
                      (() => {
                        setIsOpen(false);
                      },
                      handleClick)
                    }
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <NavLink
          to="/login"
          onClick={
            (() => {
              setIsOpen(false);
            },
            handleClick)
          }
          className="hover:cursor-pointer"
        >
          <div>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Admin
            </Button>
          </div>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
