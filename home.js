function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

const fadeTexts = ["Record Your Tracks!", "Professional Mixing!", "Master Your Sound!", "Studio-Grade Equipment!", "Create Your Next Hit!"];
  let fadeIndex = 0;
  const fadeTextElement = document.querySelector(".fade-text");

setInterval(() => {
    fadeTextElement.style.opacity = 0;
    setTimeout(() => {
      fadeTextElement.textContent = fadeTexts[fadeIndex];
      fadeTextElement.style.opacity = 1;
      fadeIndex = (fadeIndex + 1) % fadeTexts.length;
    }, 1000); // Wait for fade-out to complete before changing text
  }, 3000); // Total cycle time (3 seconds)