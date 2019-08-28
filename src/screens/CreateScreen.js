import React, { useContext, useState } from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'
import { Context } from '../context/BlogContext'

export default ({ navigation }) => {
  const { addBlogPost } = useContext(Context)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleAddBtn = () => {
    addBlogPost(title, content, () => navigation.navigate('Index'))
  }

  return (
    <View>
      <Text style={styles.label}>Enter Title </Text>
      <TextInput
        value={title}
        onChangeText={text => setTitle(text)}
        style={styles.input}
      />
      <Text style={styles.label}>Enter Content: </Text>
      <TextInput
        value={content}
        onChangeText={text => setContent(text)}
        style={styles.input}
      />
      <Button title="Add Blog Post" onPress={handleAddBtn} />
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    margin: 15,
    fontSize: 18,
    marginBottom: 15,
  },
  input: {
    fontSize: 15,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 13,
    padding: 5,
    marginHorizontal: 15,
    borderRadius: 5,
  },
})
