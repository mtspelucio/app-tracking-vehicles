import React, { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../services/firebase.config';
import { Container, Content, Text, Title } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function Profile({ userData }) {
    //console.log(userData)
    const [name, setName] = useState(userData.nome);
    const [email, setEmail] = useState(userData.email);
    const [phone, setPhone] = useState(userData.telefone);
    const [address, setAddress] = useState(userData.endereco);

    async function updateUser() {
        if(name == '' || email  == '' || phone == '' || address == '') return alert('Campos preenchidos de forma inválida');
        
        const docRef = doc(db, 'users', userData.id);
        
        await updateDoc(docRef, {
            nome: name,
            email: email,
            telefone: phone,
            endereco: address
        })
        .then(() => {
            alert('Usuário atualizado')
        })
        .catch(err => {
            alert('Não foi possível atualizar o usuário')
            console.log(err)
        })
    } 

  return (
    <Container>
        <Content contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
            <Title>Editar Perfil</Title>

            <Input 
                text="Nome do Usuário"
                placeholder={userData.nome}
                onCgangeText={text => setName(text)}
            />
            <Input 
                text="Email"
                placeholder={userData.email}
                onCgangeText={text => setEmail(text)}
            />
            <Input 
                text="Telefone"
                placeholder={userData.telefone}
                onCgangeText={text => setPhone(text)}
            />
            <Input 
                text="Endereço"
                placeholder={userData.endereco}
                onCgangeText={text => setAddress(text)}
            />

            <Button title='Salvar' onPress={updateUser} />
            
        </Content>
    </Container>
  );
}