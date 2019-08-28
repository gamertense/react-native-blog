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

const IndexScreen = ({ navigation }) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context)

  return (
    <View>
      {state.length === 0 ? (
        <Button
          title="Add Post"
          onPress={() => navigation.navigate('Create')}
        />
      ) : null}

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

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" style={styles.headerRight} />
      </TouchableOpacity>
    ),
  }
}

const styles = StyleSheet.create({
  headerRight: {
    marginRight: 10,
    fontSize: 30,
  },
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

export default IndexScreen
