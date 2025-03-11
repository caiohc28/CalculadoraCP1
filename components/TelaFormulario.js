import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Button, SafeAreaView, Text, TextInput } from 'react-native';

const TelaFormulario = () => {
  const [nomeProduto, setNomeProduto] = useState('');
  const [valorOriginal, setValorOriginal] = useState('');
  const [percentualAumento, setPercentualAumento] = useState('');
  const navigation = useNavigation();

  const handleCalcular = () => {
    if (!nomeProduto || !valorOriginal || !percentualAumento) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    const valor = parseFloat(valorOriginal);
    const percentual = parseFloat(percentualAumento);
    if (isNaN(valor) || isNaN(percentual)) {
      Alert.alert('Erro', 'Por favor, insira valores numéricos válidos.');
      return;
    }

    const aumento = (valor * percentual) / 100;
    const novoValor = valor + aumento;

    navigation.navigate('TelaResultado', {
      nomeProduto,
      valorOriginal: valor.toFixed(2),
      percentualAumento: percentual.toFixed(2),
      novoValor: novoValor.toFixed(2),
      valorAumento: aumento.toFixed(2),
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Calculadora de Aumento</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Produto"
        value={nomeProduto}
        onChangeText={setNomeProduto}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor Original"
        keyboardType="numeric"
        value={valorOriginal}
        onChangeText={setValorOriginal}
      />
      <TextInput
        style={styles.input}
        placeholder="Percentual de Aumento"
        keyboardType="numeric"
        value={percentualAumento}
        onChangeText={setPercentualAumento}
      />
      <Button title="Calcular" onPress={handleCalcular} color="#555BFA" />
    </SafeAreaView>
  );
};



export default TelaFormulario;