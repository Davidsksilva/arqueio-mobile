import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 15px;
  border-radius: 4px;
  background: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const Info = styled.View`
  margin-left: 10px;
  margin-top: 10px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Cover = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 4px;
`;

export const Title = styled.Text`
  color: #333;
  font-size: 14px;
  font-weight: bold;
`;

export const Description = styled.Text``;
