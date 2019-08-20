import styled from 'styled-components/native';
import { FlatList, Dimensions } from 'react-native';

import Search from '~/components/Search';
import Header from '~/components/Header';
import FilterBar from '~/components/FilterBar';

const imageSize = Dimensions.get('window').width / 2 - 12;

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const TopBar = styled(Header)`
  margin: 0px;
`;

export const SearchBar = styled(Search)`
  margin-top: 10px;
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
`;
