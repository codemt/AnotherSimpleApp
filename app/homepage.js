import React , { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  PixelRatio,
  Dimensions,
  Platform,
  View, 
  Text, 
  Image,
  ImageBackground
} from 'react-native';
import YouTube, { YouTubeStandaloneIOS, YouTubeStandaloneAndroid } from 'react-native-youtube';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
class Home extends Component {
  state = {
    isReady: false,
    status: null,
    quality: null,
    error: null,
    isPlaying: true,
    isLooping: true,
    duration: 0,
    currentTime: 0,
    fullscreen: false,
    containerMounted: false,
    containerWidth: null,
  };

  render() {
    return (
      // implemented with Text and Button as children

      <ScrollView>
        
              
            <Card
            title='Guitar Basic Lesson 1 - Only Forwards'
            image={require('../images/forwards.png')}>
            <Text style={{marginBottom: 10}}>
            “Music gives a soul to the universe, wings to the mind, flight to the imagination and life to everything.” ― Plato
            </Text>
            <Button
                onPress={ ()=> Actions.forwards()}
                icon={<Icon name='code' color='#ffffff' />}
                backgroundColor='#03A9F4'
                fontFamily='Lato'
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='VIEW NOW' >
                </Button>
            </Card>
            <Card
            title='Guitar Basic Lesson 2 - Forwards & Backwards'
            image={require('../images/backward.png')}>
            
            
            <Text style={{marginBottom: 10}}>
            “If I were not a physicist, I would probably be a musician. I often think in music. I live my daydreams in music. I see my life in terms of music.” ― Albert Einstein
            </Text>
            <Button
                onPress={ ()=> Actions.backwards()}
                icon={<Icon name='code' color='#ffffff' />}
                backgroundColor='#03A9F4'
                fontFamily='Lato'
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='VIEW NOW' >
                </Button>
            </Card>
            <Card
            title='Guitar Basic Lesson 3 - Reverse'
            image={require('../images/reverse.png')}>
            
            
            <Text style={{marginBottom: 10}}>
            “Music is a language that doesn’t speak in particular words. It speaks in emotions, and if it’s in the bones, it’s in the bones.” ― Keith Richards
            </Text>
            <Button
                onPress={ ()=> Actions.reverse()}
                icon={<Icon name='code' color='#ffffff' />}
                backgroundColor='#03A9F4'
                fontFamily='Lato'
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='VIEW NOW' >
                </Button>
            </Card>
            <Card
            title='Guitar Basic Lesson 4 - Horizontal and Vertical'
            image={require('../images/horizontal.png')}>
            
            
            <Text style={{marginBottom: 10}}>
            “One good thing about music, when it hits you, you feel no pain.” ― Bob Marley
            </Text>
            <Button
                onPress={ ()=> Actions.horizontal()}
                icon={<Icon name='code' color='#ffffff' />}
                backgroundColor='#03A9F4'
                fontFamily='Lato'
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='VIEW NOW' >
                </Button>
            </Card>
            <Card
            title='Guitar Basic Lesson 5 - 3 Major Scales'
            image={require('../images/reverse.png')}>
            
            
            <Text style={{marginBottom: 10}}>
            “Music was my refuge. I could crawl into the space between the notes and curl my back to loneliness.” ― Maya Angelou
            </Text>
            <Button
                onPress={ ()=> Actions.majorscales()}
                icon={<Icon name='code' color='#ffffff' />}
                backgroundColor='#03A9F4'
                fontFamily='Lato'
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='VIEW NOW' >
                </Button>
            </Card>
            <Card
            title='Guitar Basic Lesson 6 - All Major Scales'
            image={require('../images/allscales.png')}>
            
            
            <Text style={{marginBottom: 10}}>
            “Where words fail, music speaks.” ― Hans Christian Andersen
            </Text>
            <Button
                onPress={ ()=> Actions.allscales()}
                icon={<Icon name='code' color='#ffffff' />}
                backgroundColor='#03A9F4'
                fontFamily='Lato'
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='VIEW NOW' >
                </Button>
            </Card>
            <Card
            title='Guitar Basic Lesson 7 - Legatos'
            image={require('../images/legato.png')}>
            
            
            <Text style={{marginBottom: 10}}>
            “Music is … A higher revelation than all Wisdom & Philosophy” ― Ludwig van Beethoven
            </Text>
            <Button
                onPress={ ()=> Actions.legatos()}
                icon={<Icon name='code' color='#ffffff' />}
                backgroundColor='#03A9F4'
                fontFamily='Lato'
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='VIEW NOW' >
                </Button>
            </Card>

        </ScrollView>

    );
    
  }
}
export default Home;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  button: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'blue',
  },
  buttonTextSmall: {
    fontSize: 15,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  player: {
    alignSelf: 'stretch',
    marginVertical: 10,
  },
});
