import React from 'react';
import {Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import TextInput from '../components/inputs/TextInput';
import {Formik} from 'formik';
import DefaultModal from '../components/modals/DefaultModal';
import {ModalRefType} from '../types/components/Modal';
import StandardButton from '../components/buttons/StandardButton';
import {StoreType} from '../types/helpers/redux/states';
import {connect} from 'react-redux';
import {useDispatch} from 'react-redux';
import {FetchData} from '../helpers/api/queries/queryExample';
import Keys from '../helpers/api/queries/Keys';
import {
  useQuery,
} from '@tanstack/react-query'
import SelectInput from '../components/inputs/SelectInput';

function Home({language}: StoreType): React.JSX.Element {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const data=useQuery({ queryKey: [Keys.TEST], queryFn:FetchData})
  const modalRef = React.useRef<ModalRefType>(null);
  const [visibility,setVisibility]=React.useState(false)
  return (
    <View>
      <Formik
        initialValues={{test: ''}}
        onSubmit={(values: any) => modalRef?.current?.open()}>
        {formik => (
          <View>
            <TextInput formik={formik} name="test" />
            <StandardButton onPress={formik.handleSubmit} title="Submit" />
            <SelectInput open={()=>setVisibility(true)} close={()=>setVisibility(false)} visibility={visibility} formik={formik} name='select' list={[{label:'test',value:'test'}]}/>
          </View>
        )}
      </Formik>
      <DefaultModal ref={modalRef}>
        <View>
          <Text style={{color: '#000'}}>{t`home`}</Text>
          <StandardButton
            onPress={() => {
              dispatch({
                type: 'updateLanguage',
                payload: 'ar',
              });
              console.log(language);
              console.log(data);
              modalRef?.current?.close();
            }}
            title="close"
          />
        </View>
      </DefaultModal>
    </View>
  );
}
const mapStateToProps = (state: StoreType) => ({
  language: state.language,
});
export default connect(mapStateToProps)(Home);
