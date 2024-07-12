import React, { useEffect, useRef, useState } from "react";
import { IoMdExpand } from "react-icons/io";
import { FaTriangleExclamation } from "react-icons/fa6";
import useFull from "../hooks/useFull";
import useTab from "../hooks/useTab";
import Forbidden from "./errorPages/Forbidden";

const Test = () => {
  const [warnings, setWarnings] = useState(5);
  const { toggleFullscreen, isFullscreen } = useFull();
  const { tabSwitchWarning, setTabSwitchWarning } = useTab(
    warnings,
    setWarnings
  );
  return (
    <div className="bg-neutral-200 h-screen p-2 bg-gradient-to-r from-orange-500 to-yellow-500">
      {!isFullscreen && <FullScreenPopUp toggleFullscreen={toggleFullscreen} />}
      {tabSwitchWarning && (
        <TabSwitchPopUp setTabSwitchWarning={setTabSwitchWarning} />
      )}
    </div>
  );
};

export default Test;

const TabSwitchPopUp = ({ setTabSwitchWarning }) => {
  return (
    <div className="fixed z-20 top-0 left-0 flex justify-center items-center w-screen h-[100dvh]">
      <div className="bg-white flex flex-col rounded shadow-md p-4 w-4/5 md:w-[500px] backdrop:blur-lg">
        <div className="flex gap-2 text-black items-center pb-2 border-b">
          <FaTriangleExclamation className="text-lg" />
          <h1 className="text-lg">Attention! Tab Switch Detected!</h1>
        </div>
        <p className="text-black py-2">
          Switching tabs between the conetst is not allowed. Doing so may lead
          to disQualification.Please complete the examp within the given time
          limit and refrain from switching tabs.
        </p>
        <button
          onClick={() => setTabSwitchWarning(false)}
          className="bg-red-600 px-4 py-1.5 w-fit mx-auto"
        >
          Sorry, I will not do this again!
        </button>
      </div>
    </div>
  );
};

const FullScreenPopUp = ({ toggleFullscreen }) => {
  return (
    <div className="fixed top-0 left-0 flex justify-center items-center w-screen h-[100dvh]">
      <div className="bg-white flex flex-col rounded shadow-md p-4 w-4/5 md:w-[500px] backdrop:blur-lg">
        <div className="flex gap-2 text-black items-center pb-2 border-b">
          <IoMdExpand className="text-lg" />
          <h1 className="text-lg">Full Screen Mode Required</h1>
        </div>
        <p className="text-black py-2">
          In order to procedd with the contest, it is necessary to enable
          fullscreen mode.Click 'confirm' to enable full screen mode
        </p>
        <button
          onClick={toggleFullscreen}
          className="bg-blue-700 px-4 py-1.5 w-fit mx-auto"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

//   <Split
//   className="flex"
//     sizes={[50, 75]}
//     minSize={100}
//     expandToMin={false}
//     gutterSize={10}
//     gutterAlign="center"
//     snapOffset={30}
//     dragInterval={1}
//     direction="horizontal"
//     cursor="col-resize"
//   >
//     <div className="bg-red-400 h-[30vh] w-full"></div>
//     <div className="bg-yellow-400 h-[30vh] w-full"></div>
//   </Split>
// <div className="h-[100dvh] bg-black flex flex-col">
//   <Split
//     ref={splitRef}
//     className="h-full overflow-y-hidden flex flex-col"
//     direction="vertical"
//     gutterSize={5}
//     minSize={0}
//     sizes={[100, 0]}
//   >
//     <div className="h-full bg-red-300 w-full"></div>
//     <div className="h-fit bg-yellow-200 w-full"></div>
//   </Split>
//     <div className="h-fit text-black">console</div>
// </div>
// );
