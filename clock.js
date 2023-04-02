function showTime() {
    const date = new Date();
    let hours = String(date.getHours()).padStart(2, "0");
    let minutes = String(date.getMinutes()).padStart(2, "0");
    let seconds = String(date.getSeconds()).padStart(2, "0");

    let amOrPm = hours < 12 ? "AM" : "PM";
    hours = hours % 12 || 12;
    document.getElementById("clock").innerHTML = `${hours}:${minutes}:${seconds} ${amOrPm}`;
    setTimeout(showTime, 1000);
  }
showTime();
