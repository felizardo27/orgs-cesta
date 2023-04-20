import React from 'react'
import { StyleSheet, View } from 'react-native'

import Topo from './components/Topo'
import Detalhes from './components/Detalhes'


export default function Cesta(){
    return(
        <>
            <Topo />
            <View style={styles.cestaView}>
                <Detalhes />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    cestaView: {
        paddingVertical: 8,
        paddingHorizontal: 16
    }
})