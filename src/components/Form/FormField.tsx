import React from "react";
import { FormFieldProps } from "../../types/index";

const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  disabled,
}) => {
  return (
    <div className="w-full">
      <input
        type={type}
        placeholder={placeholder}
        required={true}
        {...register(name)}
        className="w-full p-4 rounded-lg outline-none text-gray-500 bg-white/50 backdrop-blur-md shadow-lg border border-white/30"
        disabled={disabled}
      />
      {error && (
        <span className="text-start italic text-sm text-error font-semibold">
          *{error?.message}
        </span>
      )}
    </div>
  );
};

export default FormField;
