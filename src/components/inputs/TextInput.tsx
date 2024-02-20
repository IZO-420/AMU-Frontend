import React from 'react';
import {View} from 'react-native';
import {TextInput as NativeTextInput} from 'react-native';
import { InputPropsTypes } from '../../types/components/Inputs';

function TextInput({formik,name}:InputPropsTypes): React.JSX.Element {
  return (
    <View style={{display:'flex',justifyContent:'flex-start',alignItems:'center',flexDirection:'row'}}>
<NativeTextInput
  onBlur={formik.handleBlur(name)}
  onChangeText={formik.handleChange(name)}
  value={formik.values[name]}
  />
    </View>
  
);
}

export default TextInput;
