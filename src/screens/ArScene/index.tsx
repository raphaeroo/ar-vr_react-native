import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'

import { ViroARScene, ViroText, ViroConstants, ViroARSceneNavigator } from '@viro-community/react-viro'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center'
  }
})

const Scene = () => {
  const [text, setText] = useState('Initializing AR...')

  function onInitialized(state, reason) {
    console.log('guncelleme', state, reason)
    if (state === ViroConstants.TRACKING_NORMAL) {
      setText('Hello World!')
    } else if (state === ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }

  useEffect(() => {
    console.log('RODOU')
  }, [])

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroText
        text={text}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -2]}
        style={styles.helloWorldTextStyle}
      />
    </ViroARScene>
  )
}

export const ArSceneScreen = () => (
  <ViroARSceneNavigator
    autofocus={true}
    initialScene={{
      scene: Scene
    }}
    style={styles.container}
  />
)

ArSceneScreen.displayName = 'ArSceneScreen'
