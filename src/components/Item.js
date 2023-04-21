import React from "react";
import Texto from './Texto.js'
import { FlatList, Image, StyleSheet, View } from "react-native";

export default function Item({item: {nome, imagem}}) {
    return (
        <View style={styles.itemView}>
            <Image source={imagem} style={styles.itemImagem}/>
            <Texto style={styles.itemNome}>{ nome }</Texto>
        </View>
    )
}

const styles = StyleSheet.create({
    itemView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        paddingVertical: 16,
        marginHorizontal: 16,
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