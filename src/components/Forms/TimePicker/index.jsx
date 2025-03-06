import React, { useState, useRef, useEffect } from "react";
import { FaClock } from "react-icons/fa";
const CustomTimePicker = ({
  label,
  selectedTime,
  onChange,
  step = 15,
  is24HourFormat = false,
  presets = [],
  insideLabel,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hour, setHour] = useState(
    selectedTime ? parseInt(selectedTime.split(":")[0]) : 12
  );
  const [minute, setMinute] = useState(
    selectedTime ? parseInt(selectedTime.split(":")[1].split(" ")[0]) : 0
  );
  const [period, setPeriod] = useState(
    selectedTime && selectedTime.includes("AM") ? "AM" : "PM"
  );
  const pickerRef = useRef(null);

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

  const updateTime = (h, m, p) => {
    let formattedTime;
    if (is24HourFormat) {
      let formattedHour = p === "PM" && h !== 12 ? h + 12 : h;
      if (p === "AM" && h === 12) formattedHour = 0; // Handle 12 AM as 00:00
      formattedTime = `${String(formattedHour).padStart(2, "0")}:${String(
        m
      ).padStart(2, "0")}`;
    } else {
      formattedTime = `${String(h).padStart(2, "0")}:${String(m).padStart(
        2,
        "0"
      )} ${p}`;
    }
    onChange(formattedTime);
  };

  const handleHourChange = (change) => {
    let newHour = hour + change;
    if (is24HourFormat) {
      if (newHour < 0) newHour = 23;
      if (newHour > 23) newHour = 0;
    } else {
      if (newHour < 1) newHour = 12;
      if (newHour > 12) newHour = 1;
    }
    setHour(newHour);
    updateTime(newHour, minute, period);
  };

  const handleMinuteChange = (change) => {
    let newMinute = minute + change;
    if (newMinute < 0) {
      newMinute = 60 - step;
      handleHourChange(-1);
    }
    if (newMinute >= 60) {
      newMinute = 0;
      handleHourChange(1);
    }
    setMinute(newMinute);
    updateTime(hour, newMinute, period);
  };

  const togglePeriod = () => {
    if (!is24HourFormat) {
      setPeriod(period === "AM" ? "PM" : "AM");
      updateTime(hour, minute, period === "AM" ? "PM" : "AM");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowUp") handleMinuteChange(step);
    if (event.key === "ArrowDown") handleMinuteChange(-step);
    if (event.key === "ArrowLeft") handleHourChange(-1);
    if (event.key === "ArrowRight") handleHourChange(1);
    if (event.key === "Enter") setIsOpen(false);
  };

  return (
    <div className="relative w-full text-black" ref={pickerRef}>
      {label && <label className="block text-gray-700 mb-2">{label}</label>}
      <div
        className="border rounded-xl w-full cursor-pointer flex items-center justify-start bg-white px-4 py-3 h-[50px] flex-row-reverse"
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <p className="w-full py-1 px-2">
          {insideLabel +
            ": " +
            (is24HourFormat
              ? `${String(hour).padStart(2, "0")}:${String(minute).padStart(
                  2,
                  "0"
                )}`
              : `${String(hour).padStart(2, "0")}:${String(minute).padStart(
                  2,
                  "0"
                )} ${period}`)}
        </p>
        <span className="text-small text-fourth">
          <FaClock />
        </span>
      </div>
      {isOpen && (
        <div className="absolute top-12 left-0 bg-white shadow-lg rounded-lg w-52 p-4 z-10">
          <div className="flex justify-between items-center mb-2">
            <button
              className="text-gray-600 hover:text-black"
              onClick={() => handleHourChange(-1)}
            >
              &#9665;
            </button>
            <span className="font-semibold">
              {String(hour).padStart(2, "0")}
            </span>
            <button
              className="text-gray-600 hover:text-black"
              onClick={() => handleHourChange(1)}
            >
              &#9655;
            </button>
          </div>
          <div className="flex justify-between items-center mb-2">
            <button
              className="text-gray-600 hover:text-black"
              onClick={() => handleMinuteChange(-step)}
            >
              &#9665;
            </button>
            <span className="font-semibold">
              {String(minute).padStart(2, "0")}
            </span>
            <button
              className="text-gray-600 hover:text-black"
              onClick={() => handleMinuteChange(step)}
            >
              &#9655;
            </button>
          </div>
          {!is24HourFormat && (
            <div className="flex justify-center">
              <button
                className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600 transition"
                onClick={togglePeriod}
              >
                {period}
              </button>
            </div>
          )}
          {presets.length > 0 && (
            <div className="mt-3">
              <h3 className="text-sm font-semibold mb-1">Quick Select:</h3>
              <div className="grid grid-cols-2 gap-2">
                {presets.map((preset) => (
                  <button
                    key={preset}
                    className="border p-1 rounded-md text-center hover:bg-gray-200 transition"
                    onClick={() => onChange(preset)}
                  >
                    {preset}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default CustomTimePicker;
//   const [time, setTime] = useState("");
// <CustomTimePicker
//         insideLabel="Pickup Time"
//         selectedTime={time}
//         onChange={setTime}
//         step={10}
//         is24HourFormat={false}
//         // presets={["08:00 AM", "12:00 PM", "04:00 PM"]}
//       />
