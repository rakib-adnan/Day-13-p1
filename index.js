const hour = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const second = document.querySelector('.second');
const ampm = document.querySelector('.ampm');
const dateBox = document.querySelector('.date');

setInterval(showTime, 1000);
function showTime() {
  let time = new Date();
  let hr = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  am_pm = 'AM';

  if (hr > 12) {
    hr -= 12;
    am_pm = 'PM';
  }
  if (hr == 0) {
    hr = 12;
    am_pm = 'AM';
  }

  hr = hr < 10 ? '0' + hr : hr;
  min = min < 10 ? '0' + min : min;
  sec = sec < 10 ? '0' + sec : sec;

  // let currentTime = hour + ":"
  // 		+ min + ":" + sec + am_pm;
  hour.innerHTML = `${hr} :`;
  minutes.textContent = min;
  second.textContent = sec;
  ampm.textContent = am_pm;
  dateBox.textContent = time.toLocaleDateString();
}
showTime();
