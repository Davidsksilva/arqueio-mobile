import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${props => props.color};
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
  padding-left: 20px;
`;

export const Right = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding-right: 20px;
`;

export const Title = styled.Text`
  color: #3398f4;
  font-size: 22px;
`;
