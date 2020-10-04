import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomHalfModal from '../../components/BottomHalfModal';

export default function HomeScreen(props) {
    return (
        <View style={{alignItems: 'center'}}>
            {/* {this.props.noHabits && <Text>You have not added any habits yet</Text>} */}
            <Text>You have not added any habits yet</Text>
            <Text>Click to add habits</Text>
            <Ionicons 
                name= 'add-circle-outline'
                size= {24}
            />

            <BottomHalfModal />
        </View>
    );
}
