import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Createbutton = styled(Button)`
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    padding: 30,
  },
})``;
