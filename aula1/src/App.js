/* Sempre que utilizar um componente JSX é necessário
   Realizar o import.
   
   As tags JSX permite escrever componentes parecidos como código
   java script que será convertido para código nativo de cada plataforma.
*/
import React from 'react'
import { View, StyleSheet } from 'react-native'
import{ Text } from 'react-native'
import Titulo from './components/Titulo'
import Contador from './components/Contador'
//import Botao from './components/Botao'
//import Primeiro from './components/Primeiro'
//import Estilo from './components/estilo'
//import CompPadrao, { Comp1, Comp2 } from './components/Multi'
//import MinMax from './components/MinMax'
//import Aleatorio from './components/Aleatorio'

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
        <View style={style.App}>  

               <Contador inicial={100} passo={13}></Contador> 
               <Contador></Contador>
                {/*
                <Botao/>
                <Titulo principal="Cadastro"
                        segundario="Tela de Cadastro de Produto "/>
                <Aleatorio min={1} maximo={60}/>
                <Aleatorio min={1} maximo={60}/>
                <Aleatorio min={1} maximo={60}/>
                <Aleatorio min={1} maximo={60}/>
                <Aleatorio min={1} maximo={60}/>
                <MinMax min={3} max={20}/>
                <MinMax min={10} max={24}/>
                <CompPadrao/>
                <Comp1/>
                <Comp2/>
                <Primeiro/> */}
        </View>
)

const style = StyleSheet.create({
    App:{        
        flexGrow: 1,
        justifyContent:"center",
        alignItems:"center",
        padding: 20
    } 
})
//exemplo
//export default () => <Text>Primeiro Componente!!!!!</Text>
