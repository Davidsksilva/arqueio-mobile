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
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
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
  margin-top: 5px;
  margin-bottom: 15px;
`;

export const Text = styled.Text`
  color: #384145;
  font-size: 14px;
  line-height: 22px;
  text-align: justify;
`;

export const ShowMore = styled.Text`
  color: #3398f4;
  font-size: 16px;
  line-height: 22px;
  margin: 10px 0px;
  text-align: right;
`;

export const Button = styled(FilterButton).attrs({
  textColor: '#3398f4',
})`
  width: 90px;
  height: 45px;
  margin: auto 5px;
`;

export const Image = styled.Image`
  width: 80px;
  height: 30px;
`;
