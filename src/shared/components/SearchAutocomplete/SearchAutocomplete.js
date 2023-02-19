import React from "react";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export function SearchAutocomplete() {
  return (
    <div>
      <Autocomplete
        disablePortal
        options={[]}
        size="small"
        sx={{ width: "540px" }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search"
            color="primary"
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="primary"/>
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </div>
  );
}
