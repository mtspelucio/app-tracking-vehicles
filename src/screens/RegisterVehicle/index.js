import React, { useState } from 'react';
import { Container, Content, Form, Text, Title } from './styles';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../services/firebase.config';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function RegisterVehicle({ navigation, route }) {
  const [plate, setPlate] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [match, setMatch] = useState('');
  const [timeAuth, setTimeAuth] = useState(5);

  async function registerNewVehicle() {
    if(plate == '' || brand == '' || model == '' || match == '' || timeAuth == '') {
      alert('Preencha todos os campos')
      return
    }
    
    const docRef = await addDoc(collection(db, 'vehicles'), {
      idUser: route.params.paramKey.idUser,
      placa: plate,
      marca: brand,
      modelo: model,
      partida: match,
      timeAuth: timeAuth,
      latitude: -18.633649,
      longitude: -48.190298,
      bloqueada: false,
      ligada: false
    })
    .then(() => {
      alert('Veiculo registrado com sucesso')
      navigation.goBack()
    })
    .catch(erro =>{
      console.log(erro)
      alert('Erro ao registrar moto, tente novamente mais tarde')
    })
  }

  return (
    <Container>
      <Content contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
        <Title>Cadastro da Moto</Title>
        <Form>
          <Input 
            text="Placa: "
            placeholder="digite a placa da moto"
            onCgangeText={text => setPlate(text)}
          />
          <Input 
            text="Marca: "
            placeholder="digite a marca da moto"
            onCgangeText={text => setBrand(text)}
          />
          <Input 
            text="Modelo: "
            placeholder="digite o modelo da moto"
            onCgangeText={text => setModel(text)}
          />
          <Input 
            text="Sistema de partida: "
            placeholder="elétrico/manual"
            onCgangeText={text => setMatch(text)}
          />
          <Input 
            text="Tempo para autenticação: "
            placeholder="padrão 5"
            value={5}
            onCgangeText={text => setTimeAuth(text)}
            keyboardType="numeric"
          /> 

          <Button 
            title={'CADASTRAR MOTO'} 
            onPress={registerNewVehicle} 
          />  
        </Form>
      </Content>
    </Container>
  );
}