import React, { useState } from 'react';
import { Container, Text, Icon, Title, Form, FakeButton, Button, TextButton, TitleButton, Content } from './styles';
import Input from '../../components/Input';

import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../../services/firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dataVehicles, setDataVehicles] = useState([]);


    async function userLogin(){
        await signInWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {

            const q = query(collection(db, "users"), where("idUser", "==", userCredentials.user.uid));

            const subscribe = onSnapshot(q, (querySnapshot) => {
                const data = querySnapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                });

                setDataVehicles(data);
                navigation.navigate('tab', { 
                    paramKey: data[0]
                })
            });

        })
        .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert('Usuario ou senha inválido!');
        })
    }
    
    return (
    <Container>
        <Content contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
        <Icon resizeMode='contain' source={require('../../assets/fiint-icon.png')} />
        <Form>
            <Title>Seja bem-vindo!</Title>
            <Input 
                text="Seu e-mail: "
                placeholder="exemplo@hotmail.com"
                onCgangeText={text => setEmail(text)}
            />
            <Input 
                text="Sua senha: "
                placeholder="**********"
                onCgangeText={text => setPassword(text)}
            />
            
            <FakeButton
                onPress={() => console.log("ok")}
            >
                <TextButton>Esqueci minha senha</TextButton>
            </FakeButton>

            <Button
                // onPress={() => navigation.navigate('registerVehicle')}
                onPress={userLogin}

            >
                <TitleButton>ENTRAR</TitleButton>
            </Button>

            <FakeButton
                onPress={() => navigation.navigate('register')}
            >
                <Text>Ainda não é cadastrado?  </Text>
                <TextButton>Cadastre-se</TextButton>
            </FakeButton>
        </Form>
        </Content>
    </Container>
  );
}