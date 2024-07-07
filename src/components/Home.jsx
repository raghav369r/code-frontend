import React from "react";

const Home = () => {
  return (
    <div className="h-[90dvh] flex flex-col relative">
      <div className="text-2xl text-red-500 h-full flex justify-between items-center">
        <img src="/images/langLeft.png" className="w-1/5 object-contain " />
        <img
          src="/images/learn-animation.gif"
          className="w-1/5 object-contain shadow-lg"
        />
        <img src="/images/langRight.png" className="w-1/5 object-contain" />
      </div>
      <div
        className="absolute bottom-0 w-full h-10 bg-gradient-to-r from-sky-400 to-blue-700"
        style={{ borderRadius: "49% 50% 10% 10% / 58% 60% 0% 3% " }}
      />
    </div>
  );
};

export default Home;
