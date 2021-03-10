import React, { useState } from 'react';
import { Image } from 'react-native';

import Slider from '@react-native-community/slider';
import Clipboard from 'expo-clipboard';

import { charset } from '../constants';

import { 
  Container, 
  Button, 
  Title,
  AreaButton,
  Area,
  Legend,
  Password
} from '../assets/styles';

export default function Main() {
  const [ password, setPassword ] = useState('');
  const [ size, setSize ] = useState(5);

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
    <Container>
      <Image
        source={require('./src/assets/images/logo.png')}
      />

      <Title>{`${size} Caracteres`}</Title>

      <Area>
        <Slider
          style={{height: 50}}
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor="#FF0000"
          maximumTrackImage="#000"
          value={size}
          onValueChange={
            (value)=> setSize(value.toFixed(0))
        	}
        />
      </Area>

      <Button onPress={generatePass}>
        <Legend>Gerar Senha</Legend>
      </Button>
			
      {
        password !== '' &&(
          <AreaButton onPress={copyPass}>
            <Password>{password}</Password>
          </AreaButton>
        )
      }
    </Container>
  );
}