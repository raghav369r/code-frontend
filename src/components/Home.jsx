import React from "react";

const Home = () => {
  return (
    <div className="h-[100dvh] flex flex-col">
      <div className="text-2xl text-red-500 h-[60vh] flex justify-between">
        <img src="/images/langLeft.png" className="w-1/5 object-contain" />
        <img
          src="/images/learn-animation.gif"
          className="w-1/5 object-contain"
        />
        <img src="/images/langRight.png" className="w-1/5 object-contain" />
      </div>
      <div className="h-full w-full overflow-hidden">
        {/* <div
          className="h-full bg-gradient-to-r from-sky-950 to-sky-600"
          style={{ borderRadius: "49% 50% 10% 10% / 58% 60% 0% 3% " }}
        /> */}
      </div>
    </div>
  );
};

export default Home;
