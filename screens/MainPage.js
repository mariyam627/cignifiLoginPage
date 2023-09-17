import { StyleSheet, View, Image } from 'react-native'
import React, { useEffect } from 'react'

const MainPage = ({navigation}) => {

    const navigate=()=>{
        navigation.navigate("Login")
    }

    setTimeout(navigate,5000)
  return (
    <View style={{width: '100%' , height: '120%',backgroundColor: '#093592'}}>
    <Image source={require('../images/cignifi.jpg')}></Image>
    </View>
  )
}

export default MainPage

const styles = StyleSheet.create({})