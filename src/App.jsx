import React from "react";
import './App.css';
import Estado from "./component/Estado";
import Formulario from "./component/formulario"
 import Temperatura from "./component/temperatura"
import Listado from "./component/listado"
import Contador from "./component/Contador"
import Hola from "./component/Hola"

function App() {
  return (
    <div className="p-3 mb-2 bg-secondary text-white">
      <div className="App mt-4">
          <h1>Titulo de nuestro primer proyecto</h1>
         {/* <Estado/>*/}
         <Formulario></Formulario>
       </div>
            <div className="App mt-4">
              <h1>Pagina  en diseño</h1>
              <p>Mensaje número 2</p>
              <p>Mensaje número 2</p>
              <p>Mensaje número 3</p>
              <p>Mensaje número 1</p>
              <p>Mensaje número 2</p>
              <p>Mensaje número 3</p>
              <p>Mensaje número 1</p>
            </div>
          <footer>
          <div className="stats">
            <div className="Retweets">
              <strong>107</strong> Retweets
            </div>
            <div className="likes">
              <strong>431</strong> Likes
            </div>
          </div>
          <div className="cta">
            <button className ="btn btn-info btn-block mb-3">Share</button>
            <button className ="btn btn-info btn-block mb-3">Retweet</button>
            <button className ="btn btn-info btn-block mb-3">Like</button>
          </div>
        </footer>
    </div>
  );
}

export default App;
