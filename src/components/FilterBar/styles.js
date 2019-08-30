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
  border-bottom-width: 2px;
  border-bottom-color: #dedede;
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
  margin: 5px 5px 0px 5px;
  padding: 0px;
  width: 140px;
  background-color: transparent;
  border-bottom-color: #ffffff;
  border-bottom-width: 2;
`;

export const Tags = styled(FlatList).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 0px;
`;
