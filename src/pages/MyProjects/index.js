import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import Project from '~/components/Project';
import Header from '~/components/Header';

import { Container, List, Createbutton } from './styles';
import Api from '~/services/api';

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
    <Container>
      <Header title="Meus Projetos" />
      <Createbutton onPress={handleCreateProject}> Criar proejto </Createbutton>
      <Project title="Projeto 01" description="Apartamento" />
      <Project title="Projeto 02" description="Casa" />
    </Container>
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
