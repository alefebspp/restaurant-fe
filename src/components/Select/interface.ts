import { Control } from 'react-hook-form';

export interface ISelectProps {
  id: string;
  name: string;
  control: Control<any>;
  options: any;
  defaultValue?: any;
  menuIsOpen?: boolean;
  justifyContent: string;
  placeholder: string;
}
