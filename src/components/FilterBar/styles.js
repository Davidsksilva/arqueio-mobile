import styled from 'styled-components/native';
import Button from '~/components/Button';

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

export const FilterButton = styled(Button).attrs({
  color: '#3b9eff',
})`
  margin: 5px 5px 0px 5px;
  padding: 0px;
  width: 140px;
  background-color: transparent;
`;
