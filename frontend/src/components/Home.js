import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import HomeNav from "./navigation/HomeNav";
import { FaLinkedin } from "react-icons/fa";
import { SiGooglegemini } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ContactForm from "./ContactForm";
import logo from "../assets/logo.png";
import left from "../assets/dark/background/left.png";
import right from "../assets/dark/background/right.png";
import center from "../assets/dark/background/center.png";
import webdev from "../assets/dark/editor/webdev.png";
import pro from "../assets/dark/editor/Programming.png";
import webdev2 from "../assets/white/editor/webdev2.png";
import pro2 from "../assets/white/editor/programming2.png";
import c1 from "../assets/dark/editor/wd1.png";
import c2 from "../assets/dark/editor/wd2.png";
import c3 from "../assets/dark/editor/wd3.png";
import c4 from "../assets/dark/editor/aid1.png";
import c5 from "../assets/dark/editor/aid2.png";
import c6 from "../assets/dark/editor/aid3.png";
import c7 from "../assets/dark/editor/pd1.png";
import c8 from "../assets/dark/editor/pd2.png";
import c9 from "../assets/dark/editor/pd3.png";
import c10 from "../assets/dark/editor/pd4.png";
import c11 from "../assets/dark/editor/pd5.png";
import cw1 from "../assets/white/editor/ww1.png";
import cw2 from "../assets/white/editor/ww2.png";
import cw3 from "../assets/white/editor/ww3.png";
import cw4 from "../assets/white/editor/aiw1.png";
import cw5 from "../assets/white/editor/aiw2.png";
import cw6 from "../assets/white/editor/aiw3.png";
import cw7 from "../assets/white/editor/pw1.png";
import cw8 from "../assets/white/editor/pw2.png";
import cw9 from "../assets/white/editor/pw3.png";
import cw10 from "../assets/white/editor/pw4.png";
import cw11 from "../assets/white/editor/pw5.png";

