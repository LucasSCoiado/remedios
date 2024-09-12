import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";

export default function Remedios(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Pagina de Remédios</Text>
            <StatusBar style="auto" /> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7B0000',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 50
      },
      title: {
        color: "#fff",
        fontSize: 20,
        marginTop: 30
      },
});