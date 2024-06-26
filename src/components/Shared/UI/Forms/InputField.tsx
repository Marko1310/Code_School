import { ReactNode } from 'react';
import {
  FieldValues,
  FieldPath,
  UseFormRegister,
  FieldErrors,
} from 'react-hook-form';

type InputFieldProps<TFieldValues extends FieldValues> = {
  name: FieldPath<TFieldValues>;
  register: UseFormRegister<TFieldValues>;
  placeholder: string;
  errors: FieldErrors<TFieldValues>;
  type?: React.HTMLInputTypeAttribute | undefined;
};

const InputField = <TFieldValues extends FieldValues>({
  name,
  register,
  placeholder,
  errors,
  type,
}: InputFieldProps<TFieldValues>) => (
  <div className="flex flex-col gap-2">
    <input
      type={type}
      {...register(name)}
      placeholder={placeholder}
      className="font-montserrat h-14 w-full rounded-md border border-border bg-foreground pl-2 text-lg font-light text-text transition-all focus-within:border-2 hover:border-2 hover:border-neutral-400 focus:border-neutral-600 focus:outline-none"
    />
    {errors[name] && (
      <p className="text-red-500">{errors[name]?.message as ReactNode}</p>
    )}
  </div>
);

export default InputField;
