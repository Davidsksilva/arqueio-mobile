import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { FlatList } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 40px;
  background-color: #eee;
`;

export const CreateButton = styled(RectButton)`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #f0189f;
  border-radius: 6px;
`;

export const Projects = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const ProjectContainer = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,

  elevation: 3,
})`
  height: 160px;
  border-radius: 4px;
  height: 160px;
  background-color: #fff;
  margin-bottom: 20px;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export const ProjectImage = styled.ImageBackground.attrs(props => ({
  source: props.source,
  imageStyle: { borderRadius: 8 },
}))`
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
  justify-content: flex-start;
  align-items: center;
`;
export const CreateText = styled.Text`
  color: #fff;
  margin-left: 5px;
  font-size: 20px;
  font-weight: bold;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    padding: 30,
  },
})``;
