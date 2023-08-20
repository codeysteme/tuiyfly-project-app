import * as React from "react";
import { string } from "prop-types";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import fr from "dayjs/locale/fr";
import { frFR } from "@mui/x-date-pickers/locales";
import { useFormikContext } from "formik";
import { Box, Typography } from "@mui/material";

import "./style.css";

export default function AppCalendar({ name, labelName }) {
  const { setFieldValue, values } = useFormikContext();

  return (
    <Box style={{ width: "250px" }}>
      <Typography
        component="p"
        style={{
          fontSize: "14px",
          fontWeight: "normal",
          color: "#09295D",
          margin: "5px 0",
        }}
      >
        {labelName}
      </Typography>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        adapterLocale={fr}
        localeText={
          frFR.components.MuiLocalizationProvider.defaultProps.localeText
        }
      >
        <DatePicker
          size="small"
          sx={{
            backgroundColor: "#fff",
          }}
          margin="normal"
          minDate={dayjs(new Date())}
          format="DD MMMM YYYY"
          onChange={(selectedDate) => setFieldValue(name, selectedDate)}
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
