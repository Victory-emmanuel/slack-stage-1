const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
// const utcOffset = 1;

const dayOfWeekElement = document.getElementById("dayOfWeek");
const utcTimeElement = document.getElementById("utcTime");

function updateDayOfWeek() {
  const today = new Date();

  const utcTime = new Date(today.getTime());

  const dayOfWeek = daysOfWeek[utcTime.getUTCDay()];

  dayOfWeekElement.textContent = dayOfWeek;
}

function updateUTCDateTime() {
  const today = new Date();

  const utcTime = new Date(today.getTime());

  const hours = utcTime.getUTCHours();
  const minutes = utcTime.getUTCMinutes();
  const seconds = utcTime.getUTCSeconds();
  const milliseconds = utcTime.getUTCMilliseconds();

  // Format the time with milliseconds
  const formattedTime = `${hours}:${minutes}:${seconds}.${milliseconds}`;

  utcTimeElement.textContent = formattedTime;
}

// Update the day of the week every second
setInterval(updateDayOfWeek, 1000);

// Update the UTC time every millisecond
setInterval(updateUTCDateTime, 1);

// Initial updates
updateDayOfWeek();
updateUTCDateTime();
