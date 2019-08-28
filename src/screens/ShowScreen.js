import React, { useContext } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'
import { Context } from '../context/BlogContext'

export default function ShowScreen({ navigation }) {
  const { state } = useContext(Context)

  const blogPost = state.find(
    blogPost => blogPost.id === navigation.getParam('id')
  )

  return (
    <View>
      <Text>{blogPost.title} </Text>
      <Text>{blogPost.content} </Text>
    </View>
  )
}

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Edit', { id: navigation.getParam('id') })
        }
      >
        <EvilIcons name="pencil" style={styles.headerRight} />
      </TouchableOpacity>
    ),
  }
}

const styles = StyleSheet.create({
  headerRight: {
    marginRight: 10,
    fontSize: 35,
  },
})
