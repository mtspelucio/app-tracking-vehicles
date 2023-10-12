import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  background: #002537;
`;

export const Content = styled.ScrollView`
    width: 100%;
    flex: 1;
`;

export const Form = styled.View`
    flex: 1;
    background: #fff;
    border-radius: 40px 40px 0 0;
    align-items: center;
    width: 100%;
    padding: 10px;
`;

export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
`;
export const TitleButton = styled.Text`
    color: #fff;
    font-size: 15px;
    font-weight: bold;
`;

export const TextButton = styled.Text`
    color: #135D7A;
    text-decoration: underline;
    font-size: 15px;
`;
export const FakeButton = styled.TouchableOpacity`
    width: 90%;
    flex-direction: row;
    margin-top: 5px;
`;
export const Button = styled.TouchableOpacity`
    background: #007994;
    width: 90%;
    align-items: center;
    padding: 15px;
    margin-top: 30px;
    border-radius: 10px;
`;
export const Text = styled.Text`
    font-size: 15px;
`;

export const Icon = styled.Image`
    margin-top: 50px;
    height: 300px;
`;