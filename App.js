import React from 'react';
import AppLoading from 'expo-app-loading';
import { Container, Text, Header, Left, Body, Icon, Title, Button, Right, Content, Footer, FooterTab } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet } from 'react-native';

import Animated, { useAnimatedStyles } from 'react-native-reanimated';

import NotGo from './assets/images/notgo.jpg';

import PlaceList from './components/PlaceList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
        {/*
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Oh The Places You Won't GO</Title>
          </Body>
          <Right />
        </Header>
    */}
        <Animated.View>
          <Image source={NotGo} style={styles.headerImage} />
        </Animated.View>
        <Content>
          <PlaceList />
        </Content>
        {/*
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
  */}
      </Container>
    );
  }
}

const styles = StyleSheet.create( {
  headerImage: {
    width: '100%',
    resizeMode: 'stretch',
    height: 200,
  }
})

const animatedStyles = useAnimatedStyles(() => {
  return {
    
  }
});
