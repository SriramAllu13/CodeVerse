import React from "react";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { IoEnter } from "react-icons/io5";
import { SiGooglegemini } from "react-icons/si";

const AIComponent = ({
  handleAI,
  handlePromptInput,
  input,
  setInput,
  handleEnterKeyPress,
  response,
  isLoading,
  theme,
}) => {
  return (
    <>
      <div className="h-full flex flex-col">
        <div className="navbar flex items-center">
          <div className="navbar-start flex-1 gap-2 md:gap-2 items-center ml-0 md:ml-4">
            <SiGooglegemini className="text-lg md:text-xl" />
            <p className="text-sm md:text-lg"> AI</p>
          </div>
          <div className="navbar-center  ml-1 md:ml-0 lg:mr-16 gap-1 flex-2  ">
            <input
              className="input w-36 md:w-60"
              type="text"
              name="input"
              placeholder="Enter Prompt..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleEnterKeyPress}
            />
            {isLoading ? (
              <span className="loading loading-spinner ml-2"></span>
            ) : (
              <IoEnter
                className="text-xl md:text-xl cursor-pointer"
                onClick={handlePromptInput}
              />
            )}
          </div>
          <div className="navbar-end flex-1">
            <MdOutlineCloseFullscreen
              size={20}
              onClick={handleAI}
              className=" cursor-pointer lg:mr-2 mr-1"
            />
          </div>
        </div>
        <div
          className={`border border-dotted ${
            theme === "wireframe" ? "border-black" : ""
          } h-full flex-grow  m-2 p-2.5 max-h-full overflow-y-auto`}
        >
          {isLoading ? (
            <p>Generating...</p>
          ) : (
            response || "Enter a Prompt to generate Response!!!"
          )}
        </div>
      </div>
    </>
  );
};

export default AIComponent;
