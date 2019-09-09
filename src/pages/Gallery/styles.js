import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import Search from '~/components/Search';
import FilterBar from '~/components/FilterBar';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const SearchBar = styled(Search)`
  margin-top: 0px;
`;

export const Filter = styled(FilterBar)`
  margin: 0 20px 0 20px;
`;

export const News = styled(FlatList).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin-left: 15px;
`;

export const Photos = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
})`
  margin-left: 10px;
  margin-right: 10px;
`;

export const ImageContainer = styled.TouchableOpacity`
  height: 180px;
  width: 180px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Image = styled.Image.attrs({})`
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
  color: #c4c4c4;
  margin: 20px 20px 10px 20px;
`;
