import React, { useEffect, useState } from 'react';
import { Container, Content, Info, Segurity, Status, Text, Title, Top } from './styles';
import { View } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'; 

import { doc, updateDoc, query, collection, where, onSnapshot } from 'firebase/firestore';
import { db } from '../../services/firebase.config';

export default function DetailsVehicle({ route }) {

    const details = route.params.paramKey
    const [isLock, setIsLock] = useState(details.bloqueada);
    const [isVehicleOn, setIsVehicleOn] = useState(details.ligada);
    const [dataVehicles, setDataVehicles] = useState([]);

    async function handleIsLock() {
        const docRef = doc(db, 'vehicles', details.id);
        
        await updateDoc(docRef, {
            bloqueada: !dataVehicles.bloqueada
        })
        .then(() => {
            setIsLock(!isLock)
        })
        .catch(err => {
            alert('Não foi possível mudar o status da moto')
            console.log(err)
        })
    } 
    async function handleIsVehicleOn() {
        const docRef = doc(db, 'vehicles', details.id);
        
        await updateDoc(docRef, {
            ligada: !dataVehicles.ligada
        })
        .then(() => {
            setIsVehicleOn(!isVehicleOn)
        })
        .catch(err => {
            alert('Não foi possível mudar o status da moto')
            console.log(err)
        })
    } 

    useEffect(() => {
        const q = query(collection(db, "vehicles"), where("placa", "==", details.placa));
    
        const subscribe = onSnapshot(q, (querySnapshot) => {
          const data = querySnapshot.docs.map(doc => {
            return {
              id: doc.id,
              ...doc.data()
            }
          });
          setDataVehicles(data[0]);
          setIsLock(data[0].bloqueada)
          setIsVehicleOn(data[0].ligada)
          
        });
        
        return () => subscribe();
    },[])

  return (
    <Container>
        <Content contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
            
            <Title style={{ marginBottom: 30 }} >
                Detalhes da Moto
            </Title>

            <Top>
                <Info>
                    <Title style={{ fontSize: 30 }}>{details.placa}</Title>
                    <Title style={{ fontWeight: 'normal' }} >
                        {details.marca + " " + details.modelo}
                    </Title>
                    <Text
                        style={{
                            marginTop: 30,
                            fontWeight: 'bold'
                        }}
                    >
                        Sistema de Partida:
                    </Text>
                    <Text>{details.partida}</Text>
                </Info>

                <Status
                    onPress={handleIsVehicleOn}
                >
                    <Title>Status da Moto</Title>
                    {
                        isVehicleOn == true ?
                        <>
                            <Text>Ligada</Text>
                            <MaterialIcons name="two-wheeler" size={80} color="green" />
                        </> : <>
                            <Text>Desligada</Text>
                            <MaterialIcons name="two-wheeler" size={80} color="red" />
                        </>
                    }                
                </Status>
            </Top>
            
            {
                isLock == true ? 
                <Segurity 
                    type='lock'
                    onPress={handleIsLock}
                >
                    <View style={{ alignItems: 'center' }}>
                        <Title style={{ color: '#fff' }} >Moto Bloqueada!</Title>
                        <Text style={{ color: '#fff' }} >clique para desbloquear</Text>
                    </View>
                    <FontAwesome name="lock" size={40} color="#fff" />
                </Segurity>
                :
                <Segurity
                    onPress={handleIsLock}
                >
                    <View style={{ alignItems: 'center' }}>
                        <Title style={{ color: '#fff' }} >Moto desbloqueada!</Title>
                        <Text style={{ color: '#fff' }} >clique para bloquear</Text>
                    </View>
                    <FontAwesome name="unlock" size={40} color="#fff" />
                </Segurity>
            }            
            
        </Content>
    </Container>
  );
}