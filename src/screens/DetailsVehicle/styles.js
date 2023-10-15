import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    width: 100%;
    margin-top: 40px;
`;
export const Content = styled.ScrollView``;

export const Info = styled.View`
    width: 50%;
`;

export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;
export const Text = styled.Text`
    font-size: 15px;
`;

export const Segurity = styled.TouchableOpacity`
    width: 90%;
    background: ${({ type }) => type == 'lock' ? 'red' : 'green'};
    padding: 15px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin-top: 50px;
    flex-direction: row;
    gap: 20px;
`;

export const Status = styled.TouchableOpacity`
    border: 2px solid #135D7A;
    padding: 20px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin-top: 50px;
    gap: 20px;
`;
export const Top = styled.View`
    width: 90%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;