import { Link } from "react-router-dom";
import { RiCodeSSlashFill } from "react-icons/ri";
import { SiGooglegemini } from "react-icons/si";
import { HiMenu } from "react-icons/hi";

const WebNav = ({ onhandleAI, onToggleTheme, theme }) => {
  return (
    <>
      <div
        className={`navbar ${
          theme === "wireframe"
            ? "bg-web-gradient-light"
            : "bg-web-gradient-dark"
        } relative flex items-center`}
      >
        <div className="navbar-start lg:hidden ml-4">
          <Link to="/">
            <RiCodeSSlashFill size={40} />
          </Link>
        </div>
        <div className="navbar-start flex-1  items-center ml-4 hidden lg:flex">
          <label className="label cursor-pointer gap-1">
            <span className="label-text text-lg flex items-center gap-1">
              AI <SiGooglegemini />
            </span>
            <input
              type="checkbox"
              className="toggle toggle-sm "
              onClick={onhandleAI}
            />
          </label>
        </div>
        <div className="navbar-center flex-2 hidden lg:flex">
          <Link to="/">
            <RiCodeSSlashFill size={40} />
          </Link>
        </div>
        <div className="navbar-end lg:hidden mr-0">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <HiMenu size={40} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button onClick={onhandleAI}>AI</button>
              </li>
              <li>
                <Link to="/programming-editor" className="text-lg">
                  <button>Programming</button>
                </Link>
              </li>
              <li>
                <button onClick={onToggleTheme}>LightMode</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-end flex-1 gap-52 mr-5 hidden lg:flex">
          <Link to="/programming-editor" className="text-lg">
            Programming
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
        <div className="absolute bottom-0 left-0 w-full px-4">
          <div className="border-b border-black w-full"></div>
        </div>
      </div>
    </>
  );
};

export default WebNav;