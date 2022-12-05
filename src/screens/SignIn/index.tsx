import React from 'react';
import { StatusBar } from 'react-native';
import { Text } from '../../components/Text';

import {
  Container,
  Header,
  Main,
} from './styles';

export function SignIn() {
  <StatusBar
  translucent
  backgroundColor="transparent"
  barStyle="light-content"
  />

  return (
    <Container
      source={require('../../assets/images/login.jpg')}
    >
      <Header></Header>

    <Main>
    <Text size={34}>Organize ao máximo o {'\n'} seu treino e aproveite {'\n'} o seu rendimento</Text>
    </Main>

    </Container>
  );
}
