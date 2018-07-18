import React , { Component} from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import SplashScreen from './app/SplashScreen';
import Login from './app/login';
import fire from './app/config/fire';
import DrawerPage from './app/drawer/drawer';
class Main extends Component{
    constructor(props){


        super(props);
        this.state ={ 
            
            currentScreen : 'SplashScreen',
            user : {},
        };
        console.log('Start Doing Some Tasks')
        setTimeout(()=>{
            
            console.log('Done some tasks for 3 seconds')
            this.setState({currentScreen:'App'})
        },4000)

    }
    componentDidMount(){ 

        this.authListener();
      
      }
      authListener() {
        fire.auth().onAuthStateChanged((user) => {
          //console.log(user);
          if (user) {
            this.setState({ user });
            //localStorage.setItem('user', user.uid);
          } else {
            this.setState({ user: null });
            //localStorage.removeItem('user');
          }
        });
      }
    render(){

        const {currentScreen} = this.state;
        let mainScreen = currentScreen === 'SplashScreen' ? <SplashScreen /> :  this.state.user ? ( <DrawerPage /> )  : (<Login /> );
        return mainScreen;


    }




}
AppRegistry.registerComponent('BasicLessonsApp', () => Main);
