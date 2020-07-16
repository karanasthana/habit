import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App(props) {
  return (
    <View style={styles.container}>
      <Text>Hello Habit</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});