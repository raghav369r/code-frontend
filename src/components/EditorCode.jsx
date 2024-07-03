import Editor from "@monaco-editor/react";
import React, { useRef, useState } from "react";
import Split from "react-split";
import { FaCaretDown } from "react-icons/fa";
import { BiSolidUpArrow } from "react-icons/bi";
import useRunCode from "../hooks/useRunCode";

const EditorCode = () => {
  const [run, data, loading, error] = useRunCode();
  const [language, setLanguage] = useState("cpp");
  const [height, setHeight] = useState("0");
  const [code, setCode] = useState("//write ur code here");
  const warningRef = useRef(null);
  const selectorRef = useRef(null);
  const editorRef = useRef(null);
  const splitRef = useRef(null);

  const handleRun = async () => {
    const res = await run({ variables: { input: { code, language } } });
    console.log(data);
  };

  const handleConsoleExpand = () => {
    const size = splitRef?.current?.split?.getSizes();
    if (size[1] < 1) splitRef.current.split.setSizes([40, 60]);
    else splitRef.current.split.setSizes([100, 0]);
  };

  const handleLan = (e) => {
    setLanguage(e.target.innerHTML);
    setHeight("0");
  };
  const handleSelecor = () => {
    if (height == "0") setHeight("[100%]");
    else setHeight("0");
  };
  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
  };
  const handleContent = (e, editor) => {
    if (e.length <= code.length + 5 || code.indexOf(e) != -1) setCode(e);
    else {
      editorRef.current.setValue(code);
      warningRef.current.classList.remove("-top-full");
      warningRef.current.classList.add("top-8");
      setTimeout(() => {
        warningRef.current.classList.add("-top-full");
        warningRef.current.classList.remove("top-8");
      }, 2500);
    }
  };
  return (
    <div className="h-full overflow-hidden  flex flex-col p-2 m-2 border rounded-lg border-gray-300 text-gray-900">
      <div
        ref={warningRef}
        className="absolute z-[1000] p-4 border-gray-300 -translate-x-1/2 -top-full transition-all duration-500 border rounded-xl bg-white text-red-600 font-semibold left-1/2"
      >
        Not Allowed To Paste Code
      </div>
      <div className="flex justify-between h-fit">
        <div className="relative px-4 py-1 bg-neutral-200 min-w-32 rounded-lg">
          <div
            className="flex items-center gap-3 justify-between font-semibold cursor-pointer"
            onClick={handleSelecor}
          >
            <h1>{language}</h1>
            <FaCaretDown />
          </div>
          {height != "0" && (
            <ul
              ref={selectorRef}
              className="absolute z-[10] bg-white overflow-hidden w-full top-full left-0 text-center cursor-pointer border z-100 flex flex-col"
            >
              <li
                className=" py-2 hover:bg-neutral-100 border-b"
                onClick={handleLan}
              >
                cpp
              </li>
              <li
                className=" py-2 hover:bg-neutral-100 border-b"
                onClick={handleLan}
              >
                c
              </li>
              <li
                className=" py-2 hover:bg-neutral-100 border-b"
                onClick={handleLan}
              >
                python
              </li>
              <li
                className=" py-2 hover:bg-neutral-100 border-b"
                onClick={handleLan}
              >
                java
              </li>
              <li
                className=" py-2 hover:bg-neutral-100 border-b"
                onClick={handleLan}
              >
                javascript
              </li>
              <li
                className=" py-2 hover:bg-neutral-100 border-b"
                onClick={handleLan}
              >
                ruby
              </li>
              <li className=" py-2 hover:bg-neutral-100 " onClick={handleLan}>
                r
              </li>
            </ul>
          )}
        </div>
      </div>
      <Split
        ref={splitRef}
        className="h-full overflow-y-hidden flex flex-col"
        direction="vertical"
        gutterSize={5}
        minSize={0}
        sizes={[100, 0]}
      >
        <div className=" bg-white">
          <Editor
            className="z-0"
            height={"100%"}
            language={language}
            value={code}
            onMount={handleEditorDidMount}
            onChange={handleContent}
            min
            options={{
              minimap: { enabled: false },
              selectOnLineNumbers: true,
              quickSuggestions: {
                other: false,
                comments: false,
                strings: false,
              },
              parameterHints: {
                enabled: false,
              },
              suggestOnTriggerCharacters: false,
              acceptSuggestionOnEnter: "off",
              tabCompletion: "off",
              wordBasedSuggestions: false,
            }}
          />
        </div>
        <div className="overflow-y-scroll flex flex-col bg-white">
          <ul className="flex gap-4 border-b">
            <li className="font-semibold  cursor-pointer px-2 py-2 bg-neutral-300">
              TestCases
            </li>
            <li className="font-semibold  cursor-pointer px-2 py-2 ">
              TestResult
            </li>
            <li className="font-semibold  cursor-pointer px-2 py-2 ">OutPut</li>
          </ul>
          <div className="p-2">
            {data?.output?.stdout && (
              <h1 className="bg-opacity-30 rounded-xl bg-green-600 p-2 text-green-800">
                {data?.output?.stdout.split("\n").map((ele, ind) => (
                  <h1 key={ind}>{ele}</h1>
                ))}
              </h1>
            )}
            {data?.output?.stderr && (
              <h1 className="bg-opacity-30 rounded-xl bg-red-600 p-2 text-red-800">
                {data?.output?.stderr.split("\n").map((ele, ind) => (
                  <h1 key={ind}>{ele}</h1>
                ))}
              </h1>
            )}
          </div>
        </div>
      </Split>
      <div className="border-t h-fit">
        <div className="flex justify-between items-center p-1">
          <button
            className="flex bg-neutral-200 gap-3 rounded-lg px-4 py-1 items-center"
            onClick={handleConsoleExpand}
          >
            <h1 className="font-semibold"> console</h1>
            <BiSolidUpArrow />
          </button>
          <div className="flex flex-row-reverse gap-4 text-white font-semibold">
            <button
              className="px-4 py-1 bg-green-500 rounded-lg"
              onClick={handleRun}
            >
              {loading ? "Loading..." : "Run"}
            </button>
            <button className="px-4 py-1 bg-gray-500 rounded-lg">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorCode;
