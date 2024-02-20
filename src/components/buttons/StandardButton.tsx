import React from 'react';
import {ButtonProps, Button as NativeButton} from 'react-native';
import { ButtonPropType } from '../../types/components/buttons';

function StandardButton({title,onPress}:ButtonProps & ButtonPropType): React.JSX.Element {
  return (
<NativeButton title={title} onPress={onPress}/>
);
}

export default StandardButton;
