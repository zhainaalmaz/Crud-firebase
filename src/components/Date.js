import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const PickDate = ({
  handleCalendarEnd,
  handleCalendarStart,
  startDate,
  endDate,
}) => {
  return (
    <div>
      <div>
        <div>
          <p>Start day</p>
          <ReactDatePicker
            selected={startDate}
            onChange={(date) => handleCalendarStart(date)}
          />
        </div>
        <div>
          <p>End day</p>
          <ReactDatePicker
            selected={endDate}
            onChange={(date) => handleCalendarEnd(date)}
          />
        </div>
      </div>
    </div>
  );
};
