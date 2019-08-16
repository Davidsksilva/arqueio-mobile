import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  height: 50px;
  margin: 0px 20px 0px 20px;
  border-width: 2px;
  border-color: #dedede;
  border-radius: 6;
`;

export const Left = styled.TouchableOpacity`
  width: 50px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const Right = styled.View`
  flex: 1;
  height: 40px;
  justify-content: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#a6a6a6',
})`
  font-size: 18;
  padding-left: 10px;
  border-left-width: 2px;
  border-left-color: #dedede;
  justify-content: center;
`;
