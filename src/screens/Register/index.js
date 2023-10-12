import React, { useState } from 'react';
import { BoxAlert, Container, Content, Main, Text, Title, Top } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';


export default function Register() {
    const [email, setEmail] = useState('');
    const [name,  setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword,  setConfirmPassword] = useState('');

    function handleNewAccount() {
        auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => Alert.alert("Conta", "Cadastro realizado"))
        .catch((erro) => console.log(erro))
    }

  return (
    <Container>
        <Content contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
        <Top>
            <Title>Cadastro</Title>
            <Text>Complete suas informações para cadastrar</Text>
        </Top>

        <Main>
            <Input 
                text="Seu e-mail: "
                placeholder="exemplo@hotmail.com"
                onCgangeText={text => setEmail(text)}
            />
            <Input 
                text="Seu nome: "
                placeholder="digite seu primeiro nome"
                onCgangeText={text => setName(text)}
            />
            <Input 
                text="Sua senha: "
                placeholder="digite sua senha"
                onCgangeText={text => setPassword(text)}
            />
            <Input 
                text="Confirme a senha: "
                placeholder="repita sua senha"
                onCgangeText={text => setConfirmPassword(text)}
            />
        </Main>
        <BoxAlert>
            <Text>Aceito os termos de uso do aplicativo</Text>
        </BoxAlert>

        <Main>
            <Button 
                title={'CADASTRAR'} 
                onPress={handleNewAccount} 
            />
        </Main>
        </Content>
    </Container>
  );
}