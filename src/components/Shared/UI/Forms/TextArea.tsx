import { ReactNode } from 'react';
import {
  FieldValues,
  FieldPath,
  UseFormRegister,
  FieldErrors,
} from 'react-hook-form';

type TextAreaProps<TFieldValues extends FieldValues> = {
  name: FieldPath<TFieldValues>;
  register: UseFormRegister<TFieldValues>;
  placeholder: string;
  errors: FieldErrors<TFieldValues>;
};

const TextArea = <TFieldValues extends FieldValues>({
  name,
  register,
  placeholder,
  errors,
}: TextAreaProps<TFieldValues>) => (
  <div className="flex h-full flex-col gap-2">
    <textarea
      {...register(name)}
      placeholder={placeholder}
      rows={10}
      className="font-montserrat w-full rounded-md border border-border bg-foreground pl-2 text-lg font-light text-text transition-all focus-within:border-2 hover:border-2 hover:border-neutral-400 focus:border-neutral-600 focus:outline-none"
    />
    {errors[name] && (
      <p className="text-red-500">{errors[name]?.message as ReactNode}</p>
    )}
  </div>
);

export default TextArea;
