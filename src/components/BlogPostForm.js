import React, { useContext, useState } from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'
// import { Context } from '../context/BlogContext'

export default function BlogPostForm({ initialValues, onSubmit }) {
  const [title, setTitle] = useState(initialValues.title)
  const [content, setContent] = useState(initialValues.content)

  return (
    <View>
      <Text style={styles.label}>Title: </Text>
      <TextInput
        value={title}
        onChangeText={text => setTitle(text)}
        style={styles.input}
      />
      <Text style={styles.label}>Content: </Text>
      <TextInput
        value={content}
        onChangeText={text => setContent(text)}
        style={styles.input}
      />
      <Button title="Save Blog Post" onPress={() => onSubmit(title, content)} />
    </View>
  )
}

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
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
