import React, { useContext } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Context } from '../context/BlogContext'

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Create screen </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
