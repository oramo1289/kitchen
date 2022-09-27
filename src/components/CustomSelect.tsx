import { FC } from "react";
import {
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
} from "@mui/material";

import "./CustomSelect.css";

export interface CustomSelectProps {
  classNameValue?: string;
  list: string[];
  value: string;
  handleChangeList: (value: string) => void;
}

export const CustomSelect: FC<CustomSelectProps> = ({
  classNameValue = "",
  list = [],
  value,
  handleChangeList,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    handleChangeList(value);
  };
  console.log(value);
  console.log(list);
  return (
    <div className={`${classNameValue}`}>
      <FormControl variant="standard" className={`${"select"} `}>
        <InputLabel id="select-label">Option</InputLabel>
        <Select
          labelId="select-label"
          id="select-label"
          value={value}
          onChange={handleChange}
          label="option"
        >
          {list.map((listElement) => (
            <MenuItem key={listElement} value={listElement}>
              {listElement}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
