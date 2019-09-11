import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

/* import { NavigationEvents } from 'react-navigation';
import { ActivityIndicator } from 'react-native';
import ProjectCard from '~/components/ProjectCard';
import ButtonInput from '~/components/ButtonInput';
import globalStyle from '~/styles/global';
import { Container, Projects, LoadingContainer } from './styles';

import api from '~/services/api'; */

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

import underConst from '~/assets/under_construction.png';
import { Container, Image, Title } from './styles';

const MyProjects = () => {
  return (
    <Container>
      <Image source={underConst} />
      <Title>Página em construção</Title>
    </Container>
  );

  /* const [projects, setProjects] = useState([]);
  const [name, setName] = useState('');
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

  async function handleRefresh() {
    setRefreshing(false);
    const project = await api.get('/projects');
    setProjects(project.data);
    setRefreshing(false);
  }

  async function handleCreateProject() {
    const project = {
      name,
      cover_id: 7,
      description: 'teste',
    };

    await api.post('/projects', project);

    fetchProjects();
  }

  return (
    <>
      <NavigationEvents onDidFocus={() => handleRefresh()} />
      <Container>
        <ButtonInput
          onPress={handleCreateProject}
          iconName="add"
          iconColor={globalStyle.primary}
          value={name}
          onChangeText={setName}
          placeholder="Crie um novo projeto..."
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="send"
          onSubmitEditing={handleCreateProject}
        />

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
  */
};

MyProjects.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

MyProjects.navigationOptions = {
  title: 'Meus Projetos',
  headerStyle: {
    backgroundColor: '#fff',
  },
};

export default MyProjects;
