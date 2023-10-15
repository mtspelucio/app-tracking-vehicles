import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    width: 100%;
    margin-top: 40px;
`;

export const Content = styled.ScrollView``;

export const Top = styled.View`
    flex-direction: row;
    width: 100%;
    padding: 10px 20px;
    justify-content: space-between;
    align-items: center;
`;

export const Main = styled.View`
    padding: 20px;
    width: 100%;
    align-items: center;
`;

export const List = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    gap: 25px;
    justify-content: center;
    padding: 20px 0;
`;
export const Item = styled.View`
    background: #fff;
    align-items: center;
    justify-content: center;
    width: 140px;
    padding: 10px 5px;
    border-radius: 10px;


   
`;

export const Text = styled.Text`
    font-size: 15px;
`;
