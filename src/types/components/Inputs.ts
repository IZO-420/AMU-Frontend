import {
    FormikValues,
    FormikProps
  } from 'formik';


export interface InputPropsTypes{
    formik:FormikProps<FormikValues>,
    name:string
}

export interface SelectInputPropsTypes extends InputPropsTypes{
  visibility:boolean,
  list:{label:string,value:number|string}[],
  close:()=>void
  open:()=>void
}