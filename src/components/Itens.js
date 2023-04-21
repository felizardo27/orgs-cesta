import React from "react";
import Texto from './Texto.js'
import { Image, StyleSheet, View } from "react-native";

export default function Itens({ titulo, lista }) {
    return (
        <>
            <Texto style={styles.titulo}>{ titulo }</Texto>
            { lista.map(({ nome, imagem }) => {
                return <View key={nome} style={styles.itemView}>
                            <Image source={imagem} style={styles.itemImagem}/>
                            <Texto style={styles.itemNome}>{ nome }</Texto>
                        </View>
                
            }) }
        </>
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
    itemView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        paddingVertical: 16,
    },
    itemImagem: {
        width: 46,
        height: 46,
        borderRadius: 5,
    },
    itemNome: {
        color: '#464646',
        fontSize: 16,
        lineHeight: 26,
    }
})