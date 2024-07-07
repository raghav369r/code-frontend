import { useEffect } from "react";

const useFullScreen = (appRef) => {
  useEffect(() => {
    if (!appRef.current) return;

    const enterFullScreen = () => {
      if (appRef.current.requestFullscreen) {
        appRef.current.requestFullscreen();
      } else if (appRef.current.mozRequestFullScreen) {
        appRef.current.mozRequestFullScreen();
      } else if (appRef.current.webkitRequestFullscreen) {
        appRef.current.webkitRequestFullscreen();
      } else if (appRef.current.msRequestFullscreen) {
        appRef.current.msRequestFullscreen();
      }
    };

    const exitFullScreen = () => {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    };

    enterFullScreen();

    // Optional: Handle fullscreen change event
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        console.log("closing fullscreen");
        // enterFullScreen();
        exitFullScreen();
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [appRef]);
  return {};
};

export default useFullScreen;
