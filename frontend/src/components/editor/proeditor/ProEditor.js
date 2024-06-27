import React, { useState } from "react";
import SplitPane, { Pane } from "split-pane-react";
import "split-pane-react/esm/themes/default.css";
import ProgrammingContent from "./ProContent";
import { executeCode } from "../../api/PistonAPI";
import {
  CODE_SNIPPETS,
  LANGUAGE_VERSIONS,
  LANGUAGE_ICONS,
} from "./requirements";
import ProgrammingNav from "../../navigation/ProNav";
import AIComponent from "../AI";
import { generateChatResponse } from "../../api/GeminiAI";
import useLocalStorage from "../../hook/useLocalStorage";

const ProgrammingEditor = () => {
  const [value, setValue] = useLocalStorage("code", "");
  const [selectedLanguage, setSelectedLanguage] = useLocalStorage(
    "language",
    "python"
  );
  const [sizes, setSizes] = useState(["50%", "50%", "0.2%"]);
  const [Smsizes, SmsetSizes] = useState(["100%", "0%", "0%"]);
  const [outputClickCount, setOutputClickCount] = useState(1);
  const [output, setOutput] = useState(null);
  const [AIcount, setAIcount] = useState(1);
  const [SmAIcount, SmsetAIcount] = useState(1);
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [awaitingInput, setAwaitingInput] = useState(false);
  const [inputFields, setInputFields] = useState([]);
  const [theme, setTheme] = useState("halloween");
  const [CodeLoading, setCodeLoading] = useState(false);
  const [isError, setisError] = useState(false);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  const checkForDynamicInputs = (sourceCode) => {
    let inputCount = 0;

    switch (selectedLanguage) {
      case "python":
        inputCount = (sourceCode.match(/input\(/g) || []).length;
        break;
      case "java":
        inputCount = (
          sourceCode.match(/Scanner\s+\w+\s*=\s*new\s+Scanner/g) || []
        ).length;
        break;
      case "c":
      case "cpp":
        inputCount = (sourceCode.match(/scanf\(/g) || []).length;
        break;
      case "javascript":
      case "typescript":
        inputCount = (sourceCode.match(/prompt\(/g) || []).length;
        break;
      case "ruby":
        inputCount = (sourceCode.match(/gets/g) || []).length;
        break;
      case "go":
        inputCount = (sourceCode.match(/fmt\.Scan/g) || []).length;
        break;
      case "csharp":
        inputCount = (sourceCode.match(/Console\.Read/g) || []).length;
        break;
      case "php":
        inputCount = (sourceCode.match(/fgets\(/g) || []).length;
        break;
      default:
        inputCount = 0;
    }

    return inputCount;
  };

  const prepareForExecution = () => {
    const sourceCode = value;
    const inputCount = checkForDynamicInputs(sourceCode);

    if (inputCount > 0) {
      setAwaitingInput(true);
      setInputFields(Array(inputCount).fill(""));
    } else {
      Output();
    }
  };

  const Output = async (stdin = "") => {
    const sourceCode = value;
    if (!sourceCode) return console.log("Error: data not received");
    setOutput(["Executing..."]);
    setCodeLoading(true);
    try {
      const result = await executeCode(selectedLanguage, sourceCode, stdin);
      setOutput(result.run.output.split("\n"));
      result.run.stderr ? setisError(true) : setisError(false);
      setAwaitingInput(false);
    } catch (error) {
      console.log(error);
    } finally {
      setCodeLoading(false);
    }
  };

  const handleInputSubmit = () => {
    const formattedInput = inputFields.join("\n");
    Output(formattedInput);
    setInputFields([]);
    setAwaitingInput(false);
  };

  const handleOutput = () => {
    if (outputClickCount % 2 === 0) {
      setSizes(["50%", "50%", "0.2%"]);
    } else {
      setSizes(["95%", "5%", "0.2%"]);
    }
    setOutputClickCount(outputClickCount + 1);
  };
  const SmhandleOutput = () => {
    if (outputClickCount % 2 === 0) {
      SmsetSizes(["100%", "0%", "0%"]);
    } else {
      SmsetSizes(["0%", "100%", "0%"]);
    }
    setOutputClickCount(outputClickCount + 1);
  };

  const handleAI = () => {
    if (AIcount % 2 === 0) {
      setSizes(["50%", "50%", "0.2%"]);
    } else {
      setSizes(["25%", "0%", "75%"]);
    }
    setAIcount(AIcount + 1);
  };
  const SmhandleAI = () => {
    if (SmAIcount % 2 === 0) {
      SmsetSizes(["100%", "0%", "0%"]);
    } else {
      SmsetSizes(["0%", "0%", "100%"]);
    }
    SmsetAIcount(SmAIcount + 1);
  };

  const handlePromptInput = async () => {
    setIsLoading(true);
    try {
      const responseData = await generateChatResponse(input);
      setResponse(
        responseData.split("\n").map((line, i) => (
          <React.Fragment key={i}>
            {line}
            <br />
          </React.Fragment>
        ))
      );

      const regexPattern = new RegExp(
        // eslint-disable-next-line
        "```\\s*" + `${selectedLanguage}` + "\\s*([\\s\\S]*?)```"
      );

      const matches = responseData.match(regexPattern);

      if (matches && matches.length > 1) {
        const codeBlock = matches[1];

        setValue(codeBlock);
      } else {
        console.log("No code block found in the AI response.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleEnterKeyPress = async (e) => {
    if (e.key === "Enter") {
      await handlePromptInput();
    }
  };
  const handleInputEnterKeyPress = async (e) => {
    if (e.key === "Enter") {
      await handleInputSubmit();
    }
  };

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "halloween" ? "wireframe" : "halloween"
    );
  };

  return (
    <>
      <div
        data-theme={theme}
        className={`${
          theme === "wireframe" ? "bg-botnav-gradient-light" : ""
        } flex flex-col h-screen`}
      >
        <ProgrammingNav
          onhandleAI={handleAI}
          onToggleTheme={toggleTheme}
          theme={theme}
          SmhandleAI={SmhandleAI}
        />
        <div className="flex justify-between items-center  ml-0 mr-0 lg:ml-4 lg:mr-4 h-14 md:h-12">
          <div className="dropdown dropdown-hover w-30 ">
            <button
              className="btn btn-ghost text-sm sm:text-base w-32 sm:w-48 "
              onClick={() => handleLanguageSelect(selectedLanguage)}
            >
              {LANGUAGE_ICONS[selectedLanguage]}&nbsp;{selectedLanguage}&nbsp;▼
            </button>
            <ul className="dropdown-content z-[1] menu  p-2 shadow bg-base-100 rounded-box w-50 lg:w-52">
              {Object.entries(LANGUAGE_VERSIONS).map(([language, version]) => (
                <li key={language}>
                  <button onClick={() => handleLanguageSelect(language)}>
                    {LANGUAGE_ICONS[language]}&nbsp;{language}&nbsp;
                    <span>{version}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <button
              onClick={handleOutput}
              className="mr-24  text-base btn btn-ghost hidden md:flex"
            >
              Output
            </button>
            <button
              onClick={SmhandleOutput}
              className=" mr-0  text-sm sm:text-base btn btn-ghost md:hidden"
            >
              Output
            </button>
          </div>
          <div>
            <button
              onClick={prepareForExecution}
              className="btn btn-ghost  text-sm sm:text-base"
            >
              {CodeLoading && (
                <span className="loading loading-spinner  ml-0 md:ml-2"></span>
              )}
              RunCode
            </button>
          </div>
        </div>
        <div className="flex-grow">
          <SplitPane
            split="vertical"
            sizes={sizes}
            onChange={setSizes}
            className="hidden md:flex"
          >
            <Pane minSize={"50%"} maxSize="95%">
              <div
                className={`h-full ${
                  theme === "wireframe" ? "" : "border border-black"
                }`}
              >
                <ProgrammingContent
                  selectedLanguage={selectedLanguage}
                  value={value}
                  setValue={setValue}
                  handleLanguageSelect={handleLanguageSelect}
                  theme={theme}
                  options={{
                    language: { selectedLanguage },
                  }}
                />
              </div>
            </Pane>
            <Pane minSize={"5%"} maxSize="95%">
              <div
                className={`${
                  theme === "wireframe"
                    ? "bg-botnav-gradient-light"
                    : "bg-output-gradient-dark border border-black"
                } h-full p-8 ${isError ? "text-red-500" : ""} `}
              >
                {output ? (
                  output.map((line, i) => <p key={i}>{line}</p>)
                ) : (
                  <div className=" flex flex-col gap-2 ">
                    {awaitingInput ? (
                      <p>Enter the Inputs:</p>
                    ) : (
                      <p>Click RunCode to Execute...</p>
                    )}
                    {awaitingInput && (
                      <div className="flex flex-col gap-2 items-center">
                        {inputFields.map((field, index) => (
                          <input
                            key={index}
                            className="input input-bordered input-sm w-44"
                            type="text"
                            placeholder="Enter Input..."
                            onKeyPress={handleInputEnterKeyPress}
                            value={inputFields[index]}
                            onChange={(e) => {
                              const newInputFields = [...inputFields];
                              newInputFields[index] = e.target.value;
                              setInputFields(newInputFields);
                            }}
                          />
                        ))}
                        <button
                          onClick={handleInputSubmit}
                          className="btn btn-ghost text-base"
                        >
                          Submit Input
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </Pane>
            <Pane minSize={"5%"} maxSize="95%">
              <div
                className={`${
                  theme === "wireframe"
                    ? "bg-ai-gradient-light  text-black"
                    : "bg-ai-gradient-dark  text-white"
                } h-full`}
              >
                <AIComponent
                  handleAI={handleAI}
                  handlePromptInput={handlePromptInput}
                  input={input}
                  setInput={setInput}
                  handleEnterKeyPress={handleEnterKeyPress}
                  response={response}
                  isLoading={isLoading}
                  theme={theme}
                />
              </div>
            </Pane>
          </SplitPane>
          <SplitPane
            split="vertical"
            sizes={Smsizes}
            onChange={setSizes}
            className="md:hidden"
          >
            <Pane minSize={"50%"} maxSize="95%">
              <div
                className={`h-full ${
                  theme === "wireframe" ? "" : "border border-black"
                }`}
              >
                <ProgrammingContent
                  selectedLanguage={selectedLanguage}
                  value={value}
                  setValue={setValue}
                  handleLanguageSelect={handleLanguageSelect}
                  theme={theme}
                  options={{
                    language: { selectedLanguage },
                  }}
                />
              </div>
            </Pane>
            <Pane minSize={"5%"} maxSize="95%">
              <div
                className={`${
                  theme === "wireframe"
                    ? "bg-botnav-gradient-light"
                    : "bg-output-gradient-dark border border-black"
                } h-full p-8 ${isError ? "text-red-500" : ""} `}
              >
                {output ? (
                  output.map((line, i) => <p key={i}>{line}</p>)
                ) : (
                  <div className=" flex flex-col gap-2 ">
                    {awaitingInput ? (
                      <p>Enter the Inputs:</p>
                    ) : (
                      <p>Click RunCode to Execute...</p>
                    )}
                    {awaitingInput && (
                      <div className="flex flex-col gap-2 items-center">
                        {inputFields.map((field, index) => (
                          <input
                            key={index}
                            className="input input-bordered input-sm w-44"
                            type="text"
                            placeholder="Enter Input..."
                            onKeyPress={handleInputEnterKeyPress}
                            value={inputFields[index]}
                            onChange={(e) => {
                              const newInputFields = [...inputFields];
                              newInputFields[index] = e.target.value;
                              setInputFields(newInputFields);
                            }}
                          />
                        ))}
                        <button
                          onClick={handleInputSubmit}
                          className="btn btn-ghost text-base"
                        >
                          Submit Input
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </Pane>
            <Pane minSize={"5%"} maxSize="95%">
              <div
                className={`${
                  theme === "wireframe"
                    ? "bg-ai-gradient-light  text-black"
                    : "bg-ai-gradient-dark  text-white"
                } h-full`}
              >
                <AIComponent
                  handleAI={handleAI}
                  handlePromptInput={handlePromptInput}
                  input={input}
                  setInput={setInput}
                  handleEnterKeyPress={handleEnterKeyPress}
                  response={response}
                  isLoading={isLoading}
                  theme={theme}
                />
              </div>
            </Pane>
          </SplitPane>
        </div>
      </div>
    </>
  );
};

export default ProgrammingEditor;
