import { Editor } from "@monaco-editor/react";
import React from "react";

const App = () => {
  return (
    <div className="container h-screen mx-auto bg-black p-10">
      <Editor language="javascript" height="100%" theme="vsdark" width="100%" />
    </div>
  );
};

export default App;
