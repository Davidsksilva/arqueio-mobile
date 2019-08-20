import styled from 'styled-components/native';

export const Container = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 1,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,

  elevation: 3,
})`
  height: 180px;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
`;

export const ProjectImage = styled.ImageBackground.attrs({
  imageStyle: { borderRadius: 8 },
})`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
export const ProjectTitle = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const ProjectBanner = styled.View`
  background-color: ${props => props.color};
  height: 40%;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 5px;
`;

export const UpdateText = styled.Text`
  color: #fff;
  margin-left: 5px;
  font-weight: 100;
`;

export const UpdateContainer = styled.View`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Right = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Left = styled.View`
  flex-direction: row;
  justify-content: flex-start;

  align-items: center;
`;
