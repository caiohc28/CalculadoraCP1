import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';

const TelaResultado = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { nomeProduto, valorOriginal, percentualAumento, novoValor, valorAumento } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Resultado</Text>
            <View style={styles.resultContainer}>
                <Text style={styles.resultText}>Produto: {nomeProduto}</Text>
                <Text style={styles.resultText}>Valor Original: R$ {valorOriginal}</Text>
                <Text style={styles.resultText}>Percentual de Aumento: {percentualAumento}%</Text>
                <Text style={styles.resultText}>Valor do Aumento: R$ {valorAumento}</Text>
                <Text style={styles.resultText}>Novo Valor: R$ {novoValor}</Text>
            </View>
            <Button title="Voltar" onPress={() => navigation.goBack()} color="#555BFA" />
        </SafeAreaView>
    );
};


export default TelaResultado;