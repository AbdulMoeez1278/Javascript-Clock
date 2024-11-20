// MY CODE

let pakTime = document.getElementById("timePak");
let usaTime = document.getElementById("USATimeZone");
const countryInput = document.getElementById("country");

setInterval(() => {
  let datePAK = new Date();
  // const options1 = { timeZoneName: "short", hour12: true };
  let time = datePAK.toLocaleTimeString();
  pakTime.innerHTML = time;
}, 1000);

function getTimeZoneOffset(countryName) {
  const timeZoneOffsets = {
    "Pakistan": 5,
    "USA": -5,
    "India": 5.5,
    "Germany": +1,
    "Japan": +9,
    "Australia": +11,
    "China": +8,
    "Brazil": -3,
    "France": +1,
    "South Africa": +2,
    "Russia": +3,
    "Egypt": +2,
    "Saudi Arabia": +3,
    "Dubai": +4,
    "Turkey": +3,
    "Spain": +1,
    "Italy": +1,
    "South Korea": +9,
    "Mexico": -6,
    "Canada": -5
    // Add more countries and their time zone offsets here
  };

  return timeZoneOffsets[countryName];
}

function browseTime() {
  const countryName = countryInput.value;
  const timeZone = getTimeZoneOffset(countryName);
  usaTime.style.display = "block";
  countryInput.value = ""; // Remove the entered name from input tag when the Get Time button is clicked

  if (timeZone) {
    const intervalId = setInterval(() => {
      const u = new Date();
      const localTime = u.getTime();
      const localOffset = u.getTimezoneOffset() * 60000;
      const utc = localTime + localOffset;
      const offset = timeZone;
      const usa = utc + 3600000 * offset;
      let usaTimeNow = new Date(usa);
      // const options2 = { timeZoneName: "short", hour12: true };
      document.getElementById("timeUSA").innerHTML = countryName +  `'s ` + " Current Time Is: " + usaTimeNow.toLocaleTimeString();
      document.getElementById("paraUSA").innerHTML = countryName + `'s ` + `current time is displayed on your device screen.<hr>`;
      document.getElementById( "paraDisplay").innerHTML = `The Time you're seeing on the device is accurate to their TimeZone Offsets`;
      document.getElementById("deleteTime").style.display = "block";
    }, 1000);

    usaTime.style.display = "block";

    clearInterval(countryInput.intervalId);
    countryInput.intervalId = intervalId;
  } else {
    alert("Invalid country name or time zone not found.");
    usaTime.style.display = "none";
  }
}

function deleteTime() {
  usaTime.style.display = "none";
  countryInput.value = ""; // Remove the entered name from input tag
}
