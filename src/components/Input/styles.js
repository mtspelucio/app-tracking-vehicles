import styled from 'styled-components/native';

export const Container = styled.View`
  width: 90%;
  margin-top: 20px;
`;

export const Text = styled.Text`
  font-size: 15px;
  margin: 5px 0;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: "#00000070"
})`
  border: none;
  border-radius: 10px;
  background: #08193930;
  padding: 15px;
`;