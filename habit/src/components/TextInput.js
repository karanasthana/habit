import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'react-native-elements';

export default function CustomTextInput(props){
  return <Input 
			{ ...props }
		/>
}

// CustomTextInput.propTypes = {
//     style: PropTypes.any,
// }

// CustomTextInput.defaultProps = {
//     style: {},
// }