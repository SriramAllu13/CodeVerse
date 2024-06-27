import React, { useEffect } from "react";
import Editor from "@monaco-editor/react";
import { CODE_SNIPPETS } from "./requirements";

const ProgrammingContent = ({
  value,
  setValue,
  handleLanguageSelect,
  selectedLanguage,
  response,
  theme,
}) => {
  useEffect(() => {
    console.log(value);
  }, [value]);

  useEffect(() => {
    if (response && value === CODE_SNIPPETS[selectedLanguage]) {
      setValue(response);
    }
  }, [response, value, selectedLanguage, setValue]);

  return (
    <>
      <Editor
        height="85vh"
        theme={theme === "wireframe" ? "light" : "vs-dark"}
        language={selectedLanguage}
        defaultValue={CODE_SNIPPETS[selectedLanguage]}
        value={value}
        onChange={(value) => setValue(value)}
        options={{
          lineHeight: 24,
          lineNumbers: "on",
          wordWrap: "on",
          scrollBeyondLastLine: false,
          automaticLayout: true,
          scrollbar: { vertical: "auto", horizontal: "auto" },
          contextmenu: false,
          suggest: {
            showStatusBar: false,
            snippetsPreventQuickSuggestions: false,
            snippetsRule: "always",
            filterGraceful: true,
            local: true,
            shareSuggestSelections: true,
            completeFunctionCalls: true,
            showMethods: true,
            showFunctions: true,
            showConstructors: true,
            showFields: true,
            showVariables: true,
            showClassObjects: true,
            showStructs: true,
            showEnums: true,
            showInterfaces: true,
            showModules: true,
            showProperties: true,
            showEvents: true,
            showOperators: true,
            showUnits: true,
            showValues: true,
            showConstants: true,
            showEnumsMembers: true,
            showKeywords: true,
            showWords: true,
            showColors: true,
            showFiles: true,
            showReferences: true,
            showFolders: true,
            showTypeParameters: true,
            showSnippets: true,
            showUsers: true,
            showIssues: true,
            showTypeWarnings: true,
            showNoSuggestions: true,
          },
          quickSuggestions: true,
          quickSuggestionsDelay: 100,
          wordBasedSuggestions: false,
          acceptSuggestionOnEnter: "on",
          acceptSuggestionOnCommitCharacter: true,
          occurrencesHighlight: false,
          renderWhitespace: "none",
          semanticHighlighting: true,
          autoClosingQuotes: "always",
          autoClosingBrackets: "always",
          autoSurround: "languageDefined",
          autoIndent: true,
          autoClosingOvertype: "auto",
        }}
      />
    </>
  );
};

export default ProgrammingContent;
