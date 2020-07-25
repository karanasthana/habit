import React from 'react';
import { TextInput } from 'react-native'
import PropTypes from 'prop-types';

export default function CustomTextInput(props){
    return  <TextInput 
                { ...props }
                style={ props.style }
            />
}

// CustomTextInput.propTypes = {
//     style: PropTypes.any,
// }

// CustomTextInput.defaultProps = {
//     style: {},
// }