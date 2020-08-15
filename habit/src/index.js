import React from 'react';
import { StyleSheet, View } from 'react-native';
import Login from './containers/login/LoginScreen';

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