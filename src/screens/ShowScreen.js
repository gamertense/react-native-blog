import React, { useContext } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Context } from '../context/BlogContext'

export default ({ navigation }) => {
  const { state } = useContext(Context)

  const blogPost = state.find(
    blogPost => blogPost.id === navigation.getParam('id')
  )

  return (
    <View style={styles.container}>
      <Text>{blogPost.title} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
