import React, { useEffect, useReducer } from "react";
import "./Chair.scss";

const initState = {
   chair: {},
   clickCount: 0,
};

const reducer = (state, action) => {
   switch (action.type) {
      case "success":
         return { ...state, chair: action.data };
      case "failed":
         return { ...state, errorMessage: action.error };
      default:
         return state;
   }
};

function Chair({ chairInfo }) {
   const [chairs, dispatch] = useReducer(reducer, initState);

   useEffect(() => {
      dispatch({ type: "success", data: chairInfo });
   }, []);

   return <div className={`chair`}>{chairs.chair.number}</div>;
}

export default Chair;
