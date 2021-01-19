const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500; // ms
const breatheTime = (totalTime / 5) * 2; // = 3000 ms
const holdTime = totalTime / 5; // = 1500 ms

function breathAnimation() {
  text.innerText = 'Breathe In!';
  container.className = 'container grow';

  // breathe time elapses -> text set to 'hold' -> waits for hold time -> sets text to breathe out and adds container and shrink class
  setTimeout(() => {
    text.innerText = 'Hold';

    setTimeout(() => {
      text.innerText = 'Breathe Out!';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}

// So it runs right away; don't need to wait for setInterval to call it
breathAnimation();

// Run animation every 7.5 seconds
setInterval(breathAnimation, totalTime);
