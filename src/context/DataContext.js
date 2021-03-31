import { createContext, useReducer } from "react";

export const DataContext = createContext();

const ACTION = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  NEWTASK: "NEWTASK",
  EDITTASK: "EDITTASK",
  COMPLETE: "COMPLETE",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.NEWTASK:
      return { ...state, state: action.payload };
  }
};

export const DataContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { task: [] });
  return <DataContext.Provider>{props.children}</DataContext.Provider>;
};
