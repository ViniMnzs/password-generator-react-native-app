import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import Clipboard from 'expo-clipboard';

export default function App() {
  let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  const [password, setPassword] = useState('');
  const [size, setSize] = useState(5);

  function generatePass(){
    let pass = '';
    for(let i = 0, n = charset.length; i < size; i++){
      pass += charset.charAt(Math.floor(Math.random()* n));
    }

    setPassword(pass);
  }

  function copyPass(){
    alert('Senha copiada com sucesso');
    Clipboard.setString(password);
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('./src/assets/images/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>{`${size} Caracteres`}</Text>
      <View style={styles.area}>
        <Slider
          style={styles.slider}
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor="#FF0000"
          maximumTrackImage="#000"
          value={size}
          onValueChange={ (value)=> setSize(value.toFixed(0))}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={generatePass}
      >
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>
      {
        password !== '' &&(
          <TouchableOpacity style={styles.area} onPress={copyPass}>
            <Text style={styles.password}>{password}</Text>
          </TouchableOpacity>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    marginBottom: 60,
  },
  title:{
    fontSize:30,
    fontWeight:'bold',
  },
  area:{
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 7,
  },
  slider:{
    height: 50
  },
  button:{
    backgroundColor: '#FFA200',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginBottom: 25
  },
  buttonText:{
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
  },
  password:{
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
  }
});
