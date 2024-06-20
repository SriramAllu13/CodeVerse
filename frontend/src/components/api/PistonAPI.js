import axios from "axios";
import { LANGUAGE_VERSIONS } from "../editor/proeditor/requirements";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (language, sourceCode, stdin = "") => {
  const response = await API.post("/execute", {
    language: language,
    version: LANGUAGE_VERSIONS[language],
    files: [
      {
        content: sourceCode,
      },
    ],
    stdin: stdin,
  });
  return response.data;
};
