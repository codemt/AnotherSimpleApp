import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  PixelRatio,
  Dimensions,
  Platform,
} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import YouTube, { YouTubeStandaloneIOS, YouTubeStandaloneAndroid } from 'react-native-youtube';

export default class Reverse extends React.Component {
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
               <View>
                  <YouTube
                    apiKey="AIzaSyBF6_Yez2VsGeL4AXNo-m7qqJgQlSXtDR4"
                    videoId="1iachcWOlN4"   // The YouTube video ID
                    play={true}             // control playback of video with true/false
                    fullscreen={false}       // control whether the video should play in fullscreen or inline
                    loop={true}             // control whether the video should loop when ended

                    onReady={e => this.setState({ isReady: true })}
                    onChangeState={e => this.setState({ status: e.state })}
                    onChangeQuality={e => this.setState({ quality: e.quality })}
                    onError={e => this.setState({ error: e.error })}

                    style={{ alignSelf: 'stretch', height: 300 }}
                  />
                   <Card
            title='Guitar Basic Lesson 3 - Only Reverse'
            >
            <Text style={{marginBottom: 10}}>
                Reverse - No Need to Play Forwards to do the reverse movement. This technique helps to  play really fast parts of any song easily.
            </Text>
            
            </Card>
            
          </View>


    );
    
  }
}
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
