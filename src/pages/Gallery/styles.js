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
  margin: 5px;
`;

export const News = styled(FlatList).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin: 0px;
`;

export const Photos = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
})`
  margin: 0px;
`;

export const Image = styled.Image.attrs({})`
  height: 180px;
  width: 180px;
  margin: 5px;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #868686;
  margin: 10px;
`;
