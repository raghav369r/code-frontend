import React from "react";
import ReactSyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const DisplayCode = ({ code, language }) => {
    
    return (
    <div className="">
      <h1 className="pt-5 text-sm text-neutral-700">Code | {language}</h1>
      <ReactSyntaxHighlighter
        className="h-fit w-full p-3 rounded-xl"
        language={language}
        style={docco}
      >
        {code}
      </ReactSyntaxHighlighter>
    </div>
  );
};

export default DisplayCode;
