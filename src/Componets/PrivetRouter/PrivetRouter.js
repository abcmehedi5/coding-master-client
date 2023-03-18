import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { userContext } from "../../App";
import { useContext } from "react";
const PrivetRouter = ({ children }) => {
  const location = useLocation();
  const [loggedInUser, setLoggedInUsr] = useContext(userContext);
  return (
    <>
      {loggedInUser.email ? (
        children
      ) : (
        <Navigate to="/student/login" replace state={{ from: location }} />
      )}
    </>
  );
};

export default PrivetRouter;
