import React, { useState, useEffect } from "react";
import SplitPane, { Pane } from "split-pane-react";
import "split-pane-react/esm/themes/default.css";
import WebContent from "./WebContent";
import useLocalStorage from "../../hook/useLocalStorage";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import WebNav from "../../navigation/WebNav";
import AIComponent from "../AI";
import { generateChatResponse } from "../../api/GeminiAI";

const WebEditor = () => {
  const [horizontalSizes, setHorizontalSizes] = useState(["95%", "5%"]);
  const [verticalSizes, setVerticalSizes] = useState([
    "33.3%",
    "33.3%",
    "33.3%",
    "0%",
  ]);
  const [SmverticalSizes, SmsetVerticalSizes] = useState([
    "100%",
    "0%",
    "0%",
    "0%",
  ]);
  const [Html, setHtml] = useLocalStorage("Html", "");
  const [Css, setCss] = useLocalStorage("Css", "");
  const [Js, setJs] = useLocalStorage("Js", "");
  const [srcDoc, setSrcDoc] = useState("");
  const [HtmlCount, setHtmlCount] = useState(1);
  const [CssCount, setCssCount] = useState(1);
  const [SmCssCount, setSmCssCount] = useState(1);
  const [JsCount, setJsCount] = useState(1);
  const [SmJsCount, setSmJsCount] = useState(1);
  const [OutputCount, setOutputCount] = useState(1);
  const [AIcount, setAIcount] = useState(1);
  const [SmAIcount, SmsetAIcount] = useState(1);
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState("halloween");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${Html}</body>
          <style>${Css}</style>
          <script>${Js}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [Html, Css, Js]);

  const handleJS = () => {
    if (JsCount % 2 === 0) {
      setVerticalSizes(["80%", "10%", "10%", "0%"]);
    } else {
      setVerticalSizes(["33.33%", "33.33%", "33.33%", "0%"]);
    }
    setJsCount(JsCount + 1);
  };
  const handleSmJS = () => {
    if (SmJsCount % 2 === 0) {
      SmsetVerticalSizes(["33.33%", "33.33%", "33.33%", "0%"]);
    } else {
      SmsetVerticalSizes(["0%", "0%", "100%", "0%"]);
    }
    setSmJsCount(SmJsCount + 1);
  };

  const handleCss = () => {
    if (CssCount % 2 === 0) {
      setVerticalSizes(["33.3%", "33.3%", "33.3%", "0%"]);
    } else {
      setVerticalSizes(["50%", "50%", "0%", "0%"]);
    }
    setCssCount(CssCount + 1);
  };

  const handleSmCss = () => {
    if (SmCssCount % 2 === 0) {
      SmsetVerticalSizes(["33.3%", "33.3%", "33.3%", "0%"]);
    } else {
      SmsetVerticalSizes(["0%", "100%", "0%", "0%"]);
    }
    setSmCssCount(SmCssCount + 1);
  };

  const handleHtml = () => {
    if (HtmlCount % 2 === 0) {
      setVerticalSizes(["33.3%", "33.3%", "33.3%", "0%"]);
    } else {
      setVerticalSizes(["100%", "0%", "0%", "0%"]);
    }
    setHtmlCount(HtmlCount + 1);
  };
  const SmhandleHtml = () => {
    if (HtmlCount % 2 === 0) {
      SmsetVerticalSizes(["33.3%", "33.3%", "33.3%", "0%"]);
    } else {
      SmsetVerticalSizes(["100%", "0%", "0%", "0%"]);
    }
    setHtmlCount(HtmlCount + 1);
  };

  const handleOutput = () => {
    if (OutputCount % 2 === 0) {
      setHorizontalSizes(["95%", "5%"]);
    } else {
      setHorizontalSizes(["60%", "50%"]);
    }
    setOutputCount(OutputCount + 1);
  };
  const handleAI = () => {
    if (AIcount % 2 === 0) {
      setVerticalSizes(["33.3%", "33.3%", "33.3%", "0%"]);
    } else {
      setVerticalSizes(["10%", "10%", "10%", "70%"]);
    }
    setAIcount(AIcount + 1);
  };
  const SmhandleAI = () => {
    if (SmAIcount % 2 === 0) {
      SmsetVerticalSizes(["33.3%", "33.3%", "33.3%", "0%"]);
    } else {
      SmsetVerticalSizes(["0%", "0%", "0%", "100%"]);
    }
    SmsetAIcount(SmAIcount + 1);
  };
  const handlePromptInput = async () => {
    setIsLoading(true);
    try {
      const responseData = await generateChatResponse(input);

      const lines = responseData.split("\n");

      let htmlContent = "";
      let cssContent = "";
      let jsContent = "";

      let isStyleTag = false;
      let isScriptTag = false;
      let isBodyTag = false;

      for (const line of lines) {
        if (line.includes("<style>")) {
          isStyleTag = true;
          continue;
        } else if (line.includes("</style>")) {
          isStyleTag = false;
          continue;
        } else if (line.includes("<script>")) {
          isScriptTag = true;
          continue;
        } else if (line.includes("</script>")) {
          isScriptTag = false;
          continue;
        } else if (line.includes("<body>")) {
          isBodyTag = true;
          continue;
        } else if (line.includes("</body>")) {
          isBodyTag = false;
          continue;
        }

        if (isStyleTag) {
          cssContent += line + "\n";
        } else if (isScriptTag) {
          jsContent += line + "\n";
        } else if (isBodyTag) {
          htmlContent += line + "\n";
        }
      }

      setHtml(htmlContent);
      setCss(cssContent);
      setJs(jsContent);

      setSrcDoc(`
        <html>
          <body>${htmlContent}</body>
          <style>${cssContent}</style>
          <script>${jsContent}</script>
        </html>
      `);

      setResponse(
        responseData.split("\n").map((line, i) => (
          <React.Fragment key={i}>
            {line}
            <br />
          </React.Fragment>
        ))
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleEnterKeyPress = async (e) => {
    if (e.key === "Enter") {
      await handlePromptInput();
    }
  };
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "halloween" ? "wireframe" : "halloween"
    );
  };

  return (
    <>
      <div data-theme={theme} className="flex flex-col h-screen">
        <WebNav
          onhandleAI={handleAI}
          onToggleTheme={toggleTheme}
          theme={theme}
          SmhandleAI={SmhandleAI}
        />
        <div
          className={` ${
            theme === "wireframe" ? "bg-botnav-gradient-light" : ""
          } flex justify-between items-center ml-4 mr-4 h-12 `}
        >
          <button
            className="btn btn-ghost text-base hidden lg:block"
            onClick={handleHtml}
          >
            HTML
          </button>
          <button
            className="btn btn-ghost text-base lg:hidden"
            onClick={SmhandleHtml}
          >
            HTML
          </button>
          <button
            className="btn btn-ghost text-base hidden lg:block"
            onClick={handleCss}
          >
            CSS
          </button>
          <button
            className="btn btn-ghost text-base lg:hidden"
            onClick={handleSmCss}
          >
            CSS
          </button>
          <button
            className="btn btn-ghost text-base hidden lg:block"
            onClick={handleJS}
          >
            JavaScript
          </button>
          <button
            className="btn btn-ghost text-base lg:hidden "
            onClick={handleSmJS}
          >
            JavaScript
          </button>
          <button className="btn btn-ghost text-base " onClick={handleOutput}>
            Output
          </button>
        </div>
        <div
          className={`flex-grow ${
            theme === "wireframe" ? "" : "border border-black"
          }`}
        >
          <SplitPane
            split="horizontal"
            sizes={horizontalSizes}
            onChange={setHorizontalSizes}
          >
            <Pane minSize={"5%"} maxSize="95%">
              <SplitPane
                split="vertical"
                sizes={verticalSizes}
                onChange={setVerticalSizes}
                className="hidden md:flex"
              >
                <Pane minSize={"6%"} maxSize="95%">
                  <div className="text-white h-full">
                    <WebContent
                      extension="html"
                      displayName="HTML"
                      Logo={<FaHtml5 size={20} className="text-red-600" />}
                      value={Html}
                      onChange={setHtml}
                      theme={theme}
                    />
                  </div>
                </Pane>
                <Pane minSize={"5%"} maxSize="95%">
                  <div className="text-white h-full">
                    <WebContent
                      extension="css"
                      displayName="CSS"
                      Logo={<FaCss3 size={20} className="text-sky-500" />}
                      value={Css}
                      onChange={setCss}
                      theme={theme}
                    />
                  </div>
                </Pane>
                <Pane minSize={"5%"} maxSize="95%">
                  <div className="text-white h-full">
                    <WebContent
                      extension="javascript"
                      displayName="JavaScript"
                      Logo={
                        <RiJavascriptFill
                          size={20}
                          className="text-yellow-400"
                        />
                      }
                      value={Js}
                      onChange={setJs}
                      theme={theme}
                    />
                  </div>
                </Pane>
                <Pane minSize={"5%"} maxSize="95%">
                  <div
                    className={`${
                      theme === "wireframe"
                        ? "bg-ai-gradient-light text-black"
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
                sizes={SmverticalSizes}
                onChange={SmsetVerticalSizes}
                className="md:hidden"
              >
                <Pane minSize={"6%"} maxSize="95%">
                  <div className="text-white h-full">
                    <WebContent
                      extension="html"
                      displayName="HTML"
                      Logo={<FaHtml5 size={20} className="text-red-600" />}
                      value={Html}
                      onChange={setHtml}
                      theme={theme}
                    />
                  </div>
                </Pane>
                <Pane minSize={"5%"} maxSize="95%">
                  <div className="text-white h-full">
                    <WebContent
                      extension="css"
                      displayName="CSS"
                      Logo={<FaCss3 size={20} className="text-sky-500" />}
                      value={Css}
                      onChange={setCss}
                      theme={theme}
                    />
                  </div>
                </Pane>
                <Pane minSize={"5%"} maxSize="95%">
                  <div className="text-white h-full">
                    <WebContent
                      extension="javascript"
                      displayName="JavaScript"
                      Logo={
                        <RiJavascriptFill
                          size={20}
                          className="text-yellow-400"
                        />
                      }
                      value={Js}
                      onChange={setJs}
                      theme={theme}
                    />
                  </div>
                </Pane>
                <Pane minSize={"5%"} maxSize="95%">
                  <div
                    className={`${
                      theme === "wireframe"
                        ? "bg-ai-gradient-light text-black"
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
            </Pane>
            <div className="bg-white h-full">
              <iframe
                srcDoc={srcDoc}
                title="output"
                sandbox="allow-scripts"
                frameBorder="0"
                width="100%"
                height="100%"
                className="mb-0 overflow-hidden"
              />
            </div>
          </SplitPane>
        </div>
      </div>
    </>
  );
};

export default WebEditor;
