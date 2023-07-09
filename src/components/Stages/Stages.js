import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Stages.scss";
import Chair from "../Chair/Chair";

function Stages() {
   const [chairs, setChairs] = useState([]);
   const [count, setCount] = useState(0);
   const [sum, setSum] = useState(0);

   useEffect(() => {
      axios.get("./chairs.json").then((response) => setChairs(response.data));
   }, []);

   return (
      <>
         <div className="overview">
            <div className="count">Count: {count}</div>
            <div className="sum">Sum: {sum}</div>
         </div>
         <div className="container">
            <section className="section-A">
               {chairs
                  .filter((chair) => chair.section === "A")
                  .map((chair) => (
                     <Chair
                        chairInfo={chair}
                        setCount={setCount}
                        setSum={setSum}
                        key={chair.number}
                     />
                  ))}
            </section>
            <section className="section-B">
               {chairs
                  .filter((chair) => chair.section === "B")
                  .map((chair) => (
                     <Chair
                        chairInfo={chair}
                        setCount={setCount}
                        setSum={setSum}
                        key={chair.number}
                     />
                  ))}
            </section>
            <section className="section-C">
               {chairs
                  .filter((chair) => chair.section === "C")
                  .map((chair) => (
                     <Chair
                        chairInfo={chair}
                        setCount={setCount}
                        setSum={setSum}
                        key={chair.number}
                     />
                  ))}
            </section>
            <section className="section-D">
               {chairs
                  .filter((chair) => chair.section === "D")
                  .map((chair) => (
                     <Chair
                        chairInfo={chair}
                        setCount={setCount}
                        setSum={setSum}
                        key={chair.number}
                     />
                  ))}
            </section>
         </div>
      </>
   );
}

export default Stages;
