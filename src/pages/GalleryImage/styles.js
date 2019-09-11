import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import FilterButton from '~/components/FilterButton';
import global from '~/styles/global';

export const Container = styled.ScrollView`
  flex: 1;
  background: #fff;
`;

export const ContainerModal = styled.View`
  background: #fff;
  height: 400px;
`;

export const ContainerBottomModal = styled.View`
  background: #fff;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
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
  textSize: 18,
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

export const List = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
})`
  margin: 0px;
`;

export const ChatItemOutter = styled.TouchableOpacity`
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  border-style: solid;

  border-bottom-color: #dedede;
  border-bottom-width: 1px;
  height: 80px;

  display: flex;
  justify-content: center;

  padding: 8px 0px;
`;

export const ChatItemInner = styled.View`
  border-color: ${global.primary};
  padding-left: 8px;
  border-left-width: 2px;
  border-style: solid;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ChatItemAvatar = styled.Image`
  width: 66px;
  height: 66px;
  border-radius: 4px;
  margin-right: 10px;
`;

export const ChatItemContent = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;
`;

export const ChatItemDateText = styled.Text`
  color: #a6a6a6;
`;

export const ChatItemText = styled.Text.attrs({
  numberOfLines: 1,
})`
  color: ${global.primary};
`;

export const ChatItemTextName = styled.Text`
  font-size: 18px;
`;

export const ChatItemRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
