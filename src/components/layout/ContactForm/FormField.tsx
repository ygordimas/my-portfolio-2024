import React from 'react';
import { FormFieldProps } from '../../../utils/types/types';

import { fieldStyles } from '.';

const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
}) => {
  return (
    <>
      <input
        className={fieldStyles}
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />
      {/* {error && <span className="text-red-500">{error.message}</span>} */}
    </>
  );
};

export default FormField;
