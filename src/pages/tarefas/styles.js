import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: center;
  background-color: #2C2C2C;
`;

export const Title = styled.Text`
  font-size: 36px;
  color: #fff;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 40px;
  background-color: #fff;
  padding: 0 20px;
  border-radius: 5px;
`;

export const Button = styled.TouchableOpacity`
  width: 100px;
  height: 40px;
  background-color: rgb(108,226,0);
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const BtnDetalhes = styled.TouchableOpacity`
  width: 65px;
  height: 30px;
  background-color: rgb(108,226,0);
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  flex-direction: row-reverse;
  margin-top: 5px;
`;

export const BtnText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;



export const FormAddNewTask = styled.View`
  flex-direction: row;
  margin-top: 30px;
`;

export const Tasks = styled.View`
  flex: 1;
  margin-top: 40px;
`;

export const Task = styled.View`
  background-color: #fff;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 10px 20px;
  justify-content: space-between;
  flex-direction: column;
`;

export const TaskText = styled.Text`
  font-size: 16px;
  color: #3a3a3a;
  text-align: justify;
  
`;



export const TaskAction = styled.View`
  flex-direction: row-reverse;
  margin-top: -30px;
`;

export const ErroMessage = styled.Text`
  color: #c53030;
  font-size: 14px;
  margin-top: 5px;
`;