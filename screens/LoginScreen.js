import React from 'react';
import { Text, View, Image, TextInput, Button } from 'react-native';

export default function LoginScreen({navigation}) {
  return (
    <View style={{ backgroundColor: 'white', flex: 1, padding: '5%'}}>
      <Image source={require('../images/white.jpg')} style={{ flex: 0, width: '100%' }} />

      <Text style={{ color: 'black', backgroundColor: 'white', paddingLeft: '5%', fontSize: 25, fontWeight: '500' }}>
        Login to your Account
      </Text>

      <TextInput
        placeholder='Email'
        style={{
          color: 'grey',
          borderBottomColor: 'grey',
          borderWidth: 1,
          backgroundColor: 'white',
          margin: '4%',
          fontSize: 25,
          fontWeight: '300',
        }}
      />

      <TextInput
        placeholder='Password'
        secureTextEntry
        style={{
          color: 'grey',
          borderBottomColor: 'grey',
          borderWidth: 1,
          backgroundColor: 'white',
          margin: '4%',
          fontSize: 25,
          fontWeight: '300',
        }}
      />

<Button title="SignIn" backgroundcolor="#093592"
    style={{
        color: 'white',
        margin: '4%',
        padding: '10%',
        fontSize: 35,
        fontWeight: '300', 
        }} />

      <Text style={{ color: 'grey', backgroundColor: 'white', padding: '5%', fontSize: 20, fontWeight: '200', textAlign: 'center' }}>
        - or Sign in with -
      </Text>

    <View style={{flexDirection:"row",justifyContent:"space-between",paddingHorizontal:30,}}>
    <Image source={require('../images/search.png')} style={{display: 'flex', width: 50, height: 50,resizeMode: "cover",borderRadius: 25,}} />
  
    <Image source={require('../images/facebook.png')} style={{display: 'flex', width: 50, height: 50,resizeMode: "cover",borderRadius: 25,}} />
  
    <Image source={require('../images/twitter.png')} style={{display: 'flex', width: 50, height: 50,resizeMode: "cover",borderRadius: 25,}} />
    </View>
    <View style={{flexDirection:"row", justifyContent:"center",padding: 20,}}>
    <Text > - Don't have an Account? </Text>
     <Text style={{color:"#093592"}} onPress={()=>navigation.navigate("SignupScreen")}>
    SignUp</Text>
   </View>
   </View>
  );
}