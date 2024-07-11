// import { useMutation } from "@apollo/client";
// import { useContext, useEffect, useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import { BlockUser } from "../../graphQL/Mutations";
// import { UserContext } from "../context/User";

// const usePreventTabSwitch = (contestId, warning, setWarning) => {
//   const { isInteractingWithRecaptcha } = useContext(UserContext);
//   const [blockUser] = useMutation(BlockUser);

//   const handleReloadNavigation = () => {
//     window.location.reload();
//   };

//   const handleBlur = useCallback(async () => {
//     if (!warning && !isInteractingWithRecaptcha) {
//       await blockUser({ variables: { contestId } });
//       handleReloadNavigation("/contest/responseClosed");
//     } else {
//       if (!isInteractingWithRecaptcha) {
//         alert(
//           "You cannot switch tabs during the contest. If you try to switch one more time, your submission will be closed."
//         );
//         setWarning((prevWarning) => prevWarning - 1);
//       }
//     }
//   }, [
//     blockUser,
//     contestId,
//     handleReloadNavigation,
//     isInteractingWithRecaptcha,
//     setWarning,
//     warning,
//   ]);

//   const handleVisibilityChange = useCallback(async () => {
//     if (document.visibilityState === "hidden") {
//       if (!warning) {
//         await blockUser({ variables: { contestId } });
//         handleReloadNavigation("/contest/responseClosed");
//       } else {
//         alert(
//           "You cannot switch tabs during the contest. If we find you switching tabs once again, we will stop your response!"
//         );
//         setWarning((prevWarning) => prevWarning - 1);
//       }
//     }
//   }, [blockUser, contestId, handleReloadNavigation, warning, setWarning]);

//   useEffect(() => {
//     document.addEventListener("visibilitychange", handleVisibilityChange);
//     window.addEventListener("blur", handleBlur);

//     return () => {
//       document.removeEventListener("visibilitychange", handleVisibilityChange);
//       window.removeEventListener("blur", handleBlur);
//     };
//   }, [handleBlur, handleVisibilityChange]);

//   return null;
// };

// export default usePreventTabSwitch;

import { useMutation } from "@apollo/client";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BlockUser } from "../../graphQL/Mutations";
import { UserContext } from "../context/User";

const usePreventTabSwitch = (contestId, warning, setWarning) => {
  // console.log("contestId: ", contestId);
  const { isInteractingWithRecaptcha } = useContext(UserContext);
  const [blockUser] = useMutation(BlockUser);
  const handleBlur = () => {
    if (!warning && !isInteractingWithRecaptcha) {
      const res = blockUser({ variables: { contestId } });
      handleReloadNavigation("/contest/responseClosed");
    } else {
      if (!isInteractingWithRecaptcha) {
        alert(
          "You cannot switch tabs during the contest. If you try to switch one more time, your submission will be closed."
        );
        setWarning(warning - 1);
      }
    }
  };

  const handleVisibilityChange = () => {
    if (document.visibilityState === "hidden") {
      if (!warning) {
        const res = blockUser({ variables: { contestId } });
        handleReloadNavigation("/contest/responseClosed");
      } else {
        alert(
          "You cannot switch tabs during the contest.if we find you switching tab once again we will stop your response!"
        );
        setWarning(warning - 1);
      }
    }
  };
  useEffect(() => {
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleBlur);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("blur", handleBlur);
    };
  }, [handleVisibilityChange, handleBlur, warning]);
};

export default usePreventTabSwitch;
const handleReloadNavigation = (path) => {
  window.location.reload();
  // window.location.href = path;
};
