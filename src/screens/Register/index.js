import React, { useState } from 'react';
import { BoxAlert, Container, Content, Main, Text, Title, Top } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { auth, db } from '../../services/firebase.config'

export default function Register({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword,  setConfirmPassword] = useState('');

    const [name,  setName] = useState('');
    const [phone,  setPhone] = useState('');
    const [address,  setAddress] = useState('');

    async function handleNewAccount() {
        if(password != confirmPassword) return alert('Digite a mesma senha nos dois campos');
        if(email == '' || password  == '' || confirmPassword == '' || name  == '' || phone  == '' || address  == '') return alert('Preencha todos os campos');

        const docRef = await createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredentials) => {

            const docRefProfile = await addDoc(collection(db, 'users'), {
                idUser: userCredentials.user.uid,
                nome: name,
                telefone: phone,
                endereco: address,
                email: email
              })
              .then(() => {
                alert('Usuario registrado com sucesso')
                navigation.goBack()
              })
              .catch(erro =>{
                console.log(erro)
                alert('Erro ao registrar informação do usuario, tente novamente mais tarde')
            })
    
            navigation.navigate('tab', { 
                paramKey: {
                    idUser: userCredentials.user.uid,
                    email: userCredentials.user.email,
                    nome: name,
                    telefone: phone,
                    endereco: address,
                } 
            });
        })
        .catch((erro) => {
            alert('Erro ao cadastrar usuário, tente novamente mais tarde')
            console.log(erro.message)
        });        
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
                text="E-mail: "
                placeholder="exemplo@hotmail.com"
                onCgangeText={text => setEmail(text)}
            />
            <Input 
                text="Senha: "
                placeholder="digite sua senha"
                onCgangeText={text => setPassword(text)}
            />
            <Input 
                text="Confirme a senha: "
                placeholder="repita sua senha"
                onCgangeText={text => setConfirmPassword(text)}
            />
            <Input 
                text="Nome: "
                placeholder="digite seu nome e sobrenome"
                onCgangeText={text => setName(text)}
            />
            <Input 
                text="Telefone: "
                placeholder="digite seu telefone"
                onCgangeText={text => setPhone(text)}
                keyboardType='numeric'
            />
            <Input 
                text="Endereço: "
                placeholder="Rua exemplo, 1234"
                onCgangeText={text => setAddress(text)}
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