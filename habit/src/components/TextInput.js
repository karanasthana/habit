import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'native-base';

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