import React from 'react'
import { Image, StyleSheet, Dimensions, Text, View } from 'react-native'

import topo from '../../assets/topo.png'
import logo from '../../assets/logo.png'
import Texto from '../components/Texto'

const width = Dimensions.get('screen').width

export default function Cesta(){
    return(
        <>
            <Image 
                source={topo} 
                style={styles.topo}
            />
            <Texto style={styles.titulo}>Detalhes da cesta</Texto>

            <View style={styles.cestaView}>
                <Texto style={styles.nome}>Cesta de verduras</Texto>
                <View style={styles.fazendaView}>
                    <Image source={logo} style={styles.imagemFazenda}/>
                    <Texto style={styles.nomeFazenda}>Jenny Jack Farm</Texto>
                </View>
                <Texto style={styles.descricao}>
                    Uma cesta com produtos selecionados cuidadosamente da fazendo direto para a sua cozinha
                </Texto>
                <Texto style={styles.preco}>R$ 40,00</Texto>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    topo: {
        width: '100%',
        height: 578 / 768 * width
    },
    titulo: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 18,
        lineHeight: 26,
        color: 'white',
        fontWeight: 'bold',
        padding: 16
    },
    cestaView: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    nome: {
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
    },
    fazendaView: {
        flexDirection: 'row',
        paddingVertical: 12
    },
    imagemFazenda: {
        width: 32,
        height: 32
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        fontFamily: 'MontserratRegular'
    },
    descricao: {
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: '#2A9F85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }
})