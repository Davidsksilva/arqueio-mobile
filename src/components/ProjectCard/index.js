import React from 'react';
import PropTypes from 'prop-types';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  ProjectImage,
  ProjectTitle,
  UpdateText,
  ProjectBanner,
  UpdateContainer,
} from './styles';

const Project = ({ image, color, title, updates }) => {
  return (
    <Container>
      <ProjectImage source={{ uri: image }}>
        <ProjectBanner color={color}>
          <ProjectTitle>{title}</ProjectTitle>
          <UpdateContainer>
            <MaterialIcon name="lens" size={10} color="#fff" />
            <UpdateText>{updates} Atualizações</UpdateText>
          </UpdateContainer>
        </ProjectBanner>
      </ProjectImage>
    </Container>
  );
};

Project.defaultProps = {
  updates: 0,
  color: '#666',
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  updates: PropTypes.number,
  image: PropTypes.string.isRequired,
};

export default Project;
