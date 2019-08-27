import React, { useContext } from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import { BlogContext } from '../context/BlogContext'

export default () => {
  const { blogPosts, addBlogPost } = useContext(BlogContext)

  return (
    <View style={styles.container}>
      <Text>index screen</Text>
      <Button title="Add" onPress={addBlogPost} />
      <FlatList
        data={blogPosts}
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
