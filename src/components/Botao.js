import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Texto from "./Texto";

export default function Botao({ children }){
    return (
        <TouchableOpacity 
            style={styles.botao}
        >
            <Texto style={styles.botaoTexto}>
                { children }
            </Texto>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    botao: {
        marginTop: 16,
        backgroundColor: '#2A9F85',
        paddingVertical: 16,
        borderRadius: 8,
    },
    botaoTexto: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold'
    },
})