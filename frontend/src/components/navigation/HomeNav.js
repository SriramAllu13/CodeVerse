import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import logo from "../../assets/logo.png";
import bgdark from "../../assets/dark/background/bgdark.jpg";
import bgwhite from "../../assets/white/background/bgwhite.jpg";

const HomeNav = ({ onToggleTheme, theme, scrollToTop }) => {
  return (
    <>
      <div
        className={`relative h-screen flex  justify-center ${
          theme === "wireframe" ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              theme === "wireframe" ? `url(${bgwhite})` : `url(${bgdark})`,
            opacity: theme === "wireframe" ? "0.1" : "0.2",
          }}
        ></div>
        <div className="navbar z-50 fixed top-0 right-0 left-0 w-full shadow-md transition-all duration-500 backdrop-blur ">
          <div className="navbar-start ml-4 md:ml-16">
            <Link to="/">
              <span className="text-2xl font-title font-bold flex gap-1 items-center">
                Code
                <img src={logo} className="w-9 h-9" alt="" /> Verse
              </span>
            </Link>
          </div>
          <div className="navbar-end md:hidden mr-0">
            <div className="dropdown dropdown-end z-50">
              <div tabIndex={0} role="button" className="btn btn-ghost">
                <HiMenu size={40} />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link className="text-lg">
                    <button>Home</button>
                  </Link>
                </li>
                <li>
                  <Link to="/web-editor" className="text-lg">
                    <button>Start Coding</button>
                  </Link>
                </li>
                <li>
                  <button onClick={onToggleTheme}>
                    {theme === "wireframe" ? "DarkMode" : "LightMode"}
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-end flex-0 text-lg hidden md:flex  gap-16 mr-16">
            <Link
              to="/"
              onClick={scrollToTop}
              className={`${
                theme === "wireframe"
                  ? "hover:text-zinc-800 transition duration-300"
                  : "hover:text-gray-300 transition duration-300"
              }`}
            >
              Home
            </Link>
            <Link
              to="/web-editor"
              className={`${
                theme === "wireframe"
                  ? "hover:text-zinc-800 transition duration-300"
                  : "hover:text-gray-300 transition duration-300"
              }`}
            >
              Start Coding
            </Link>
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                className="theme-controller"
                onClick={onToggleTheme}
              />

              <svg
                className="swap-off fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>

              <svg
                className="swap-on fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
            </label>
          </div>
        </div>
        <div className="hero min-h-screen relative z-30">
          <div className="hero-content text-center z-40">
            <div className="max-w-md mx-auto ">
              <h1 className="text-4xl font-bold mb-4 ">CodeVerse</h1>
              <p className="mb-6 text-lg">
                A universe of coding seamlessly integrated with AI, featuring
                two distinct editors.
              </p>
              <div className="flex gap-4 md:gap-5 justify-center">
                <Link to="/web-editor">
                  <button class="cursor-pointer font-bold shadow-md hover:scale-[1.2] shadow-purple-400 rounded-full px-5 py-2 bg-gradient-to-bl from-purple-500 to-purple-800">
                    WebDev
                  </button>
                </Link>
                <Link to="/programming-editor">
                  <button class="cursor-pointer font-bold shadow-md hover:scale-[1.2] shadow-purple-400 rounded-full px-5 py-2 bg-gradient-to-bl from-purple-500 to-purple-800">
                    Programming
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeNav;
