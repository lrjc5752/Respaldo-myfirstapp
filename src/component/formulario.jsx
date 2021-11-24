import React,{useState} from "react";

const Formulario = ()=> {
   
    const [nombre, setNombre]= useState("");
    const [edad,setEdad]=useState("");

    const validar= (evento)=>{
            evento.preventDefault() //para evitar que la pagina se recargue
            console.log("pulsando el boton submit")

            if (!nombre.trim()){
                    console.log("el nombre esta vacio");
                    return
            }
            if (!edad.trim()){
                console.log("la edad esta vacia");
                return
        }
    }
    return ( 
    <div>
        <form onSubmit={validar} className="form-group">
            <input
             placeholder="Introduce el Nombre"
             className="form-control mb-3" 
             type="text" 
            onChange={(e)=>{setNombre(e.target.value)}}
             />
            <input 
            placeholder="Introduce la Edad" 
            className="form-control mb-3" 
            type="text" 
            onChange={(e)=>{setEdad(e.target.value)}}
            />
            <input className="btn btn-danger btn-block mb-3" type="submit" />
        </form>
    </div>
    )
}

export default Formulario;