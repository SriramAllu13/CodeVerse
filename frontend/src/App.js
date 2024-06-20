import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import WebEditor from "./components/editor/webeditor/WebEditor";
import ProgrammingEditor from "./components/editor/proeditor/ProEditor";
import { Triangle } from "react-loader-spinner";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="w-screen h-screen flex items-center justify-center overflow-hidden bg-black">
          <Triangle
            visible={true}
            height="100"
            width="100"
            color="#4fa94d"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/web-editor" element={<WebEditor />} />
            <Route path="/programming-editor" element={<ProgrammingEditor />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
