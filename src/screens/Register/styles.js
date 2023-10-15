import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    padding: 50px 0 0 0;
`;

export const Content = styled.ScrollView`
    width: 100%;
`;

export const Top = styled.View`
   width: 80%;
`;
export const Main = styled.View`
    width: 90%;
    padding: 0;
    align-items: center;
    margin-bottom: 30px;
`;
export const BoxAlert = styled.View`
    width: 100%;
    padding: 20px 10px;
    background: #08193920;
    align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #002537;
`;

export const Text = styled.Text`
    font-size: 15px;
`;