import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BlockUser } from "../../graphQL/Mutations";

const usePreventTabSwitch = (contestId, warning, setWarning) => {
  console.log("contestId: ", contestId);
  const navigate = useNavigate();
  const [blockUser] = useMutation(BlockUser);
  const handleBlur = () => {
    console.log("before");
    if (!warning) {
      console.log("after");
      const res = blockUser({ variables: { contestId } });
      navigate("/contest/responseClosed");
    }
    alert(
      "You cannot switch tabs during the contest. If you try to switch one more time, your submission will be closed."
    );
    setWarning(warning - 1);
    setTimeout(() => {
      window.focus();
    }, 0);
  };

  const handleVisibilityChange = () => {
    if (document.visibilityState === "hidden") {
      if (!warning) {
        const res = blockUser({ variables: { contestId } });
        navigate("/contest/responseClosed");
      }
      alert(
        "You cannot switch tabs during the contest.if we find you switching tab once again we will stop your response!"
      );
      setWarning(false);

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
};

export default usePreventTabSwitch;
