import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React from 'react';
import { CustomSelectOption } from './common/types';

interface iProps {
  id?: string | undefined;
  sx?: any;
  labelSx?: any;
  name?: string | undefined;
  label?: string | undefined;
  labelId?: string | undefined;
  required?: boolean;
  variant?: 'outlined' | 'standard' | 'filled' | undefined;
  data: CustomSelectOption[];
  value: any;
  handleChange: (event: SelectChangeEvent<any>) => void;
}

const CustomSelect: React.FC<iProps> = ({
  id,
  sx,
  labelSx,
  label,
  labelId,
  variant,
  data,
  value,
  name,
  required,
  handleChange,
}): JSX.Element => {
  const showOptions = () => {
    return data.map((item: CustomSelectOption) => {
      return (
        <MenuItem key={item.id} value={item.name}>
          {item.name}
        </MenuItem>
      );
    });
  };

  return (
    <>
      <FormControl variant={variant} sx={sx}>
        {label && (
          <InputLabel sx={labelSx} id={labelId}>
            {label}
          </InputLabel>
        )}
        <Select
          labelId={labelId}
          id={id}
          value={value}
          label={label}
          name={name}
          onChange={handleChange}
          required={required}
        >
          {showOptions()}
        </Select>
      </FormControl>
    </>
  );
};

export default CustomSelect;
