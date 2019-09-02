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

export const Image = styled.Image.attrs({})`
  flex: 1;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: #868686;
  margin: 10px auto;
`;
