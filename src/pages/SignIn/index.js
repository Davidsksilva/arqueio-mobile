import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import logo from '~/assets/logo.png';

import { signInRequest } from '~/store/modules/auth/actions';

import {
  Container,
  Form,
  FormInput,
  SignLink,
  SignLinkText,
  SubmitButton,
} from './styles';

const SignIn = ({ navigation }) => {
  const dispatch = useDispatch();

  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  const loading = useSelector(state => state.auth.loading);

  return (
    <Container>
      <Image source={logo} style={{ height: 150, width: 150 }} />
      <SignLinkText>Bem vindo à Arqueio!</SignLinkText>
      <Form>
        <FormInput
          icon="mail-outline"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite seu e-mail"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          value={email}
          onChangeText={setEmail}
        />

        <FormInput
          icon="lock-outline"
          secureTextEntry
          placeholder="Digite sua senha"
          ref={passwordRef}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={password}
          onChangeText={setPassword}
        />

        <SubmitButton loading={loading} onPress={handleSubmit}>
          Entrar
        </SubmitButton>
      </Form>

      <SignLink onPress={() => navigation.navigate('SignUp')}>
        <SignLinkText>Criar conta gratuita</SignLinkText>
      </SignLink>
    </Container>
  );
};

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default SignIn;
