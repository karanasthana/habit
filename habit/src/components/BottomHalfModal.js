import React from 'react';
import {Button, Text, View} from 'react-native';
import Modal from 'react-native-modal';
 
export default function BottomHalfModal() {
  
    return (
        <View style={{flex: 1}}>
            <Modal isVisible={true}>
                <View style={{flex: 1}}>
                    <Text>Hello!</Text>
                </View>
            </Modal>
        </View>
    );
}