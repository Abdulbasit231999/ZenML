import React, { useState } from "react";
import {
  Autocomplete,
  CircularProgress,
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { searchData } from "./mock";

export function SearchAutocomplete() {
  const [value, setValue] = React.useState();
  const [inputValue, setInputValue] = React.useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const handleInputChange = (e, value) => {
    setInputValue(value);
    if (value) {
      setData([]);
      setLoading(true);
      setTimeout(() => {
        setData(searchData);
        setLoading(false);
      }, [1000]);
    }
  };
  return (
    <div>
      <Autocomplete
        disablePortal
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        options={data}
        getOptionLabel={(options) => options.heading}
        onInputChange={handleInputChange}
        freeSolo
        size="small"
        sx={{
          // width: "540px",
          background: "rgba(255, 255, 255, 0.9)",
          borderRadius: "6px",
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search"
            color="primary"
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="primary" />
                </InputAdornment>
              ),
              endAdornment: loading && (
                <InputAdornment position="end">
                  <CircularProgress size={20} />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </div>
  );
}
