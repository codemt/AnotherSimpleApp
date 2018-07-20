import React, { Component } from 'react'
import { 
Dimensions, 
View, 
Image, 
StyleSheet, 
TextInput } from 'react-native';
import {  Button , Text , Content } from 'native-base';
import fire from '../config/fire';
var window = Dimensions.get('window');
class SignOut extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }
  render() {
    return (
        <View style={styles.container}> 
        <Image source={require('../../images/classlogo.png')} style={[styles.title]} />
        <Text style={{fontSize:20, fontStyle:'italic',color:'grey'}}>    </Text>
            <Button
                onPress={this.logout}
                title="Login"
                color="#3498db"
                style={{alignSelf: 'center',marginTop:10,width:100}}
                info>
                <Text>Logout</Text>
            </Button>
            
        </View>
    )
  }
}
export default SignOut;
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
