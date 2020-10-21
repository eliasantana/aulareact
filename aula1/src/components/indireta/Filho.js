import React from 'react'
import { Button } from 'react-native'
import Estilo from '../estilo'

 export default props =>{
     function gerarNumeroAleatorio(min, max){

        const fator = max - min + 1;
        return parseInt(Math.random()*fator)+min
     }
     return (
            <Button 
                    title="Executar"
                    onPress={function(){
                    const n =  gerarNumeroAleatorio(props.min,props.max)    
                    props.funcao(n," O Valor é ")
                    }}       
            />
        
 )
}