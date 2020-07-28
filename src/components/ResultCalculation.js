import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ResultCalculation = ({
  errorMessage,
  capital,
  interest,
  months,
  total,
}) => (
  <View style={styles.content}>
    {total && (
      <View style={styles.boxResult}>
        <Text style={styles.title}>Resumen</Text>
        <DataResult title="Cantidad solicitada:" value={`$ ${capital}`} />
        <DataResult title="Interés: " value={`${interest} %`} />
        <DataResult title="Plazo:" value={`${months} meses`} />
        <DataResult title="Pago mensual: " value={`$ ${total.monthlyFee}`} />
        <DataResult title="Total a pagar" value={`$ ${total.totalPayable}`} />
      </View>
    )}
    <View>
      <Text style={styles.error}>{errorMessage}</Text>
    </View>
  </View>
);

const DataResult = ({title, value}) => {
  return (
    <View style={styles.value}>
      <Text>{title}</Text>
      <Text>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 40,
  },
  boxResult: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  value: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  error: {
    textAlign: 'center',
    color: '#f00',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default ResultCalculation;
