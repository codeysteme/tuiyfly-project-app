import { string } from "prop-types";
import { useFormikContext } from "formik";
import React from "react";
import { Box, InputLabel, TextField } from "@mui/material";

export default function AppInputField({ name, labelName, ...others }) {
  const { errors, touched, handleChange, handleBlur, values } = useFormikContext();

  return (
    <Box style={{ margin: "5px" }}>
      <InputLabel
        htmlFor={name}
        style={{
          fontSize: "13px",
          fontWeight: "normal",
          color: "#09295D",
          marginBottom: "5px",
        }}
      >
        {labelName}
      </InputLabel>
      <TextField
        sx={{ bgcolor: "#fff", svg: { color: "#1a7ead", fontSize: "20px" }, width: { sm: 200, md: 325 } }}
        id={name}
        size="small"
        required={true}
        name={name}
        value={values[name]}
        error={errors[name] && touched[name]}
        onChange={handleChange}
        onBlur={handleBlur}
        variant="outlined"
        {...others}
      />
    </Box>
  );
}

AppInputField.propTypes = {
  name: string.isRequired,
  labelName: string.isRequired,
};
