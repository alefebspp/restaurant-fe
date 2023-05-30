import { InputHTMLAttributes } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<FieldValues | any>;
  width?: string;
  inputLabel: string;
  inputName: string;
  inputType?: string;
}
