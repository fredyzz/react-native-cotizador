import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import colors from '../utils/colors';

const Form = ({setCapital, setInterest, setMonths}) => {
  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInput}>
        <TextInput
          placeholder="Monto solicitado"
          keyboardType="numeric"
          style={styles.input}
          onChange={(e) => setCapital(e.nativeEvent.text)}
        />
        <TextInput
          placeholder="Interés %"
          keyboardType="numeric"
          style={[styles.input, styles.inputPercentage]}
          onChange={(e) => setInterest(e.nativeEvent.text)}
        />
      </View>
      <RNPickerSelect
        onValueChange={(value) => setMonths(value)}
        placeholder={{label: 'Selecciona el plazo...', value: null}}
        items={[
          {label: '3 meses', value: 3},
          {label: '6 meses', value: 6},
          {label: '12 meses', value: 12},
          {label: '24 meses', value: 24},
        ]}
        style={pickerSelectStyles}
        useNativeAndroidPickerStyle={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewForm: {
    position: 'absolute',
    bottom: 0,
    width: '85%',
    paddingHorizontal: 50,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 30,
    height: 180,
    justifyContent: 'center',
  },
  viewInput: {
    flexDirection: 'row',
  },
  input: {
    height: 50,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    width: '60%',
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 20,
  },
  inputPercentage: {
    width: '40%',
    marginLeft: 5,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#ffffff',
    marginLeft: -5,
    marginRight: -5,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRightWidth: 0.5,
    borderRightColor: 'grey',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#fff',
  },
});

export default Form;
