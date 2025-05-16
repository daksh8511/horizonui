import React from "react";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import styled from "styled-components";

const Calender = () => {
  return (
    <Wrapper className="bg-white p-2 rounded-2xl">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar />
      </LocalizationProvider>
    </Wrapper>
  );
};

export default Calender;

const Wrapper = styled.div`
  .css-5wchs2-MuiDateCalendar-root {
    width: 100%;
    max-height: 290px;
  }
`;
