import React from 'react';
import { useForm } from "react-hook-form";
import ValidationError from '../../Validation/ValidationError';

const InputItem = (props: any) => {
  const { register, triggerValidation} = useForm({ validateCriteriaMode: "all"});

  const getClassName = (fieldName: any) => {
    return (errors[fieldName] ? `${fieldName}  invalid` : `${fieldName} valid`);
  }

  const getDivClass = (index: number) => {
    return index % 2 ===0 ? 'form-element even-field' : 'form-element odd-field';
  }

  const { index, item, errors }  = props;
  return (
    <div></div>
   )
 }

export default InputItem;