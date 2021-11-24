import React,{Fragment, useState} from "react";

const Listado = ()=> {
    const [numeros,setNumeros]=useState([1,2,2,4,5,6]); //numeros es la constante para acceder 
                             //al array,setNumeros es la funcion para modificar ese array

    return ( 
        <Fragment>
            <ul>
                {
                    numeros.map ((item,index)=>
                    <li key={index}>
                        {item}  ===  {index}
                    </li>
                    )
                }
            </ul>
        </Fragment>

    )
}

export default Listado;