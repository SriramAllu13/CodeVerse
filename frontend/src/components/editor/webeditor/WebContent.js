import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { copilot } from "@uiw/codemirror-theme-copilot";
import { bbedit } from "@uiw/codemirror-theme-bbedit";

const WebContent = (props) => {
  const { Logo, displayName, extension, value, onChange, theme } = props;

  return (
    <div className="flex flex-col h-full">
      <div
        className={`flex items-center ${
          theme === "wireframe" ? "bg-botnav-gradient-light" : ""
        }`}
      >
        <div
          className={`flex justify-start items-center p-2 md:p-4 gap-1 ${
            theme === "wireframe" ? "text-black" : "text-white"
          }`}
        >
          {Logo}
          <p>{displayName}</p>
        </div>
      </div>
      <div className="flex-grow overflow-hidden">
        <CodeMirror
          value={value}
          height="100%"
          theme={theme === "wireframe" ? bbedit : copilot}
          className="h-full overflow-hidden "
          onChange={(value) => {
            onChange(value);
          }}
          options={{
            mode: extension,
            lineNumbers: true,
            indentUnit: 2,
            tabSize: 2,
            autoCloseBrackets: true,
            matchBrackets: true,
            lineWrapping: true,
            autoCloseTags: true,
          }}
          extensions={[
            extension === "javascript"
              ? javascript({ jsx: true })
              : extension === "html"
              ? html()
              : css(),
          ]}
        />
      </div>
    </div>
  );
};

export default WebContent;
