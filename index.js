const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const utcOffset = 1;

const dayOfWeekElement = document.getElementById("dayOfWeek");

const utcTimeElement = document.getElementById("utcTime");

function updateDateTime() {
  const today = new Date();

  const utcPlusOneTime = new Date(today.getTime() + utcOffset * 60 * 60 * 1000);

  dayOfWeekElement.textContent = daysOfWeek[utcPlusOneTime.getUTCDay()];
  utcTimeElement.textContent = utcPlusOneTime.toUTCString();
}

// Update the time every second
setInterval(updateDateTime, 1000);

// Initial update
updateDateTime();
