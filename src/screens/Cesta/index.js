import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import Topo from './components/Topo'
import Detalhes from './components/Detalhes'
import Item from '../../components/Item'
import Texto from '../../components/Texto'

export default function Cesta({ topo, detalhes, itens }){
    return(
        // <ScrollView>
        <View>
            <FlatList 
                data={itens.lista}
                renderItem={Item}
                keyExtractor={({ nome }) => nome}
                ListHeaderComponent={() => (
                    <>
                        <Topo {...topo} />
                        <View style={styles.cestaView}>
                            <Detalhes {...detalhes} />
                            <Texto style={styles.titulo}>{ itens.titulo }</Texto>
                        </View>
                    </>
                )}
            />

            
        </View>
        //</ScrollView>
    )
}

const styles = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    cestaView: {
        paddingVertical: 8,
        paddingHorizontal: 16
    }
})