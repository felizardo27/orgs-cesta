import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

import Topo from './components/Topo'
import Detalhes from './components/Detalhes'
import Itens from '../../components/Itens'


export default function Cesta({ topo, detalhes, itens }){
    return(
        <ScrollView>
            <Topo {...topo} />
            <View style={styles.cestaView}>
                <Detalhes {...detalhes} />
                <Itens {...itens} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    cestaView: {
        paddingVertical: 8,
        paddingHorizontal: 16
    }
})