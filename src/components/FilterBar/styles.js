import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import FilterButton from '~/components/FilterButton';

export const Container = styled.View`
  margin: 10px;
  border-radius: 4px;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 0px;
  border-bottom-color: #c4c4c4;
`;

export const Scroll = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin: 0px;
`;

export const ButtonF = styled(FilterButton).attrs({
  textColor: '#a6a6a6',
})`
  margin: 5px 0px 0px 0px;
  padding: 0px;
  width: 125px;
  background-color: transparent;
  border-bottom-color: #c4c4c4;
  border-bottom-width: 1.5;
`;

export const Tags = styled(FlatList).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 0px;
`;
