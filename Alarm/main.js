let countdownInterval;

document.getElementById('start-btn').addEventListener('click', function() {
  clearInterval(countdownInterval);

  const hours = parseInt(document.getElementById('hours').value);
  const minutes = parseInt(document.getElementById('minutes').value);
  const seconds = parseInt(document.getElementById('seconds').value);

  const totalSeconds = hours * 3600 + minutes * 60 + seconds;

  if (isNaN(totalSeconds) || totalSeconds <= 0) {
    alert('Please enter a valid duration.');
    return;
  }

  document.querySelectorAll('input').forEach(input => {
    input.disabled = true;
  });
  document.getElementById('start-btn').disabled = true;

  let remainingSeconds = totalSeconds;

  countdownInterval = setInterval(() => {
    remainingSeconds--;

    const hours = Math.floor(remainingSeconds / 3600);
    const minutes = Math.floor((remainingSeconds % 3600) / 60);
    const seconds = remainingSeconds % 60;

    document.getElementById('countdown-box').textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (remainingSeconds <= 0) {
      clearInterval(countdownInterval);
      document.getElementById('countdown-box').textContent = 'Time\'s up!';
      document.getElementById('alarm-sound').play();
      document.querySelectorAll('input').forEach(input => {
        input.disabled = false;
      });
      document.getElementById('start-btn').disabled = false;
    }
  }, 1000);
});