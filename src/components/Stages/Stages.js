import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Stages.scss";
import Chair from "../Chair/Chair";

function Stages() {
   const [chairs, setChairs] = useState([]);

   useEffect(() => {
      axios.get("./chairs.json").then((response) => setChairs(response.data));
   }, []);

   return (
      <div className="container">
         <section className="section-A">
            {chairs
               .filter((chair) => chair.section === "A")
               .map((chair) => (
                  <Chair chairInfo={chair} key={chair.number} />
               ))}
         </section>
         <section className="section-B">
            {chairs
               .filter((chair) => chair.section === "B")
               .map((chair) => (
                  <Chair chairInfo={chair} key={chair.number} />
               ))}
         </section>
         <section className="section-C">
            {chairs
               .filter((chair) => chair.section === "C")
               .map((chair) => (
                  <Chair chairInfo={chair} key={chair.number} />
               ))}
         </section>
         <section className="section-D">
            {chairs
               .filter((chair) => chair.section === "D")
               .map((chair) => (
                  <Chair chairInfo={chair} key={chair.number} />
               ))}
         </section>
      </div>
   );
}

export default Stages;
