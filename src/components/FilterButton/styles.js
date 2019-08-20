import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  height: 47px;
  width: 140px;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled(RectButton)`
  height: 46px;
  width: 140px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Text = styled.Text`
  color: #000000;
  font-weight: bold;
  font-size: 18px;
`;
