/* Sempre que utilizar um componente JSX é necessário
   Realizar o import.
   
   As tags JSX permite escrever componentes parecidos como código
   java script que será convertido para código nativo de cada plataforma.
*/
import React from 'react'
import{ Text } from 'react-native'
import Primeiro from './components/Primeiro'
import { View } from 'react-native'
// As Functions Expressions são funções anônimas que podem ser  utlizadas para facilidar 
/*
//Exemplo de uma function comum
function App(){ // Esta função pode ter qualquer nome
    //constante
    //const jsx = <Text>Primeiro Componente</Text>

    return  <Text>Primeiro Componente</Text>
}*/

// Exemplo de uma função anônima ou (ArrowFunction)
/*
export default function (){
    return  <Text>Primeiro Componente!</Text>
}*/

// Simplificação de uma ArrowFunction 

export default () => (
        <View>
                <Primeiro/>
        </View>
)

//exemplo
//export default () => <Text>Primeiro Componente!!!!!</Text>