import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default function Texto({ children, style }) {

    let stylesDefault = styles.texto
    if (style?.fontWeight === 'bold') {
        stylesDefault = styles.textoBold;
    }

  return (
    <Text style={[style, stylesDefault]}>{ children }</Text>
  )
}

const styles = StyleSheet.create({
    texto: {
        fontFamily: 'MontserratRegular',
        fontWeight: 'normal',
    },
    textoBold: {
        fontFamily: 'MontserratBold',
        fontWeight: 'normal',
    }
})

