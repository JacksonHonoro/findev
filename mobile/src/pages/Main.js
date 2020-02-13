import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {MapView} from 'react-native-maps';

export default function Main() {
  useEffect(() => {
    async function loadInitialPosition() {}

    loadInitialPosition();
  }, []);

  return <View style={styles.map} />;
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
