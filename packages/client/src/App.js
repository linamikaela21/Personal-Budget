import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./Redux/actions/userActions";
import { RouterWeb } from "./RouterWeb";

export const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user);

  useEffect(() => {
    if(currentUser.length > 1) {
      dispatch(isUserLoggedIn());
    }
  }, [dispatch, currentUser]);

  return (
    <div
      data-testid="test-id-app"
      styles={{ width: "100vw", height: "100vh" }}
    >
      <RouterWeb />
    </div>
  );
};
