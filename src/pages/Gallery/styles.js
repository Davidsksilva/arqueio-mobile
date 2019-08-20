import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import Search from '~/components/Search';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const SearchBar = styled(Search)`
  margin-top: 0px;
`;

export const Photos = styled(FlatList).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 0px;
`;

export const Image = styled.Image`
  height: 160px;
  width: 160px;
  margin: 0;
  padding: 0;
`;
