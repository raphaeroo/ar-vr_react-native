import React from 'react'
import { StyleSheet } from 'react-native'

import { ViroARScene, Viro3DObject, ViroConstants, ViroARSceneNavigator } from '@viro-community/react-viro'

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
  function onInitialized(state, reason) {
    console.log('guncelleme', state, reason)
    if (state === ViroConstants.TRACKING_NORMAL) {
      console.log('INICIALIZANDO')
    } else if (state === ViroConstants.TRACKING_NONE) {
      console.log('ERROR')
    }
  }

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <Viro3DObject
        source={require('../../assets/3d/olaf.obj')}
        type="OBJ"
        position={[0, 0, -1]}
        scale={[1, 1, 1]}
      />
    </ViroARScene>
  )
}

export const ArObjectSceneScreen = () => (
  <ViroARSceneNavigator
    autofocus={true}
    initialScene={{
      scene: Scene
    }}
    style={styles.container}
  />
)

ArObjectSceneScreen.displayName = 'ArObjectSceneScreen'
