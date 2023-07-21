import React, { useEffect, useReducer } from "react";
import "./Chair.scss";

const initState = {
   number: 0,
   price: 0,
   state: "",
   clickCount: 0,
};

const reducer = (state, action) => {
   switch (action.clickCount) {
      case -1:
         return { ...state, ...action.data };

      case 0:
         return {
            ...state,
            clickCount: action.clickCount + 1,
            state: "selected",
         };
      case 1:
         return {
            ...state,
            clickCount: action.clickCount + 1,
            state: "reserving",
         };
      case 2:
         return {
            ...state,
            clickCount: action.clickCount + 1,
            state: "reserved",
         };
      default:
         return state;
   }
};

function Chair({ chairInfo, setCount, setSum }) {
   const [chair, dispatch] = useReducer(reducer, initState);

   useEffect(() => {
      dispatch({ clickCount: -1, data: chairInfo });
   }, []);

   return (
      <>
         <div
            className={`chair ${chair.state}`}
            onClick={() => {
               if (chair.clickCount < 3) {
                  dispatch({ clickCount: chair.clickCount, data: chairInfo });
               } else {
                  alert("این صندلی قبلا رزرو شده است!");
               }

               if (chair.clickCount === 2) {
                  setCount((prevCount) => prevCount + 1);
                  setSum((prevSum) => prevSum + chair.price);
               }
            }}
            title={chair.price}
         >
            {chair.number}
         </div>
      </>
   );
}

export default Chair;
