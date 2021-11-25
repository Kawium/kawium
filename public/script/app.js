let origin = 0.0;

setInterval(function () {
  document.querySelector("#distance").innerHTML = Math.ceil(origin) + " M";
  origin += 1.9;
}, 100);

function playAudio(url) {
  new Audio(url).play();
}
