// Confetti generator
function createConfetti() {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");
  document.body.appendChild(confetti);

  // Random position and colors
  confetti.style.left = Math.random() * window.innerWidth + "px";
  confetti.style.backgroundColor =
    ["#ff6ec7", "#ffb347", "#9d50bb", "#00f2fe", "#fcb045"][Math.floor(Math.random() * 5)];

  // Random animation duration
  let duration = Math.random() * 3 + 2;
  confetti.style.animationDuration = duration + "s";

  setTimeout(() => confetti.remove(), duration * 1000);
}

// Balloons generator
function createBalloon() {
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");
  document.body.appendChild(balloon);

  // Random horizontal position & color
  balloon.style.left = Math.random() * window.innerWidth + "px";
  balloon.style.background =
    `radial-gradient(circle at 30% 30%, ${
      ["#ff77c0", "#ff9a9e", "#fbc2eb", "#fad0c4", "#a18cd1"][Math.floor(Math.random() * 5)]
    }, #d63384)`;

  setTimeout(() => balloon.remove(), 8000);
}

// Launch effects
setInterval(createConfetti, 200); // every 200ms
setInterval(createBalloon, 2500); // every 2.5s
// Auto-redirect after loader
window.onload = () => {
  setTimeout(() => {
    document.getElementById("preparingPage").classList.remove("active");
    document.getElementById("welcomePage").classList.add("active");
  }, 4500); // 4.5 seconds
};
// Page toggle
function showCountdown() {
  document.getElementById("welcome").classList.remove("active");
  document.getElementById("countdownPage").classList.add("active");
  startCountdown();
}

// Countdown function
function startCountdown() {
  const targetDate = new Date("October 13, 2025 00:00:00").getTime();

  setInterval(() => {
    let now = new Date().getTime();
    let distance = targetDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML =
      `${days} Days : ${hours} Hrs : ${minutes} Min : ${seconds} Sec`;

    if (distance < 0) {
      document.getElementById("timer").innerHTML = "🎉 Happy Birthday Babu 😘💖 🎂";
    }
  }, 1000);
}
function showCountdown() {
  document.getElementById("welcome").classList.remove("active");
  document.getElementById("countdownPage").classList.add("active");
  startCountdown();
}

function startCountdown() {
  const targetDate = new Date("October 13, 2025 00:00:00").getTime();

  setInterval(() => {
    let now = new Date().getTime();
    let distance = targetDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
      document.getElementById("countBox").innerHTML = "🎉 Happy Birthday Babu 😘💖 🎂";
    }
  }, 1000);
}
function showCountdown() {
  document.getElementById("welcome").classList.remove("active");
  document.getElementById("countdownPage").classList.add("active");
  startCountdown();
}

function startCountdown() {
  const targetDate = new Date("October 13, 2025 00:00:00").getTime();

  let timer = setInterval(() => {
    let now = new Date().getTime();
    let distance = targetDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // Auto switch when time is up
    if (distance < 0) {
      clearInterval(timer);
      showCelebrate();
    }
  }, 1000);
}

function showCelebrate() {
  document.getElementById("countdownPage").classList.remove("active");
  document.getElementById("celebratePage").classList.add("active");
}
function showCelebrate() {
  document.getElementById("countdownPage").classList.remove("active");
  document.getElementById("celebratePage").classList.add("active");

  // 🎉 Extra Confetti Blast
  for (let i = 0; i < 50; i++) {
    setTimeout(createConfetti, i * 50); // rapid confetti burst
  }

  // 🎆 Fireworks Animation
  launchFireworks();
}

// Fireworks Function
function launchFireworks() {
  const canvas = document.createElement("canvas");
  canvas.id = "fireworks";
  canvas.style.position = "fixed";
  canvas.style.top = 0;
  canvas.style.left = 0;
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.pointerEvents = "none";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  function createFirework(x, y) {
    let colors = ["#ff6ec7", "#ffb347", "#9d50bb", "#00f2fe", "#fcb045"];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: x,
        y: y,
        angle: random(0, Math.PI * 2),
        speed: random(2, 7),
        radius: random(2, 4),
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 100
      });
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, i) => {
      p.x += Math.cos(p.angle) * p.speed;
      p.y += Math.sin(p.angle) * p.speed;
      p.life -= 1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
      if (p.life <= 0) particles.splice(i, 1);
    });

    requestAnimationFrame(animate);
  }

  // launch few fireworks
  setInterval(() => {
    createFirework(random(100, canvas.width - 100), random(100, canvas.height / 2));
  }, 1000);

  animate();
}
function showCakePage() {
  document.getElementById("celebratePage").classList.remove("active");
  document.getElementById("cakePage").classList.add("active");
}

function continueMagic() {
  alert("💖 Next Magic Surprise Coming Soon... 🔥");
  // Yahan tum agla page/game ya secret unlock add kar sakte ho
}
// 🎂 Blow Candles
function blowCandles() {
  document.querySelectorAll(".flame").forEach(f => f.style.display = "none");
  document.getElementById("wishText").innerText = "🥳 Wish poori ho gayi, meri jaan 💖";
}

// 🎁 Gift Box
function openGift() {
  document.getElementById("giftBox").style.display = "block";
}

// 🎶 Music Control
function toggleMusic() {
  let song = document.getElementById("birthdaySong");
  if (song.paused) {
    song.play();
  } else {
    song.pause();
  }
}
function toggleMusic() {
  const music = document.getElementById("bgMusic");
  const btn = document.getElementById("musicBtn");

  if (music.paused) {
    music.play();
    btn.innerText = "🔇 Pause Music";
  } else {
    music.pause();
    btn.innerText = "🔊 Play Music";
  }
}function startMusic() {
  const music = document.getElementById("bgMusic");
  const popup = document.getElementById("musicPopup");

  music.play();
  popup.classList.remove("active"); // popup hide
}



// Show Hug Page
function showHugPage() {
  hideAllPages();
  document.getElementById("hugPage").classList.add("active");
}

// Show Hug Popup
function showHugPopup() {
  hideAllPages();
  document.getElementById("hugPopup").classList.add("active");
}

// Back to Hug Page from Popup
function backToHug() {
  hideAllPages();
  document.getElementById("final").classList.add("active");
}

// Hide all pages helper
function hideAllPages() {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
}


