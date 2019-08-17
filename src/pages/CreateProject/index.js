import React, { useState } from 'react';
import PropTypes from 'prop-types';

import api from '~/services/api';

import {
  Container,
  ContentBox,
  ContentText,
  CreateButton,
  NameInput,
  CreateText,
} from './styles';

const CreateProject = ({ navigation }) => {
  const [name, setName] = useState('');

  async function handleCreateProject() {
    const project = {
      name,
      cover_id: 7,
      description: 'teste',
    };

    await api.post('/projects', project);

    navigation.navigate('MyProjects');
  }
  return (
    <Container>
      <ContentBox>
        <ContentText>Nomeie o seu projeto</ContentText>
        <NameInput
          value={name}
          onChangeText={setName}
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="send"
          onSubmitEditing={handleCreateProject}
        />
        <CreateButton onPress={() => handleCreateProject()}>
          <CreateText>Criar</CreateText>
        </CreateButton>
      </ContentBox>
    </Container>
  );
};

CreateProject.navigationOptions = {
  title: 'Criar Projeto',
};

CreateProject.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default CreateProject;
