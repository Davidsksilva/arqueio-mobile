import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import FilterButton from '~/components/FilterButton';

export const Container = styled.ScrollView`
  flex: 1;
  background: #fff;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 500px;
`;

export const FurnisherNews = styled(FlatList).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin-left: 15px;
  margin-bottom: 10px;
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
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const ImageSimilar = styled.Image`
  flex: 1;
  border-radius: 10;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #3398f4;
  margin-left: 20px;
  margin-bottom: 10px;
`;

export const TitleFurnisher = styled.Text`
  font-size: 20px;
  color: #383838;
  margin: 10px auto;
`;

export const DescriptionFurnisher = styled.Text`
  font-size: 14px;
  color: #384145;
  margin: 10px;
`;

export const ButtonsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  background: #fff;
  margin: 15px 20px 15px 20px;
`;

export const Button = styled(FilterButton).attrs({
  textColor: '#3398F4',
  textSize: 16,
})`
  flex: 1;
`;

export const ButtonFurnisher = styled(FilterButton).attrs({
  textColor: '#3398F4',
  textSize: 16,
  isColumnDirection: true,
})`
  flex: 1;
`;
