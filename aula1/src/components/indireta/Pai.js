import React, { useState } from 'react'
import Filho from './Filho'
import Estilo from '../estilo'
import { Text } from 'react-native'

 export default props =>{
    const [num, setNum] = useState(0)
    const [texto, setTexto] = useState('')

    function exbir(numero, texto){
        setNum(numero)
        setTexto(texto)
    } 

     return (
         <>
          <Text style={Estilo.fontG}>{texto}{num}</Text>
          <Filho 
                min={1} 
                max={60} 
                funcao={exbir}
         />

         </>
 )
}