const Home = () => {
  const [theme, setTheme] = useState("dark");
  const slideImagesDark = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11];
  const slideImagesWireframe = [
    cw1,
    cw2,
    cw3,
    cw4,
    cw5,
    cw6,
    cw7,
    cw8,
    cw9,
    cw10,
    cw11,
  ];

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "wireframe" : "dark"));
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const swiperRef = useRef(null);
  const slidePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const slideNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <>
      <div
        data-theme={theme}
        className={`flex flex-col h-screen ${
          theme === "wireframe" ? "text-black bg-white" : "text-white bg-black"
        }`}
      >
        <HomeNav
          onToggleTheme={toggleTheme}
          theme={theme}
          scrollToTop={scrollToTop}
        />
        <div className={`${theme === "wireframe" ? "" : "bg-black"}`}>
          <div
            className={`relative h-screen flex items-center justify-center my-20  ${
              theme === "wireframe" ? "bg-white" : " bg-black"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: theme === "wireframe" ? "" : `url(${left})`,
                opacity: 0.5,
              }}
            ></div>
            <div className="hero min-h-screen">
              <div className="hero-content  flex-col lg:flex-row-reverse">
                {theme === "wireframe" ? (
                  <img
                    src={webdev2}
                    className="w-11/12 md:w-2/3 rounded-lg shadow-2xl"
                    alt=""
                  />
                ) : (
                  <img
                    src={webdev}
                    className="w-11/12 md:w-2/3 rounded-lg shadow-2xl "
                    alt=""
                  />
                )}
                <div className="text-center">
                  <h1 className="text-3xl md:text-4xl font-bold">WebDev</h1>
                  <p className="py-6 text-base md:text-lg">
                    An Editor Comprises of HTML CSS JavaScript Integration with
                    AI.
                  </p>
                  <Link to="/web-editor">
                    <button className="bg-neutral-950 text-white border border-neutral-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                      <span className="bg-neutral-400 shadow-neutral-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                      Try Now !
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`relative h-screen flex items-center justify-center  ${
            theme === "wireframe" ? "bg-white" : " bg-black"
          }`}
        >
          <div className="hero h-full my-10 ">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className=" text-3xl lg:text-4xl text-center flex justify-center gap-3 font-bold ">
                  Gemini AI
                  <span>
                    <SiGooglegemini />
                  </span>
                </h1>
                <p className="py-6 text-base lg:text-lg px-6">
                  Integrated with Gemini AI, our editors offer unparalleled
                  efficiency and effectiveness, setting a new standard for
                  coding environments
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`relative h-screen flex items-center justify-center ${
            theme === "wireframe" ? "bg-white" : " bg-black"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: theme === "wireframe" ? "" : `url(${right})`,
              opacity: 0.5,
            }}
          ></div>
          <div className="hero min-h-screen">
            <div className="hero-content  flex-col lg:flex-row">
              {theme === "wireframe" ? (
                <img
                  src={pro2}
                  className="w-11/12 md:w-2/3 rounded-lg shadow-2xl"
                  alt=""
                />
              ) : (
                <img
                  src={pro}
                  className="w-11/12 md:w-2/3 rounded-lg shadow-2xl"
                  alt=""
                />
              )}
              <div className="text-center">
                <h1 className=" text-3xl lg:text-4xl font-bold">Programming</h1>
                <p className="py-6 text-base lg:text-lg ">
                  An editor comprises of various programming languages with AI
                  integration.
                </p>
                <Link to="/programming-editor">
                  <button className="bg-neutral-950 text-white border border-neutral-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                    <span className="bg-neutral-400 shadow-neutral-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Try Now !
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={`${theme === "wireframe" ? "" : "bg-black"}`}>
          <div
            className={`relative h-screen flex items-center justify-center my-20${
              theme === "wireframe" ? "bg-white" : "bg-black"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: theme === "wireframe" ? "" : `url(${center})`,
                opacity: 0.5,
              }}
            ></div>

            <div className="carousel w-full relative flex flex-col items-center gap-10">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold ">Snapshots</h1>
              </div>
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                cssMode={true}
                mousewheel={true}
                keyboard={true}
                modules={[Autoplay, Mousewheel, Keyboard]}
                className="mySwiper w-11/12 md:w-2/3 mx-auto rounded-lg shadow-2xl mb-20"
                ref={swiperRef}
              >
                {slideImagesDark.map((img, index) => (
                  <SwiperSlide key={index}>
                    {theme === "wireframe" ? (
                      <img
                        src={slideImagesWireframe[index]}
                        alt={`Slide ${index + 1}`}
                      />
                    ) : (
                      <img src={img} alt={`Slide ${index + 1}`} />
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="absolute hidden md:flex justify-between items-center inset-0 mx-auto left-5 right-5">
                <button className="btn btn-circle " onClick={slidePrev}>
                  ❮
                </button>
                <button className="btn btn-circle " onClick={slideNext}>
                  ❯
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={`${theme === "wireframe" ? "" : "bg-gray-950"}`}>
          <div
            className={`relative h-screen flex items-center justify-center mb-10 ${
              theme === "wireframe" ? "bg-white" : " bg-black"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: theme === "wireframe" ? "" : `url(${center})`,
                opacity: 0.7,
              }}
            ></div>
            <div className="hero min-h-screen ">
              <div className="hero-content flex flex-col gap-10 text-center">
                <h1 className=" text-3xl lg:text-4xl font-bold">FAQs</h1>
                <div className=" w-full flex flex-col gap-2">
                  <div className="collapse  collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title  text-base md:text-xl font-medium">
                      Major Features of CodeVerse
                    </div>
                    <div className="collapse-content">
                      <p>
                        Integration With AI , LocalStorage , User-Friendly
                        Editors.
                      </p>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-base md:text-xl font-medium">
                      What are the Buttons - HTML CSS JavaScript?
                    </div>
                    <div className="collapse-content">
                      <p>
                        These buttons are used to adjust their respective
                        editors.
                      </p>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-base md:text-xl font-medium">
                      Unique Feature of CodeVerse
                    </div>
                    <div className="collapse-content ">
                      <p className="px-2">
                        <span className="font-bold">LocalStorage</span> is used
                        to ensure your code remains intact even after a browser
                        refresh.
                      </p>
                    </div>
                  </div>
                  <div className="collapse  collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-base md:text-xl font-medium">
                      Information Regarding AI
                    </div>
                    <div className="collapse-content">
                      <p>
                        Responses generated from AI are directly parsed into
                        respective editors.
                      </p>
                    </div>
                  </div>
                  <div className="collapse  collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-base md:text-xl font-medium">
                      Usage Suggestions Regarding AI
                    </div>
                    <div className="collapse-content">
                      <p>
                        Type "Write a language program" followed by the language
                        you prefer.
                      </p>
                    </div>
                  </div>
                  <div className="collapse  collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-base md:text-xl font-medium">
                      Upcoming Features
                    </div>
                    <div className="collapse-content">
                      <p>
                        User login for personalized access , Storing codes in
                        cloud and more Coming soon...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${theme === "wireframe" ? "" : "bg-black"}`}>
          <div
            className={`relative h-screen flex items-center justify-center mb-4${
              theme === "wireframe" ? "bg-white" : " bg-black"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: theme === "wireframe" ? "" : `url(${center})`,
                opacity: 0.7,
              }}
            ></div>
            <div className="hero min-h-screen ">
              <div className="hero-content flex flex-col gap-20 text-center">
                <ContactForm theme={theme} />
              </div>
            </div>
          </div>
        </div>

        <footer
          className={`footer items-center justify-center md:justify-normal p-4  text-neutral-content  ${
            theme === "wireframe"
              ? "bg-white text-black"
              : " bg-black   text-white"
          } `}
        >
          <aside className="items-center grid-flow-col ml-2">
            <img src={logo} className="w-9 h-9" alt="" />
            <p>Copyright © 2024 - Allu Venkata Sriram</p>
          </aside>
          <nav className="grid grid-flow-col gap-4  ml-14 lg:ml-24">
            <Link to="/" className="link link-hover" onClick={scrollToTop}>
              Home
            </Link>
            <Link to="/web-editor" className="link link-hover">
              WebDev
            </Link>
            <Link to="/programming-editor" className="link link-hover">
              Programming
            </Link>
          </nav>
          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end ml-36 lg:mr-2">
            <a
              href="https://www.linkedin.com/in/allu-venkata-sriram/"
              aria-label="Linkedin"
            >
              <FaLinkedin size={25} />
            </a>
          </nav>
        </footer>
      </div>
    </>
  );
};

export default Home;
