import React, { useRef, useState } from "react";
import useCodePersistance from "../hooks/useCodePersistance";
import { Editor } from "@monaco-editor/react";
import Split from "react-split";
import useRunCode from "../hooks/useRunCode";

const PlayGround = () => {
  const editorRef = useRef(null);

  const { code, setCode, language, setLanguage } =
    useCodePersistance(editorRef);
  const [run, data, error, loading] = useRunCode();
  const [stdin, setStdin] = useState("");
  const handleRun = async () => {
    const res = await run({ variables: { input: { language, code, stdin } } });
  };
  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
  };
  const handleContent = (e) => {
    setCode(e);
  };
  const handleLan = (e) => {
    console.log(e.target.value);
    setLanguage(e.target.value);
  };
  return (
    <div className="h-[90dvh] m-2 border rounded">
      <Split
        className="h-full flex"
        direction="horizontal"
        gutterSize={8}
        minSize={30}
        sizes={[50, 50]}
      >
        <div className=" bg-white h-full flex flex-col">
          <div className="sticky top-0 flex justify-around h-10 items-center">
            <select
              className="select select-bordered select-sm"
              value={language}
              onChange={handleLan}
            >
              <option>cpp</option>
              <option>c</option>
              <option>java</option>
              <option>python</option>
              <option>javascript</option>
              <option>ruby</option>
              <option>r</option>
            </select>
            <button
              className="left-10 bottom-0 px-4 py-1.5 rounded bg-green-500"
              onClick={handleRun}
            >
              {loading ? "Loading.." : "Run"}
            </button>
          </div>

          <Editor
            className="z-0"
            height={"90%"}
            language={language}
            value={code}
            onMount={handleEditorDidMount}
            onChange={handleContent}
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
        <Split
          className="h-full overflow-y-hidden flex flex-col"
          direction="vertical"
          gutterSize={8}
          minSize={20}
          sizes={[50, 50]}
        >
          <div className=" bg-white rounded border flex flex-col">
            <h1 className="text-center text-black">Input</h1>
            <div className="h-full">
              <Editor
                className="z-0"
                height={"100%"}
                value={stdin}
                onChange={(e) => setStdin(e)}
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
          </div>
          <div className="border rounded flex flex-col">
            <h1 className="sticky top-0 text-black text-center py-2 border-b">
              Output
            </h1>
            <pre className="text-black p-1 overflow-y-scroll h-full w-full">
              {data?.output?.stdout}
              {data?.output?.stderr}
              {data?.output?.error}
            </pre>
          </div>
        </Split>
      </Split>
    </div>
  );
};

export default PlayGround;
