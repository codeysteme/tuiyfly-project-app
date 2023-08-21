import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { arrayOf, bool, shape, string } from "prop-types";
import { InputAdornment, InputLabel } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import { useFormikContext } from "formik";
import { useStyles, autoCompleteStyle } from "./style";

export default function AirportSelect({
  name,
  noOptionText,
  mention,
  labelName,
  airports,
}) {
  const { errors, touched, setFieldValue } = useFormikContext();
  const classes = useStyles();

  return (
    <Box>
      <InputLabel htmlFor={name} className={classes.inputLabel}>
        {labelName}
      </InputLabel>
      <Autocomplete
        id={name}
        size={"small"}
        sx={autoCompleteStyle}
        noOptionsText={noOptionText}
        onChange={(event, value) => setFieldValue(name, value?.id)}
        options={airports}
        getOptionLabel={(option) => option.name}
        renderOption={(props, option) => (
          <Box
            {...props}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box className={classes.boxName}>
              {option.name}, {option.countryName}
            </Box>
            <Box className={classes.boxId}>{option.id}</Box>
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={mention}
            fullWidth
            helperText={errors[name] && touched[name] ? errors[name] : null}
            error={errors[name] && touched[name]}
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <FlightTakeoffIcon />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </Box>
  );
}

AirportSelect.propTypes = {
  name: string.isRequired,
  labelName: string,
  mention: string,
  noOptionText: string,
  airports: arrayOf(
    shape({
      id: string,
      available: bool,
      countryName: string,
      name: string,
    })
  ),
};

AirportSelect.defaultProps = {
  labelName: "",
};
