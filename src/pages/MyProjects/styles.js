import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { FlatList } from 'react-native';

import globalStyle from '~/styles/global';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 20px 20px 0 20px;
  background-color: #fff;
`;

export const CreateButtonContainer = styled.View`
  justify-content: center;
  display: flex;
  flex-direction: row;
`;

export const CreateButton = styled(RectButton)`
  padding: 10px;
  display: flex;
  width: 70%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${globalStyle.terciary};
  border-radius: 6px;
`;

export const Projects = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const CreateText = styled.Text`
  color: #fff;
  margin-left: 5px;
  font-size: 20px;
  font-weight: bold;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    padding: 30,
  },
})``;

export const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
