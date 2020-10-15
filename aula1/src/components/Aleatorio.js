import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default props => {
const {min, maximo} = props
const delta = maximo-min+1
const aleatorio = parseInt(Math.random() * delta) + props.min

return (
      <Text style={Estilo.fontG}>
          Valor aleatorio é {aleatorio}
      </Text>

)

}