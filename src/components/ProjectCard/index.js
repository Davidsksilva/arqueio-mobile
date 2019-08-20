import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  ProjectImage,
  ProjectTitle,
  UpdateText,
  ProjectBanner,
  UpdateContainer,
  Left,
  Right,
} from './styles';

import globalStyle from '~/styles/global';

const Project = ({ image, color, title, updates }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container>
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: '#eee',
            flexDirection: 'column-reverse',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
          }}
        >
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={{ color: globalStyle.primary }}>CANCELAR</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Text style={{ color: globalStyle.primary }}>SALVAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <ProjectImage source={{ uri: image }}>
        <ProjectBanner color={color}>
          <ProjectTitle>{title}</ProjectTitle>
          <UpdateContainer>
            <Left>
              <MaterialIcon name="lens" size={10} color="#fff" />
              <UpdateText>{updates} Atualizações</UpdateText>
            </Left>
            <Right>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <MaterialIcon name="more-vert" size={24} color="#fff" />
              </TouchableOpacity>
            </Right>
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
