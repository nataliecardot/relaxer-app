const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 13000;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

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

// Run animation every # of seconds as defined by totalTime
setInterval(breathAnimation, totalTime);
