import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #eee;
  padding: 10px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const MenuItem = styled.View`
  height: 40px;
  width: 100%;
  background-color: #fff;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const MenuItemText = styled.Text`
  font-size: 20px;
  font-weight: ${props => (props.color ? 'bold' : 500)};
  color: ${props => props.color || '#333'};
`;
