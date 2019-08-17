import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { NavigationEvents } from 'react-navigation';
import { ActivityIndicator } from 'react-native';
import ProjectCard from '~/components/ProjectCard';

import {
  Container,
  CreateButton,
  CreateText,
  Projects,
  CreateButtonContainer,
  LoadingContainer,
} from './styles';

import api from '~/services/api';

/* import img01 from '~/assets/img01.jpg';
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
]; */

const MyProjects = ({ navigation }) => {
  const [projects, setProjects] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  async function fetchProjects() {
    setLoading(true);
    const project = await api.get('/projects');
    setProjects(project.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleCreateProject = () => {
    fetchProjects();
    navigation.navigate('CreateProject');
  };

  async function handleRefresh() {
    setRefreshing(false);
    const project = await api.get('/projects');
    setProjects(project.data);
    setRefreshing(false);
  }

  return (
    <>
      <NavigationEvents onDidFocus={() => handleRefresh()} />
      <Container>
        <CreateButtonContainer>
          <CreateButton onPress={handleCreateProject}>
            <MaterialIcon name="add-circle-outline" color="#fff" size={32} />
            <CreateText>Criar um Projeto</CreateText>
          </CreateButton>
        </CreateButtonContainer>

        {loading ? (
          <LoadingContainer>
            <ActivityIndicator color="#333" size="large" />
          </LoadingContainer>
        ) : (
          <Projects
            data={projects}
            onRefresh={() => handleRefresh()}
            refreshing={refreshing}
            keyExtractor={project => String(project.id)}
            renderItem={({ item }) => (
              <ProjectCard
                title={item.name}
                image={item.image.path}
                color={item.color}
                updates={item.updates}
              />
            )}
          />
        )}
      </Container>
    </>
  );
};

MyProjects.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

MyProjects.navigationOptions = {
  title: 'Meus Projetos',
};

export default MyProjects;
