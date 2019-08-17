import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import globalStyle from '~/styles/global';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: #eee;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContentBox = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 1,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,

  elevation: 3,
})`
  height: 200px;
  background-color: #fff;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContentText = styled.Text`
  font-size: 20px;
`;

export const CreateButton = styled(RectButton)`
  padding: 10px;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${globalStyle.terciary};
  border-radius: 6px;
`;

export const CreateText = styled.Text`
  font-size: 16px;
  color: ${globalStyle.secondary};
`;

export const NameInput = styled.TextInput.attrs({
  placeholderTextColor: '#333',
})`
  margin-top: 10px;
  color: ${globalStyle.primary};
  font-size: 16px;
  width: 100%;
  padding: 0;
  border-bottom-color: #333;
  border-bottom-width: 2px;
  margin-bottom: 10px;
`;
