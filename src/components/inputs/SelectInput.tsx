import React from 'react';
import {Button, Modal, Text, Pressable, View} from 'react-native';
import {SelectInputPropsTypes} from '../../types/components/Inputs';
import CheckGlyph from '../icons/CheckGlyph.svg';

function SelectInput({
  formik,
  name,
  list,
  visibility,
  close,
  open,
}: SelectInputPropsTypes): React.JSX.Element {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <Button title="Select Something" onPress={open} />
      <Modal visible={visibility} transparent>
        <Pressable
          onPress={close}
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <Pressable
            onPress={null}
            style={{width: '50%', height: '50%', backgroundColor: '#fff', borderRadius:5,paddingVertical:5,paddingHorizontal:5}}>
            {list?.map(item => (
              <Pressable
                key={item.value}
                onPress={() => {
                  formik.setFieldValue(name, item.value);
                  close();
                }}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                }}
                >
                <Text style={{color: '#000'}}>{item.label}</Text>
                <CheckGlyph/>
              </Pressable>
            ))}
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}

export default SelectInput;
