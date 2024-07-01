import { Editor } from "@monaco-editor/react";
import React, { useState } from "react";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { RiCollapseDiagonalLine } from "react-icons/ri";
import { RiRefreshLine } from "react-icons/ri";

const CodeEditor = () => {
  const [expanded, setExpanded] = useState(false);
  const [language, setLanguage] = useState("Cpp");
  const [showLan, setShowLang] = useState(false);
  const handleExpand = () => {
    setExpanded(!expanded);
  };
  const handleLangSelect = (e) => {
    setLanguage(e.target.innerHTML);
    setShowLang(false);
  };
  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between bg-neutral-200 h-fit p-2 gap-3 items-center">
        <div className="">
          <div
            className="relative px-4 py-1 group cursor-pointer bg-neutral-300 rounded-lg min-w-32"
            onMouseEnter={() => setShowLang(true)}
            onMouseLeave={() => setShowLang(false)}
          >
            <h1 className="text-center">{language}</h1>
            {showLan && (
              <div className="z-10 left-0 top-full absolute  w-full flex flex-col transition-all duration-500 bg-neutral-200">
                <button
                  onClick={handleLangSelect}
                  className="hover:bg-neutral-300 border-b border-gray-400 py-1"
                >
                  Cpp
                </button>
                <button
                  onClick={handleLangSelect}
                  className="hover:bg-neutral-300 border-b border-gray-400 py-1"
                >
                  C
                </button>
                <button
                  onClick={handleLangSelect}
                  className="hover:bg-neutral-300 border-b border-gray-400 py-1"
                >
                  C#
                </button><button
                  onClick={handleLangSelect}
                  className="hover:bg-neutral-300 border-b border-gray-400 py-1"
                >
                  Typescript
                </button>
                <button
                  onClick={handleLangSelect}
                  className="hover:bg-neutral-300 border-b border-gray-400 py-1"
                >
                  Python
                </button>
                <button
                  onClick={handleLangSelect}
                  className="hover:bg-neutral-300 border-b border-gray-400 py-1"
                >
                  Ruby
                </button>
                <button
                  onClick={handleLangSelect}
                  className="hover:bg-neutral-300 border-b border-gray-400 py-1"
                >
                  Javascript
                </button>
                <button
                  onClick={handleLangSelect}
                  className="hover:bg-neutral-300 py-1"
                >
                  Java
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div>
            <RiRefreshLine className="size-5" strokeWidth="0px" />
          </div>
          <div className="size-4" onClick={handleExpand}>
            {expanded ? (
              <RiCollapseDiagonalLine size={"100%"} />
            ) : (
              <BsArrowsAngleExpand size={"100%"} />
            )}
          </div>
        </div>
      </div>

      <Editor language="python" height="100%" theme="vsdark" width="100%" />
    </div>
  );
};

export default CodeEditor;
