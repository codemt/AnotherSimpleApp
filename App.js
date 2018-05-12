/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  ScrollView
} from 'react-native';
import Forwards from './app/forwards';
import Backwards from './app/backwards';
import First from './app/videos/first';
import Second from './app/videos/second';
import HomePage from './app/homepage';
import Reverse from './app/videos/reverse';
import Horizontal from './app/videos/horizontal';
import MajorScales from './app/videos/majorscales';
import AllScales from './app/videos/allscales';
import Legatos from './app/videos/legatos';
import { Container } from 'native-base';
import { Actions , Router , Scene } from 'react-native-router-flux';

 export default class App extends Component {
  render() {
    return (
   
      <Container>
              <Router>
          <Scene key="root">
          <Scene key="homepage" component={HomePage} title="Welcome to Guitar Basics" initial />
            <Scene key="forwards" component={First} title=" Only Forwards" />
            <Scene key="backwards" component={Second} title="Forwards and Backwards" />
            <Scene key="reverse" component={Reverse} title="Reverse" />
            <Scene key="horizontal" component={Horizontal} title="Horizontal and Vertical" />
            <Scene key="majorscales" component={MajorScales} title="Major Scaless" />
            <Scene key="allscales" component={AllScales} title="All Scaless" />
            <Scene key="legatos" component={Legatos} title="Legatos" />
            
          </Scene>
          </Router>
        
        </Container> 
      
     
      
    );
  }
}
