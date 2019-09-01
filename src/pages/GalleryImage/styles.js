import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.ScrollView`
  flex: 1;
  background: #fff;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 400px;
`;

export const Photos = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
})`
  margin: 0px;
`;

export const ImageContainer = styled.TouchableOpacity`
  height: 180px;
  width: 180px;
  margin: 5px;
`;

export const ImageSimilar = styled.Image.attrs({})`
  flex: 1;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: #3398f4;
  margin: 10px;
`;
