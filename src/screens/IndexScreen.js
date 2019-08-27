import React, { useContext } from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import { Context } from '../context/BlogContext'

export default () => {
  const { state, addBlogPost } = useContext(Context)

  return (
    <View style={styles.container}>
      <Text>index screen</Text>
      <Button title="Add" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={post => post.title}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
