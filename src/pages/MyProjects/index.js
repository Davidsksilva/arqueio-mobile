import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import Project from '~/components/Project';
import Header from '~/components/Header';

import {
  Container,
  CreateButton,
  CreateText,
  Projects,
  ProjectContainer,
  ProjectImage,
  ProjectTitle,
  UpdateText,
  ProjectBanner,
  UpdateContainer,
} from './styles';
import Api from '~/services/api';

import img01 from '~/assets/img01.jpg';
import img02 from '~/assets/img02.jpg';

const projectList = [
  {
    id: 0,
    title: 'Projeto 01',
    updates: 2,
    image: img01,
    color: '#FA7070',
  },
  {
    id: 1,
    title: 'Projeto 02',
    updates: 1,
    image: img02,
    color: '#FFBC61',
  },
];

const MyProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const project = await Api.get('/projects');
      setProjects(project.data);
    }

    fetchProjects();
  }, []);

  const handleCreateProject = event => {
    alert('Creating project');
  };

  return (
    <>
      <Header title="Meus Projetos" />
      <Container>
        <CreateButton onPress={handleCreateProject}>
          <MaterialIcon name="add-circle-outline" color="#fff" size={32} />
          <CreateText>Projeto</CreateText>
        </CreateButton>

        <Projects
          data={projectList}
          onRefresh={() => {}}
          refreshing={false}
          keyExtractor={project => String(project.id)}
          renderItem={({ item }) => (
            <ProjectContainer>
              <ProjectImage source={item.image}>
                <ProjectBanner color={item.color}>
                  <ProjectTitle>{item.title}</ProjectTitle>
                  <UpdateContainer>
                    <MaterialIcon name="lens" size={10} color="#fff" />
                    <UpdateText>{item.updates} Atualizações</UpdateText>
                  </UpdateContainer>
                </ProjectBanner>
              </ProjectImage>
            </ProjectContainer>
          )}
        />
        {/* <Project title="Projeto 01" description="Apartamento" />
        <Project title="Projeto 02" description="Casa" /> */}
      </Container>
    </>
  );
};

MyProjects.navigationOptions = {
  tabBarLabel: 'Projetos',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor }) => (
    <Icon name="md-home" size={28} color={tintColor} />
  ),
  title: 'Projetos',
  headerStyle: {
    backgroundColor: '#03A9F4',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default MyProjects;
