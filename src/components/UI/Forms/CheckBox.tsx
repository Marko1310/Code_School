import { FieldPath, FieldValues, UseFormRegister } from 'react-hook-form';
import { Tables } from '../../../types/database.types';

type CheckBoxProps<TFieldValues extends FieldValues> = {
  name: FieldPath<TFieldValues>;
  register: UseFormRegister<TFieldValues>;
  value: Tables<'difficulties' | 'lecturers' | 'themes'> | null | undefined;
};

const CheckBox = <TFieldValues extends FieldValues>({
  name,
  register,
  value,
}: CheckBoxProps<TFieldValues>) => {
  return (
    <div>
      <input type="checkbox" value={value?.id} {...register(name)} />
      <label>{value?.name}</label>
    </div>
  );
};

export default CheckBox;
