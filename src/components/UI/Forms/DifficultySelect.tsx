import { ReactNode } from 'react';
import {
  FieldErrors,
  FieldPath,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form';
import { Tables } from '../../../types/database.types';

type SelectProps<TFieldValues extends FieldValues> = {
  name: FieldPath<TFieldValues>;
  defaultValue: string;
  options: Tables<'difficulties'>[] | null | undefined;
  register: UseFormRegister<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
};

const DifficultySelect = <TFieldValues extends FieldValues>({
  name,
  defaultValue,
  options,
  register,
  errors,
}: SelectProps<TFieldValues>) => (
  <>
    <select
      defaultValue={defaultValue}
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
    {errors.days && (
      <p className="text-red-500">{errors?.days?.message as ReactNode}</p>
    )}
  </>
);

export default DifficultySelect;
