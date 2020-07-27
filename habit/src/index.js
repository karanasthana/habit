import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Login from './containers/login/login'

export default function App(props) {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});