import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'react-native-elements';

export default class CustomTextInput extends React.Component{
	contructor(props){
		// super(props);
		this.state = {
			value: this.props.value
		}
	}

	render(){
		return <Input 
			{ ...this.props }
			value = {this.state.value}
			onChangeText = { value => this.setState({value}) }
		/>
	}
}

// CustomTextInput.propTypes = {
//     style: PropTypes.any,
// }

// CustomTextInput.defaultProps = {
//     style: {},
// }