import React, { useState } from 'react';
import { Alert, Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

const App = () => {
  const [nomeProduto, setNomeProduto] = useState('');
  const [valorOriginal, setValorOriginal] = useState('');
  const [percentualAumento, setPercentualAumento] = useState('');
  const [novoValor, setNovoValor] = useState(null);
  const [valorAumento, setValorAumento] = useState(null);

  const calcularNovoValor = () => {
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
    const novoValorCalculado = valor + aumento;

    setNovoValor(novoValorCalculado.toFixed(2));
    setValorAumento(aumento.toFixed(2));
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
      <Button title="Calcular" onPress={calcularNovoValor} color="#AA00FF" />
      {novoValor !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Produto: {nomeProduto}</Text>
          <Text style={styles.resultText}>Valor Original: R$ {valorOriginal}</Text>
          <Text style={styles.resultText}>Percentual de Aumento: {percentualAumento}%</Text>
          <Text style={styles.resultText}>Valor do Aumento: R$ {valorAumento}</Text>
          <Text style={styles.resultText}>Novo Valor: R$ {novoValor}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#000000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#AA00FF',
  },
  input: {
    height: 40,
    borderColor: '#AA00FF',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    width: '80%',
  },
  resultContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#AA00FF',
    marginBottom: 8,
  },
});

export default App;
