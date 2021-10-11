import React from "react";

export default function About(props) {
  return (
    <div className={`container bg-${props.darkMode==='dark'?'dark':'white'} text-${props.darkMode==='light'?'dark':'light'}`} >
      <h1>About us</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, minima
      rerum? Repudiandae optio soluta, commodi corrupti reprehenderit fugit
      dolorum animi recusandae voluptatum. Laudantium non doloribus rerum
      commodi nihil, rem unde minus soluta vel voluptate. Veritatis harum
      accusamus id quod voluptas tenetur odit dolore in non perferendis. Qui
      facilis voluptates ipsa.
    </div>
  );
}
