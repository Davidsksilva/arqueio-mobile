import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  background: #fefefe;
  border-radius: 6px;
  border-color: #3b9eff;
  border-width: 1px;
  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(59, 158, 255, 0.4)',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #3398f4;
`;
