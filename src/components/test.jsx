import React, { useRef } from "react";
import Split from "react-split";

const Test = () => {
  const splitReff = useRef(null);
  return (
    <Split
    className="flex"
      sizes={[50, 75]}
      minSize={100}
      expandToMin={false}
      gutterSize={10}
      gutterAlign="center"
      snapOffset={30}
      dragInterval={1}
      direction="horizontal"
      cursor="col-resize"
    >
      <div className="bg-red-400 h-[30vh] w-full"></div>
      <div className="bg-yellow-400 h-[30vh] w-full"></div>
    </Split>
  );
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
};

export default Test;
