import { ReactNode } from 'react';
import {
  FieldErrors,
  FieldPath,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form';
import { Tables } from '../../../../types/database.types';

type SelectProps<TFieldValues extends FieldValues> = {
  name: FieldPath<TFieldValues>;
  options: Tables<'difficulties' | 'lecturers' | 'themes'>[] | null | undefined;
  register: UseFormRegister<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
};

const Select = <TFieldValues extends FieldValues>({
  name,
  options,
  register,
  errors,
}: SelectProps<TFieldValues>) => (
  <>
    <select
      className="h-14 w-full rounded-md border border-neutral-400 bg-foreground pl-2 text-text focus-within:border-2 hover:border-2 hover:border-neutral-400 focus:border-neutral-600 focus:outline-none"
      {...register(name, { setValueAs: (value) => Number(value) })}
    >
      <option value="" disabled></option>
      {options?.map((el) => {
        return (
          <option key={el.id} value={el.id}>
            {el.name}
          </option>
        );
      })}
    </select>
    {errors[name] && (
      <p className="text-red-500">{errors[name]?.message as ReactNode}</p>
    )}
  </>
);

export default Select;
