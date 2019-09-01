import styled from 'styled-components/native';
import FilterButton from '~/components/FilterButton';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;

export const Top = styled.View`
  height: 45px;
  flex-direction: row;
  justify-content: space-around;
  border-bottom-width: 1px;
  border-bottom-color: #dedede;
  margin-left: 20px;
  margin-right: 20px;
`;

export const Left = styled.View`
  flex: 1;
  justify-content: flex-start;
  margin: auto 0px;
`;

export const Right = styled.View`
  flex: 2;
  flex-direction: row;
  justify-content: flex-end;
  text-align: center;
`;

export const Bottom = styled.View`
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
`;

export const Text = styled.Text`
  color: #384145;
  font-size: 16px;
`;

export const Button = styled(FilterButton).attrs({
  textColor: '#a6a6a6',
})`
  width: 90px;
  height: 45px;
  margin: auto 5px;
`;
