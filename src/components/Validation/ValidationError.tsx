import React from 'react'
import { ErrorMessage } from "react-hook-form";

const ValidationError = (props: any) => {
  const { valError, fieldName } = props;
  return (
    <ErrorMessage errors={valError} name={fieldName}>
    {({ messages }) =>
      messages &&
      Object.entries(messages).map(([type, message]) => (
        <p key={type}>{message}</p>
      ))
    }
  </ErrorMessage>
   )
 }

export default ValidationError;