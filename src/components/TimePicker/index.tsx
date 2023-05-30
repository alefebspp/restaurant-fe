import React, { useState } from 'react';
import TimePicker from 'react-time-picker';
import { CustomTimePicker } from './styles';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

export const TimePickerComponent = () => {
  const [value, setValue] = useState<string>('10:00');

  const onChange = (newValue: any) => {
    setValue(newValue as string);
  };

  return <CustomTimePicker onChange={onChange} value={value} />;
};
