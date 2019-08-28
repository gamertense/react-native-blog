import React, { useContext } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import { Context } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'

export default ({ navigation }) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context)

  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />

      <FlatList
        data={state}
        keyExtractor={post => post.title}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Show', { id: item.id })}
          >
            <View style={styles.row}>
              <Text style={styles.title}>
                {item.title} - {item.id}
              </Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather name="trash" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: 'gray',
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
})
