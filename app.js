function updateTime() {
  let nairobiElement = document.querySelector("#nairobi");
  let nairobiDateElement = nairobiElement.querySelector(".date");
  let nairobiTimeElement = nairobiElement.querySelector(".time");
  let nairobiTime = moment().tz("Africa/Nairobi");

  nairobiDateElement.innerHTML = nairobiTime.format("ddd Do MMMM YYYY");
  nairobiTimeElement.innerHTML = nairobiTime.format(
    "h:mm:ss [<small>]A[</small>]",
  );

  let cairoElement = document.querySelector("#cairo");
  let cairoDateElement = cairoElement.querySelector(".date");
  let cairoTimeElement = cairoElement.querySelector(".time");
  let cairoTime = moment().tz("Africa/Cairo");

  cairoDateElement.innerHTML = cairoTime.format("ddd Do MMMM YYYY");
  cairoTimeElement.innerHTML = cairoTime.format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
