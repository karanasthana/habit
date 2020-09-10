import React from 'react';
import { View, Text} from 'react-native'
import CustomTextInput from '../../components/TextInput'
import Header from '../../components/Header'
import * as CONSTANTS from '../../utils/string_constants'
import {Button} from 'react-native-elements'
import commonStyles from '../../styles/common'
import {connect} from 'react-redux';

const Signup = (props) => {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [gender, setGender] = React.useState('');
	const [firstname, setFirstname] = React.useState('');
	const [lastname, setLastname] = React.useState('');

	const handleSignup = () => {
		let reqBody = {
				first_name: firstname,
				last_name: lastname,
				email,
				gender,
				password
		}
		props.screenProps.userActions.signup(reqBody).then(res => console.log(res)) 
	}

    return(
			<View style={commonStyles.page}>
				{/* TODO AYUSHI- 16-08-2020 add an image here and a pretty background */}
				<Header onPress={() => props.navigation.goBack()}/>
				<Text>{CONSTANTS.SIGNUP}</Text>
				<CustomTextInput 
					placeholder = {CONSTANTS.FIRSTNAME}
					value = {firstname}
					onChangeText = { value => setFirstname(value) }
				/>
				<CustomTextInput 
					placeholder = {CONSTANTS.LASTNAME}
					value = {lastname}
					onChangeText = { value => setLastname(value) }
				/>
				<CustomTextInput 
					placeholder = {CONSTANTS.EMAIL}
					value = {email}
					onChangeText = { value => setEmail(value) }
				/> 
				<CustomTextInput 
					placeholder = {CONSTANTS.GENDER}
					value = {gender}
					onChangeText = { value => setGender(value) }
				/> 
				{/* TODO AYUSHI- 16-08-2020 make this a dropdown */}
				<CustomTextInput 
					placeholder = {CONSTANTS.PASSWORD}
					value = {password}
					secureTextEntry={true}
					onChangeText = { value => setPassword(value) }
				/>
				{/* TODO AYUSHI- 16-08-2020 create a showPassword and add a confirm password field */}
				<Button
					title= {CONSTANTS.SIGNUP}
					type="outline"
					onPress= { handleSignup }
				/>

		</View>
    )
}

export default connect()(Signup)
