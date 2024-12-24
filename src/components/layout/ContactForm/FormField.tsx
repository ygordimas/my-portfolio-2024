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
      <div className="p-0.5 w-full bg-gradient-to-t from-accents-light via-paper-regular to-paper-light rounded-lg">
        <input
          className={fieldStyles}
          type={type}
          placeholder={placeholder}
          {...register(name)}
        />
      </div>
      {/* {error && <span className="text-red-500">{error.message}</span>} */}
    </>
  );
};

export default FormField;
