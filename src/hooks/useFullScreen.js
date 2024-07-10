import React, { useState } from "react";

const FullscreenButton = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        // alert(
        //   `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        // );
      });
    } else {
      document.exitFullscreen();
    }
  };

  // Listen for fullscreen change events to update the state
  const handleFullscreenChange = () => {
    setIsFullscreen(!!document.fullscreenElement);
  };

  React.useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    toggleFullscreen();
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return { toggleFullscreen,isFullscreen };
};

export default FullscreenButton;
