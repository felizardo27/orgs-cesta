import React from "react";
import Texto from "../../../components/Texto";
import { StyleSheet, View } from "react-native";
import logo from '../../../../assets/logo.png'
import { Image } from "react-native";

export default function Detalhes(){
    return(
        <>
            <Texto style={styles.nome}>Cesta de verduras</Texto>
                <View style={styles.fazendaView}>
                    <Image source={logo} style={styles.imagemFazenda}/>
                    <Texto style={styles.nomeFazenda}>Jenny Jack Farm</Texto>
                </View>
                <Texto style={styles.descricao}>
                    Uma cesta com produtos selecionados cuidadosamente da fazendo direto para a sua cozinha
                </Texto>
            <Texto style={styles.preco}>R$ 40,00</Texto>
        </>
    )
}

const styles = StyleSheet.create({
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