import React from 'react';
import { View } from 'react-native'
import CustomTextInput from '../../components/TextInput'
import * as CONSTANTS from '../../utils/string_constants'

import styles from '../../styles/common'

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            password: ''
        }
    }
    render(){
        return(
            <View style={styles.loginContainer}>
                <CustomTextInput 
                    // placeholder = {CONSTANTS.FIRSTNAME}
                    value = {this.state.firstname}
                    onChangeText = { value => this.setState({firstname: value}) }
                />
                {/* <CustomTextInput 
                    placeholder = {CONSTANTS.LASTNAME}
                    value = {this.state.lastname}
                    onChangeText = { value => this.setState({lastname: value}) }
                />
                <CustomTextInput 
                    placeholder = {CONSTANTS.PASSWORD}
                    value = {this.state.password}
                    secureTextEntry={true}
                    onChangeText = { value => this.setState({password: value}) }
                /> */}

            </View>
        )
    }
}