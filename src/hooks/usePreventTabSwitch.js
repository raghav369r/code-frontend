import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const usePreventTabSwitch = () => {
  const [rem, setRem] = useState(2);
  const navigate = useNavigate();
  useEffect(() => {
    const handleBlur = () => {
      setRem((prevRem) => {
        const newRem = prevRem - 1;
        if (newRem <= 0) {
          navigate("/contest/responseClosed");
        }
        return newRem;
      });
      alert(
        "You cannot switch tabs during the contest. If you try to switch one more time, your submission will be closed."
      );
      setTimeout(() => {
        window.focus();
      }, 0);
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        alert(
          "You cannot switch tabs during the contest.if we find you switching tab once again we will stop your response!"
        );
        setTimeout(() => {
          window.focus();
        }, 0);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleBlur);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("blur", handleBlur);
    };
  }, []);

  return rem;
};

export default usePreventTabSwitch;
