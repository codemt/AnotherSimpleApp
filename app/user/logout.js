import React, { Component } from 'react'
import { 
Dimensions, 
View, 
Image, 
StyleSheet, 
TextInput, 
Text, 
Button } from 'react-native';
import fire from '../config/fire';
var window = Dimensions.get('window');
class Logout extends Component {
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
        <Text style={{fontSize:20, fontStyle:'italic',color:'grey'}}>   </Text>
            <Button
                onPress={this.logout}
                title="Logout"
                color="#3498db"
            />
        </View>
    )
  }
}
export default Logout;
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
