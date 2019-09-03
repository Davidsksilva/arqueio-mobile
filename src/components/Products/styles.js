import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;

export const Title = styled.Text`
  font-size: 22;
  color: #3398f4;
  margin-top: 10px;
  margin: 5px auto;
`;

export const SubTitle = styled.Text`
  font-size: 14;
  color: #3398f4;
  margin: 5px auto;
`;

export const ContainerButtonsSlider = styled.View`
  flex: 1;
  background: #fff;
  flex-direction: row;
  justify-content: center;
`;

export const ButtonSlider = styled.View`
  width: 15px;
  height: 3px;
  background: #c4c4c4;
  margin: 5px 5px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 400px;
`;

export const Details = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
})`
  margin: 0px;
`;

export const DetailsText = styled.Text`
  color: #384145;
  font-size: 12px;
  margin: 3px auto;
`;
