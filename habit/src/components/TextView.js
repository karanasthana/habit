import React from 'react';
import { StyleSheet, Text } from 'react-native';

// This is to ensure same UI of all Texts across apps. (We can style this view to potray the styling across the app)
export default function TextView(props) {
  return (
    <Text
      numberOfLines={props.numberOfLines}
      style={[styles.fontFamily, props.style]}>
      {props.text}
    </Text>
  );
}

const styles = StyleSheet.create({
  fontFamily: 'Arial',
});
