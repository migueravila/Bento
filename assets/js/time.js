// ┌┬┐┬┌┬┐┌─┐
//  │ ││││├┤
//  ┴ ┴┴ ┴└─┘
// Set time and Date

window.onload = displayClock;
function displayClock() {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  var d = new Date();
  var mm = monthNames[d.getMonth()];
  var dd = d.getDate();
  var min = ("0" + d.getMinutes()).slice(-2);
  var sec = ("0" + d.getSeconds()).slice(-2);
  var hh = d.getHours();
  var ampm = "";

  if (CONFIG.twelveHourFormat) {
    ampm = hh >= 12 ? " pm" : " am";
    hh = hh % 12;
    hh = hh ? hh : 12;
  }

  document.getElementById("hour").innerText = hh;
  document.getElementById("separator").innerHTML = " : ";
  document.getElementById("minutes").innerText =
    min + (CONFIG.twelveHourFormat ? ampm : "");
  // second separator and seconds
  if (document.getElementById("separator2"))
    document.getElementById("separator2").innerHTML = " : ";
  if (document.getElementById("seconds"))
    document.getElementById("seconds").innerText = sec;

  document.getElementById("month").innerText = mm;
  document.getElementById("day").innerText = dd;

  setTimeout(displayClock, 1000);
}
