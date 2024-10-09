import { Editor } from "@monaco-editor/react";
import React from "react";

const AddTestCases = ({ setFormData, formData }) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-center">AddTestCases</h1>
      <pre className="text-sm py-3">
        {`Use below format for text cases, use \'\\n\' for new line inside output
first line should have input
second line should have output 
and so on `}
      </pre>
      <p>3</p>
      <p>*\n**\n***</p>
      <p>4</p>
      <p>*\n**\n***\n****</p>
      <Editor
        className="h-[50vh] border-2 rounded"
        value={formData.testcases}
        onChange={(e) => setFormData((prev) => ({ ...prev, testcases: e }))}
        language="text"
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
      {/* <textarea
        name=""
        placeholder="enter multiple test cases"
        rows={12}
        className="w-full p-2 bg-white border rounded focus:border-blue-500 focus:outline-0"
        value={formData.testcases}
        onChange={(e) =>
          setFormData((prev) => {
            let updated = { ...prev };
            updated.testcases = e.target.value;
            return updated;

          })
        }
      /> */}
    </div>
  );
};

export default AddTestCases;
