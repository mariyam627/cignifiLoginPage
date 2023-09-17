import { StyleSheet, Text, FlatList, View, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Dashboard({navigation}) {
  const [data, setData] = useState([])

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
.then(res=> setData(res.data))
.catch(err=>console.log(err))
  },[])

  return (
    <View style={{
        flex: 1,
        padding: 16,
      }}>
      <Text style={styles.header}>Dashboard</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.emial}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.btn} onPress={()=>{
        navigation.navigate("Login")
      }}><Text style={styles.texthead}>LogOut </Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: "center",
    color: "#000"
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
  },
  btn:{
    borderWidth: 1,
    borderColor: "blue",
    padding: 12,
   backgroundColor:"blue",
   borderRadius: 5,
  },
  texthead:{
    color: "#fff",
    textAlign: "center"
  }
});
