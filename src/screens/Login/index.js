import React, { useState } from 'react';
import { Container, Text, Icon, Title, Form, FakeButton, Button, TextButton, TitleButton, Content } from './styles';
import Input from '../../components/Input';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
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
                onPress={() => navigation.navigate('map')}
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