import {View, Text , Image, TextInput, Button,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'

export default function SignupScreen({navigation}) {
  return (
        <View style={{ backgroundColor: 'white', flex: 1, padding: '5%'}}>
          <Image source={require('../images/white.jpg')} style={{ flex: 0, width: '100%' }} />
    
          <Text style={{ color: 'black', backgroundColor: 'white', paddingLeft: '5%', fontSize: 25, fontWeight: '500' }}>
            Create your Account </Text>
    
          <TextInput
            placeholder='Email'
            style={{
              color: 'grey',
              borderBottomColor: 'black',
              borderWidth: 1,
              backgroundColor: 'white',
              margin: '4%',
              fontSize: 25,
              fontWeight: '300',
              shadowColor: 'grey',
              shadowOpacity: 0.8,
              shadowRadius: 2,
              shadowOffset: { width: -2, height: 4 },
            }}
          />
    
          <TextInput
            placeholder='Password'
            secureTextEntry
            style={{
              color: 'grey',
              borderBottomColor: 'black',
              borderWidth: 1,
              backgroundColor: 'white',
              margin: '4%',
              fontSize: 25,
              fontWeight: '300',
            }}
          />

          <TextInput
            placeholder='Confirm Password'
            secureTextEntry
            style={{
              color: 'grey',
              borderBottomColor: 'black',
              borderWidth: 1,
              backgroundColor: 'white',
              margin: '4%',
              fontSize: 25,
              fontWeight: '300',
            }}
          />
    <TouchableOpacity style={styles.btn} onPress={()=>{
        navigation.navigate("Dashborad")
      }}><Text style={styles.texthead}>SignIn </Text></TouchableOpacity>
    
    <View style={{flexDirection:"row", justifyContent:"center",padding: 20,}}>
    <Text > -already have an account? </Text>
     <Text style={{color:"#093592"}} onPress={()=>navigation.navigate("SignupScreen")}>
    login</Text>
            </View>
            </View>


  )
}



const styles = StyleSheet.create({

    btn:{
      borderWidth: 1,
      borderColor: "blue",
      padding: 12,
     backgroundColor:"blue",
     borderRadius: 5,
   marginHorizontal: 15,
   marginTop: 10,
    },
    texthead:{
      color: "#fff",
      textAlign: "center"
    }
  });
  