import React, { useState } from 'react'
import { Text, Button } from 'react-native'
import Estilo from './estilo'

export default ({inicial=0, passo=1}) =>{
    /******************************** */
    // useState (hooks) altera um stado de um componente
    // o React não atualiza a view para interagir com ela 
    // é preciso utilizar o useState para criar ou modificar um estado.
    // o useStare informa a interface que a mesma deverá ser atualizada
    // podemos utilizar vários useState para gerenciar outros estados
    /******************************** */
    //let numero = props.inicial
    const [numero,setNumero]  = useState(inicial)
    const inc = () =>{
        setNumero(numero+passo)
        
    }
    const dec = () =>{

        setNumero(numero-passo)
    }


    return(
    <>
        <Text style={Estilo.fontG}>{numero}</Text>
        <Button title="+" onPress={inc}/>
        <Button title="-" onPress={dec}/>

    </>


    )

}