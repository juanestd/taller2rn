import * as React from 'react';
import * as RN from 'react-native';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import {AntDesign} from '@expo/vector-icons';
import { baseDatos } from '../config/firebase';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Objeto({ id, imagen, nombre, descripcion, precio, vendido }) {
  const editar = () => {
    const docRef = doc(baseDatos, 'objetos', id);
    updateDoc(docRef, { vendido: true });
  };

  const eliminar = () => {
    const docRef = doc(baseDatos, 'objetos', id);
    deleteDoc(docRef);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.imagen}>{imagen}</Text>
        <TouchableOpacity onPress={eliminar} style={styles.deleteButton}>
          <AntDesign name="delete" size={25} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.nombre}>{nombre}</Text>
        <Text style={styles.descripcion}>{descripcion}</Text>
        <Text style={styles.precio}>${precio}</Text>
      </View>
      <TouchableOpacity
        style={[styles.button, vendido && styles.buttonDisabled]}
        onPress={editar}
        disabled={vendido}
      >
        <Text style={styles.buttonText}>{vendido ? 'Cargado' : 'Cargar'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  imagen: {
    fontSize: 100,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  deleteButton: {
    backgroundColor: '#ff5555',
    borderRadius: 10,
    padding: 8,
  },
  content: {
    marginBottom: 10,
  },
  nombre: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff',
  },
  descripcion: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 5,
  },
  precio: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#337ab7',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});