import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "react-time-picker/dist/TimePicker.css";

interface BookingFormData {
  service: string;
  date: Date | null;
  time: string | null;
}

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    service: "",
    date: new Date(),
    time: "",
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const [confirmationVisible, setConfirmationVisible] =
    useState<boolean>(false);

  const handleServiceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, service: event.target.value });
  };

  const handleDateChange = (date: Date) => {
    setFormData({ ...formData, date: date });
  };

  const handleTimeChange = (time: string) => {
    setFormData({ ...formData, time: time });
  };

  const handleSlotClick = (time: string) => {
    handleTimeChange(time);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      formData.service === "" ||
      formData.date === null ||
      formData.time === null
    ) {
      alert("Please select all fields.");
      return;
    }

    setSubmitted(true);
  };

  const generateTimeSlots = (): string[] => {
    const slots: string[] = [];
    for (let hour = 9; hour < 20; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const formattedHour = hour.toString().padStart(2, "0");
        const formattedMinute = minute.toString().padStart(2, "0");
        slots.push(`${formattedHour}:${formattedMinute}`);
      }
    }
    return slots;
  };

  const isDateDisabled = (date: Date): boolean => {
    // Disable past dates
    return date.getTime() < new Date().setHours(0, 0, 0, 0);
  };

  const handleConfirmedBooking = () => {
    console.log(
      "Name:",
      { name },
      "Last Name:",
      { lastName },
      "Phone Number:",
      { phoneNumber },
      "Booking:",
      { formData }
    );

    setConfirmationVisible(true);

    setTimeout(() => {
      window.location.href = "book";
    }, 3000);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
    }
  }, []);

  return (
    <div className="relative bg-white h-[120vh]">
      <h1 className="text-zinc-800 flex justify-center pt-20 font-extrabold text-2xl lg:text-5xl md:text-3xl">
        Book Your appointment today!
      </h1>
      <form
        onSubmit={handleSubmit}
        className="pt-[70px]  xs:pt-[20px] xl:ml-80"
      >
        {!submitted && (
          <>
            <div className="flex  justify-center lg:-ml-80 lg:mt-4">
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleServiceChange}
                className="w-80 text-lg bg-zinc-200 rounded-lg"
              >
                <option value="">Select a service</option>
                <option value="Color">Color</option>
                <option value="Style">Style</option>
                <option value="Cut">Cut</option>
              </select>
            </div>
            {/* Large Screen Layout */}
            <div className="hidden  lg:flex lg:flex-row lg:ml-40 xl:ml-20 mt-8">
              <div className="flex justify-center">
                <div className="mt-4 rounded-lg  text-blue-700">
                  <Calendar
                    value={formData.date}
                    onClickDay={handleDateChange}
                    className="mt-4 rounded-lg text-blue-700 lg:w-[500px]"
                    minDate={new Date()}
                    tileDisabled={({ date }) => isDateDisabled(date)}
                  />
                </div>
              </div>
              <div className="mt-4 justify-center flex flex-col">
                <div className="flex justify-center mb-4 bg-black text-white mx-20 p-2">
                  {formData.date && formData.date.toDateString()}
                </div>
                <div className="ml-2 mt-4 w-80 text-lg bg-white rounded-lg overflow-y-auto max-h-60">
                  {/* Display chosen date */}
                  {generateTimeSlots().map((slot, index) => (
                    <div
                      key={index}
                      className={`flex items-center cursor-pointer hover:bg-gray-200 p-2 ${
                        formData.time === slot ? "bg-gray-200" : ""
                      }`}
                      onClick={() => handleSlotClick(slot)}
                    >
                      <input
                        type="radio"
                        id={slot}
                        name="timeSlot"
                        value={slot}
                        checked={formData.time === slot}
                        onChange={() => handleTimeChange(slot)}
                        className="mr-2 "
                      />
                      <label>{slot}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Small Screen Layout */}
            <div className="lg:hidden">
              <div className="flex justify-center">
                <div className="mt-4 rounded-lg md:ml-4 text-blue-700 xs:w-80">
                  <Calendar
                    value={formData.date}
                    onClickDay={handleDateChange}
                    className="mt-4 rounded-lg text-blue-700 w-auto"
                    minDate={new Date()}
                    tileDisabled={({ date }) => isDateDisabled(date)}
                  />
                </div>
              </div>
              <div className="mt-4 justify-center flex flex-col">
                <div className="flex justify-center mb-4 bg-black text-white mx-20 md:mx-60 sm:mx-60">
                  {formData.date && formData.date.toDateString()}
                </div>
                <div className="ml-2 mt-4 w-80 text-lg bg-white rounded-lg overflow-y-auto max-h-60 md:ml-80 sm:ml-60">
                  {/* Display chosen date */}
                  {generateTimeSlots().map((slot, index) => (
                    <div
                      key={index}
                      className={`flex items-center cursor-pointer hover:bg-gray-200 p-2 ml-6 ${
                        formData.time === slot ? "bg-gray-200" : ""
                      }`}
                      onClick={() => handleSlotClick(slot)}
                    >
                      <input
                        type="radio"
                        id={slot}
                        name="timeSlot"
                        value={slot}
                        checked={formData.time === slot}
                        onChange={() => handleTimeChange(slot)}
                        className="mr-2"
                      />
                      <label>{slot}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="mt-10 px-4 py-2 bg-black text-white rounded-lg text-xl xl:mr-80  "
              >
                Finalise Booking
              </button>
            </div>
          </>
        )}
        {submitted && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white w-full max-w-screen-sm mx-4 my-8 p-6 md:p-8 lg:p-12 xl:p-14 rounded-lg md:rounded-xl shadow-md">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6 lg:mb-8 xl:mb-10">
                Booking Details
              </h2>
              <p className="text-base md:text-lg lg:text-xl">
                Service: {formData.service}
                <br />
                Date: {formData.date?.toDateString()}
                <br />
                Time: {formData.time}
              </p>
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mt-6 md:mt-8 lg:mt-10 xl:mt-12">
                Enter your details
              </h3>
              <input
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full rounded-lg border-gray-300 mt-3 md:mt-4 lg:mt-5 xl:mt-6 p-2 md:p-3 lg:p-4 xl:p-5 text-base md:text-lg lg:text-xl"
              />
              <input
                type="text"
                placeholder="Last Name"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="block w-full rounded-lg border-gray-300 mt-2 md:mt-3 lg:mt-4 xl:mt-5 p-2 md:p-3 lg:p-4 xl:p-5 text-base md:text-lg lg:text-xl"
              />
              <input
                type="text"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                pattern="^(?:(?:\+44\s?|0)(?:\d{10}|\(0\)\s?\d{4}\s?\d{6}|\d{3}\s?\d{3}\s?\d{4}|\d{4}\s?\d{6}|\d{5}\s?\d{5}))|
                        (?:\+39\s?(?:\d{10}|\d{2}\s?\d{4}\s?\d{4}|\d{3}\s?\d{3}\s?\d{4}|\d{4}\s?\d{4}|\d{5}\s?\d{4}))"
                className="block w-full rounded-lg border-gray-300 mt-2 md:mt-3 lg:mt-4 xl:mt-5 p-2 md:p-3 lg:p-4 xl:p-5 text-base md:text-lg lg:text-xl"
              />
              <div className="flex justify-end mt-4 md:mt-6 lg:mt-8 xl:mt-10">
                <button
                  className="bg-black text-white px-4 py-2 rounded-lg mr-2 text-base md:text-lg lg:text-xl"
                  onClick={() => setSubmitted(false)}
                >
                  Edit Details
                </button>
                <button
                  className="bg-black text-white px-4 py-2 rounded-lg text-base md:text-lg lg:text-xl"
                  onClick={handleConfirmedBooking}
                >
                  Confirm Booking
                </button>
                {submitted && confirmationVisible && (
                  <div className="flex justify-center mt-4 text-lg text-green-600 font-semibold">
                    Booking confirmed. We look forward to seeing you soon!
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default BookingForm;
