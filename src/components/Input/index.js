import React from 'react';

import { Container, Text, TextInput } from './styles';

export default function Input({ text, placeholder, onCgangeText, keyboardType}) {
  return (
    <Container>
      <Text>{text}</Text>
      <TextInput
        onChangeText={onCgangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
    </Container>
  );
}