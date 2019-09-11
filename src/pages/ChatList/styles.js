import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import Search from '~/components/Search';
import FilterBar from '~/components/FilterBar';

import global from '~/styles/global';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const SearchBar = styled(Search)`
  margin-top: 0px;
`;

export const Filter = styled(FilterBar)`
  margin: 0 20px 0 20px;
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
