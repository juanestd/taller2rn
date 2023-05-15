import * as React from 'react';
import * as RN from 'react-native';
import { baseDatos } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';

export default function Agregar() {
  const navigation = useNavigation();

  const [newObjeto, setNewObjeto] = React.useState({
    imagen: '🛒',
    nombre: '',
    descripcion: '',
    precio: 0,
    vendido: false,
    creadoEn: new Date(),
  });

  const enviar = async () => {
    await addDoc(collection(baseDatos, 'objetos'), newObjeto);
    navigation.goBack();
  };

  return (
    <RN.View style={styles.container}>
      <RN.Text style={styles.title}>AÑADIR OBJETO</RN.Text>
      <RN.Text style={styles.imagen}>🛒</RN.Text>
      <RN.TextInput
        style={styles.inputContainer}
        placeholder='Nombre'
        placeholderTextColor='#ccc'
        onChangeText={(text) => setNewObjeto({ ...newObjeto, nombre: text })}
      />
      <RN.TextInput
        style={styles.inputContainer}
        placeholder='Descripción'
        placeholderTextColor='#ccc'
        onChangeText={(text) => setNewObjeto({ ...newObjeto, descripcion: text })}
      />
      <RN.TextInput
        style={styles.inputContainer}
        placeholder='$ Precio'
        placeholderTextColor='#ccc'
        keyboardType='number-pad'
        onChangeText={(text) => setNewObjeto({ ...newObjeto, precio: text })}
      />
      <RN.TouchableOpacity style={styles.button} onPress={enviar}>
        <RN.Text style={styles.buttonText}>GUARDAR</RN.Text>
      </RN.TouchableOpacity>
      <RN.Text style={styles.newObjeto}>{JSON.stringify(newObjeto)}</RN.Text>
    </RN.View>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 20,
  },
  imagen: {
    fontSize: 100,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    marginVertical: 6,
    color: '#fff',
  },
  inputContainer: {
    width: '90%',
    padding: 13,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    color: '#fff',
  },
  button: {
    backgroundColor: '#337ab7',
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  newObjeto: {
    color: '#fff',
    marginTop: 20,
  },
});