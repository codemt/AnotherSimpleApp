import React, { Component } from 'react'
import { 
Dimensions, 
View, 
Image, 
StyleSheet, 
TextInput, 
Text, 
Button } from 'react-native';
import fire from './config/fire';
var window = Dimensions.get('window');
class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
          email: '',
          password: ''
        };
      }
      
      login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).catch((error) => {
            console.log(error);
            alert(error);
          });
          console.log('logged in..');
      }
    
      signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).then((u)=>{console.log(u)})
        .catch((error) => {
            console.log(error);
            alert(error);
          })
      }
  render() {
    return (
        <View style={styles.container}> 
        <Image source={require('../images/classlogo.png')} style={[styles.title]} />
        <Text style={{fontSize:20, fontStyle:'italic',color:'grey'}}> Login to Continue  </Text>
            <TextInput
            style={{width:300}}
            value={this.state.email} 
            onChangeText={email => this.setState({ email })}  
            ref="email" 
            type="email" placeholder="Email"
            />
            <TextInput
            style={{width:300}}
            value={this.state.password} 
            onChangeText={password => this.setState({ password })} 
            ref="password" 
            type="password" 
            placeholder="Password"
            />
            <Button
                onPress={this.login}
                title="Login"
                color="#3498db"
            />
        </View>
    )
  }
}
export default Login;
const styles = StyleSheet.create({

    container: {

            backgroundColor:'#fff',
            flex: 1,
            alignItems:'center',
            justifyContent:'center'



    },
    title: {

            resizeMode : 'contain',
            alignSelf: 'center',
            width: 400
            


    }




})
