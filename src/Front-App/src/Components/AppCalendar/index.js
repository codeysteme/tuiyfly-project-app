import * as React from "react";
import { string } from "prop-types";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import fr from "dayjs/locale/fr";
import { frFR } from "@mui/x-date-pickers/locales";
import { useFormikContext } from "formik";
import { Box, InputLabel } from "@mui/material";

export default function AppCalendar({ name, labelName }) {
  const { errors, touched, setFieldValue } = useFormikContext();

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
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        adapterLocale={fr}
        localeText={frFR.components.MuiLocalizationProvider.defaultProps.localeText}
      >
        <DatePicker
          label="Selectonnez une date"
          sx={{
            width: "180px",
            backgroundColor: "#fff",
            svg: { color: "#1a7ead", fontSize: "20px" },
            input: { fontSize: "13px" },
            label: { fontSize: "13px" },
          }}
          id={name}
          margin="normal"
          minDate={dayjs(new Date())}
          format="DD MMMM YYYY"
          onChange={(selectedDate) => setFieldValue(dayjs(selectedDate).format("YYYY-MM-DDTHH:mm:ss"))}
          slotProps={{
            textField: {
              size: "small",
              variant: "outlined",
              error: errors[name] && touched[name],
              helperText: errors[name] && touched[name] ? errors[name] : null,
            },
          }}
        />
      </LocalizationProvider>
    </Box>
  );
}

AppCalendar.propTypes = {
  name: string.isRequired,
  labelName: string,
};

AppCalendar.defaultProps = {
  labelName: "",
};
