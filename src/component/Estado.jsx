import React,{Fragment, useState} from "react";

const Estado = ()=> {
    const [numero,setNumero] = useState(["luis","manuel","juan","miguel","jesus","camilo"]);
    const [i,setI] = useState(3);

    const Aumentar = ()=> {
        if (i < numero.length){
            setI(i+1);
        }else{
            setI(i-1);
        }
        //setNumero(numero[i]);
           desplegar();
           return
    }
    const Reducir = ()=>{
        if (i >= 0 && i < numero.length){
            setI(i-1);
        }else if ( i < 0){ 
            setI(i+1);
        }
        //setNumero(numero[i]);
        desplegar();
        return
    }
    validar();
    function desplegar(){
        console.log(`${numero[i]}`)
    }
    function validar(){
        if (i == numero.length){
            setI(i - 1);
        }
        if (i < 0){
            setI(i + 1);
        }
    }
    return (
        <Fragment>
            <h2> Cantidad del contador:{numero[i]}</h2>
            <button onClick={Aumentar}>Aumentar</button>
            <button onClick={Reducir}>Reducir</button>
        </Fragment>    

    )
}
export default Estado;