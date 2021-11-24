import React, {Fragment} from "react";

function Hola() {
    let saludo= "Hola que tal,como te va"
  return (
        <Fragment>
        <h1>Primer componente hola {saludo}</h1>
        </Fragment>   
    
  );
}

export default Hola;