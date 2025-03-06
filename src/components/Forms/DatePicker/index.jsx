import React, { useState, useEffect, useRef } from "react";
import { FaCalendar } from "react-icons/fa";
const CustomDatePicker = ({
  label,
  selectedDate,
  onChange,
  disablePast,
  range,
  startDate,
  endDate,
  onRangeChange,
  insideLabel,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [calendarDate, setCalendarDate] = useState(selectedDate || new Date());
  const pickerRef = useRef(null);

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handlePrevMonth = () => {
    setCalendarDate(
      new Date(calendarDate.getFullYear(), calendarDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCalendarDate(
      new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1, 1)
    );
  };

  const handleSelectDate = (day) => {
    const newDate = new Date(
      calendarDate.getFullYear(),
      calendarDate.getMonth(),
      day
    );

    if (disablePast && newDate < new Date().setHours(0, 0, 0, 0)) {
      return;
    }

    if (range) {
      if (!startDate || (startDate && endDate)) {
        onRangeChange({ start: newDate, end: null });
      } else {
        onRangeChange({ start: startDate, end: newDate });
      }
    } else {
      onChange(newDate);
    }

    setIsOpen(false);
  };

  const renderDays = () => {
    const firstDayOfMonth = new Date(
      calendarDate.getFullYear(),
      calendarDate.getMonth(),
      1
    ).getDay();
    const daysInMonth = new Date(
      calendarDate.getFullYear(),
      calendarDate.getMonth() + 1,
      0
    ).getDate();
    let days = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="w-10 h-10"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const newDate = new Date(
        calendarDate.getFullYear(),
        calendarDate.getMonth(),
        day
      );
      const isSelected =
        selectedDate && newDate.toDateString() === selectedDate.toDateString();
      const isInRange =
        range &&
        startDate &&
        endDate &&
        newDate >= startDate &&
        newDate <= endDate;
      const isStartOrEnd =
        range &&
        (newDate.toDateString() === (startDate?.toDateString() || "") ||
          newDate.toDateString() === (endDate?.toDateString() || ""));
      const isDisabled =
        disablePast && newDate < new Date().setHours(0, 0, 0, 0);

      days.push(
        <div
          key={day}
          className={`w-10 h-10 flex items-center justify-center cursor-pointer rounded-full transition-all ${
            isDisabled
              ? "text-gray-400 cursor-not-allowed"
              : isStartOrEnd
              ? "bg-blue-600 text-white font-bold"
              : isInRange
              ? "bg-blue-300 text-black"
              : isSelected
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-200"
          }`}
          onClick={() => !isDisabled && handleSelectDate(day)}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="relative w-full text-black" ref={pickerRef}>
      {label && <label className="block text-gray-700 mb-2">{label}</label>}
      <div
        className="border p-2 rounded-xl w-full cursor-pointer flex items-center justify-between bg-white px-4 py-3 h-[50px] flex-row-reverse"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="w-full py-1 px-2">
          {range
            ? startDate && endDate
              ? `${startDate.toDateString()} - ${endDate.toDateString()}`
              : "Select range"
            : insideLabel + ": " + selectedDate?.toDateString() || insideLabel}
        </p>
        <span className="text-small text-fourth">
          <FaCalendar />
        </span>
      </div>
      {isOpen && (
        <div className="absolute top-12 left-0 bg-white shadow-lg rounded-lg w-80 p-4 z-10">
          <div className="flex justify-between items-center mb-2">
            <button
              onClick={handlePrevMonth}
              className="text-gray-600 hover:text-black"
            >
              &#9665;
            </button>
            <span className="font-semibold">
              {calendarDate.toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
            </span>
            <button
              onClick={handleNextMonth}
              className="text-gray-600 hover:text-black"
            >
              &#9655;
            </button>
          </div>
          <div className="grid grid-cols-7 text-center text-gray-600 font-semibold">
            {daysOfWeek.map((day) => (
              <div key={day} className="w-10">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7">{renderDays()}</div>
        </div>
      )}
    </div>
  );
};
export default CustomDatePicker;

// const [singleDate, setSingleDate] = useState(new Date());
//   const [dateRange, setDateRange] = useState({ start: null, end: null });
//    <CustomDatePicker
//         label="Pick a date:"
//         selectedDate={singleDate}
//         onChange={setSingleDate}
//         disablePast={true}
//       />
//       <CustomDatePicker
//         label="Pick a date range:"
//         range={true}
//         startDate={dateRange.start}
//         endDate={dateRange.end}
//         onRangeChange={setDateRange}
//         disablePast={true}
//       />


//
