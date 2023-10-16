import React, { useEffect, useState } from 'react';
import { Ionicons, Feather } from '@expo/vector-icons';
import { Container, Content, Item, List, Main, Text, Top } from './styles';
import { View, TouchableOpacity, Image } from 'react-native';
import Button from '../../components/Button';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../../services/firebase.config';

export default function Home({ navigation, userData }) {

  const [dataVehicles, setDataVehicles] = useState([]);
  const [name] = userData.nome.split(' ')

  useEffect(() => {
    const q = query(collection(db, "vehicles"), where("idUser", "==", userData.idUser));

    const subscribe = onSnapshot(q, (querySnapshot) => {
      const data = querySnapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      });

      setDataVehicles(data);
    });

    return () => subscribe();
  },[])

  return (
    <Container >
      <Content contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
        
        <Top>
          <View>
            <Text>Seja bem vindo</Text>
            <Text 
              style={{ 
                fontSize: 20, 
                fontWeight: 'bold' 
              }}
            >
              {name}
            </Text>
          </View>

          <TouchableOpacity
            style={{
              borderRadius: 100,
              backgroundColor: '#002537',
              padding: 10,
            }}
            onPress={() => alert('notificação')}
          >
            <Ionicons name="notifications" size={24} color="white" />
          </TouchableOpacity>
        </Top>
   
        <Image
          source={require('../../assets/banner.png')}
          resizeMode="cover"
        />

        <Main>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold'
              }}
            >
              Suas motos
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('registerVehicle', { 
                paramKey: userData 
            })}
            >
              <Feather name="plus" size={30} color="#002537" />
            </TouchableOpacity>
          </View>

          <List>
            {
              dataVehicles.length == 0 ? 
              <Text
                style={{ fontSize: 20, fontWeight: 'bold'}}
              > 
                Nenhuma moto cadastrada
              </Text>
              :
              dataVehicles.map((element, index) => (
                <Item key={index} >
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      margin: 10,
                    }}
                  >
                    {element.placa}
                  </Text>
                  <Text style={{
                      fontSize: 20,
                  }}>
                    {element.modelo}
                  </Text>
                  <Button 
                    title={'Ver detalhes'} 
                    onPress={() => navigation.navigate('detailsVehicle', 
                      { paramKey: element}
                    )}
                  />
                </Item>
              ))
            } 
          </List> 
        </Main>

      </Content>
    </Container>
  );
}