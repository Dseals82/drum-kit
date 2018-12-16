window.addEventListener('keydown', function(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.beat[data-key="${e.keyCode}"]`);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('animation');
});

function removeTransitioned(e){
  if(e.propertyName !== 'transform') return;
  this.classList.remove('animation');
};

const keys = document.querySelectorAll('.beat');
keys.forEach(key => key.addEventListener('transitionend', removeTransitioned));
