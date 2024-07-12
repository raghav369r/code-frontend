import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useTab = (warnings, setWarnings) => {
  const [tabSwitchWarning, setTabSwitchWarning] = useState(false);
  const navigate = useNavigate();
  const handleBlur = () => {
    if (!warnings) {
      navigate("/contest/responseClosed");
    } else {
      setTabSwitchWarning(true);
    }
    setWarnings((prev) => prev - 1);
    setTimeout(() => {
      window.focus();
    }, 0);
  };

  const handleVisibilityChange = () => {
    if (document.visibilityState === "hidden") {
      if (!warnings) {
        navigate("/contest/responseClosed");
      } else {
        setTabSwitchWarning(true);
      }
      setWarnings((prev) => prev - 1);

      setTimeout(() => {
        window.focus();
      }, 0);
    }
  };
  useEffect(() => {
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleBlur);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("blur", handleBlur);
    };
  }, [handleVisibilityChange, handleBlur]);
  return {
    tabSwitchWarning,
    setTabSwitchWarning,
  };
};

export default useTab;
