import { StyleSheet, Text, FlatList, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function dashboard() {
  const [data, setData] = useState([])

useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
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
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
  },
});