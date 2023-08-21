import { string } from "prop-types";
import { useFormikContext } from "formik";
import React from "react";
import {
  Box,
  InputAdornment,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";

export default function AppInputField({ name, labelName, placeHolder }) {
  const { errors, touched, handleChange, handleBlur, values } =
    useFormikContext();

  return (
    <Box>
      <InputLabel
        htmlFor="filled-adornment-password"
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
          style: { fontSize: "13px" },
        }}
        slotProps={{ textField: { size: "small" } }}
        size="small"
        select
        // label={placeHolder}
        name={name}
        value={values[name]}
        error={errors[name] && touched[name]}
        onChange={handleChange}
        onBlur={handleBlur}
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <GroupIcon />
            </InputAdornment>
          ),
        }}
      >
        {Array(9)
          .fill(1)
          .map((i, option) => (
            <MenuItem
              key={option}
              value={++option}
              style={{ fontSize: "13px" }}
            >
              {option} Adulte{option > 1 ? "s" : ""}
            </MenuItem>
          ))}
      </TextField>
    </Box>
  );
}

AppInputField.propTypes = {
  name: string.isRequired,
  labelName: string.isRequired,
  placeHolder: string,
};
