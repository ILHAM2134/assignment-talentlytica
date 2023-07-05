import React from "react";
import { Select, FormControl, MenuItem, InputLabel } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

import { Data, IdataSlctItem } from "../data";

interface SelectProps {
  dataSelect: IdataSlctItem[];
  state: Data[];
  setState: React.Dispatch<React.SetStateAction<Data[]>>;
  name: string;
  index: number;
}

export default function SelectSmall({
  dataSelect = [],
  state,
  setState,
  name,
  index,
}: SelectProps) {
  const handleChange = (id: number, e: SelectChangeEvent) => {
    const newArray = state.map((arr, index) => {
      if (id == index) {
        return {
          ...arr,
          [name]: e.target.value,
        };
      } else {
        return arr;
      }
    });
    setState(newArray);
  };

  return (
    <div>
      <FormControl size="small" variant="outlined" sx={{ width: 70 }}>
        <InputLabel htmlFor="outlined-age-native-simple">
          <span
            style={{
              color: "#555c64b7",
              background: "#F0F0F0",
              marginInline: "1px",
            }}
          >
            Nilai
          </span>
        </InputLabel>
        <Select
          onChange={(e) => handleChange(index, e)}
          value={state[index][name]}
        >
          {dataSelect.map((data) => (
            <MenuItem key={data.value} value={data.value} text={data.text}>
              {data.text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
