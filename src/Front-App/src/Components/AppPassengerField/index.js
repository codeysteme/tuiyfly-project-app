import { string } from "prop-types";
import { useFormikContext } from "formik";
import React from "react";
import { Box, InputAdornment, InputLabel, MenuItem, TextField } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";

export default function AppPassengerField({ name, labelName }) {
  const { errors, touched, handleChange, handleBlur, values } = useFormikContext();

  const passengerData = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <Box style={{ margin: "5px" }}>
      <InputLabel
        htmlFor={name}
        style={{
          fontSize: "13px",
          fontWeight: "normal",
          color: "#09295D",
        }}
      >
        {labelName}
      </InputLabel>
      <TextField
        sx={{
          width: "155px",
          bgcolor: "#fff",
          svg: { color: "#1a7ead", fontSize: "20px" },
        }}
        size={"small"}
        select
        id={name}
        name={name}
        value={values[name]}
        error={errors[name] && touched[name]}
        onChange={handleChange}
        onBlur={handleBlur}
        variant="outlined"
        InputProps={{
          style: { fontSize: "13px" },
          startAdornment: (
            <InputAdornment position="start">
              <GroupIcon />
            </InputAdornment>
          ),
        }}
      >
        {passengerData.map((i) => (
          <MenuItem key={i} value={i} style={{ fontSize: "13px" }}>
            {i} Adulte{i > 1 ? "s" : ""}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}

AppPassengerField.propTypes = {
  name: string.isRequired,
  labelName: string.isRequired,
};
