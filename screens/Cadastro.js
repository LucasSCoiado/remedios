import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, ScrollView, View, Text, TextInput, TouchableOpacity } from "react-native";

export default function Cadastro({ navigation }) {
    const [nome, setNome] = useState('');
    const [marca, setMarca] = useState('');
    const [vol, setVol] = useState('');
    const [qtd, setQtd] = useState('');
    const [qtdDia, setQDia] = useState(0);

    function handleNomeChange(nome) {
        setNome(nome);
    }
    function handleMarcaChange(marca) {
        setMarca(marca);
    }
    function handleVolChange(vol) {
        setVol(vol);
    }
    function handleQtdChange(qtd) {
        setQtd(qtd);
    }
    function handleQtdChange(qtdDia) {
        setQtd(qtdDia);
    }

    function buttonSavePress() {
        console.log({ id: new Date().getTime(), nome, marca, vol, qtd, qtdDia });
        navigation.navigate("Menu");
    }

    return (

        <ScrollView >
            <View style={styles.container}>

                <Text style={styles.title}>Cadastro de Remédios</Text>
                <Text style={styles.text} >Nome</Text>
                <TextInput onChangeText={handleNomeChange} placeholder="Nome" style={styles.input} />
                <Text style={styles.text}>Marca</Text>
                <TextInput onChangeText={handleMarcaChange} placeholder="Marca" style={styles.input} />
                <Text style={styles.text}>Volume</Text>
                <TextInput onChangeText={handleVolChange} placeholder="Vol°" style={styles.input} />
                <Text style={styles.text}>Quantidade</Text>
                <TextInput onChangeText={handleQtdChange} placeholder="Quantidade" style={styles.input} />
                <Text style={styles.text} >Posologia</Text>
                <TextInput onChangeText={handleNomeChange} placeholder="Qtd por dia" style={styles.input} />
                <StatusBar style="auto" />
                <View style={styles.containerBotoes}>
                    <TouchableOpacity onPress={buttonSavePress} style={styles.btn}>
                        <Text>Salvar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text>Candelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7B0000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: "#fff",
        fontSize: 30,
        marginTop: 30
    },
    text: {
        color: "#fff",
        fontSize: 20,
        marginTop: 30,
    },
    containerItens: {

        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        width: '90%'
    },
    input: {
        height: 40,
        borderColor: '#EEAD2D',
        borderWidth: 1,
        width: '90%',
        backgroundColor: '#fff',
        color: 'black',
        textAlign: 'center',
        marginTop: 10,
        borderRadius: 10,
        height: 60
    },
    btn: {
        marginTop: 10,
        height: 60,
        backgroundColor: '#EEAD2D',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 20,
        shadowOpacity: 20,
        shadowColor: '#fff',
        marginTop: 15,
        marginLeft:10,
        width:140
    },    
    containerBotoes:{
        flex:1,
        flexDirection:'row',
        width:'80%',
        marginTop:10,
        marginBottom:10,
        justifyContent:'center',
    }
});