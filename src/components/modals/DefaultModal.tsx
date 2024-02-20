import React from 'react';
import {Modal} from 'react-native';
import {useTranslation} from 'react-i18next';
import { ModalPropsType, ModalRefType } from '../../types/components/Modal';



const DefaultModal=React.forwardRef<ModalRefType, ModalPropsType>(({children},ref): React.JSX.Element=> {
  const {t} = useTranslation();
  const [visibility,setVisibility]=React.useState<boolean>(false)
  const open=()=>setVisibility(true)
  const close=()=>setVisibility(false)
  React.useEffect(()=>{console.log(visibility);
  },[visibility])
  React.useImperativeHandle(ref, () => ({ open, close }));
  return (
      <Modal visible={visibility} >
        {children}
        </Modal>
  );
})

export default DefaultModal
