import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
    background-color: #F3F3FF;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.TouchableOpacity`
    background-color: #FFA200;
    width: 80%;
    height: 50;
    justify-content: center;
    align-items: center;
    border-radius: 7;
    margin-bottom: 25;
`;

export const Title = styled.Text`
    margin-top: 30;
    font-size:30;
    font-weight: bold;
`;

export const Area = styled.View`
    margin-top: 15;
    margin-bottom: 15;
    background-color: #fff;
    width: 80%;
    border-radius: 7;
`;

export const AreaButton = styled.TouchableOpacity`
    margin-top: 15;
    margin-bottom: 15;
    background-color: #fff;
    width: 80%;
    border-radius: 7;
`;

export const Legend = styled.Text`
    font-size: 20px;
    color: #FFF;
    font-weight: bold;
`;

export const Password = styled.Text`
    padding: 10%;
    text-align: center;
    font-size: 20px;
`;