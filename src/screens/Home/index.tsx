import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 60
  },
  btn: {
    width: '100%',
    height: 50,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10
  },
  btnLabel: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
})

const nav = ['ArObjectSceneScreen', 'ArSceneScreen']

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {nav.map((item) => (
        <TouchableOpacity
          key={item}
          style={styles.btn}
          onPress={() => navigation.navigate(item)}>
          <Text style={styles.btnLabel}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

HomeScreen.displayName = 'HomeScreen'
