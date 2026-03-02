document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  
  themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    let targetTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
  });

  // Stay Timer
  const timerElement = document.getElementById('stay-timer');
  let seconds = 0;
  setInterval(() => {
    seconds++;
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    timerElement.textContent = `${h}:${m}:${s}`;
  }, 1000);
});

// Random Quotes
const quotes = [
  "청춘은 여행이다. - 익명",
  "가장 빛나는 순간은 바로 지금이다.",
  "도전하지 않는 청춘은 청춘이 아니다.",
  "당신의 꿈을 믿으세요. 세상은 당신의 편입니다.",
  "오늘의 작은 노력이 내일의 큰 변화를 만듭니다."
];

function showQuote() {
  const quoteText = document.getElementById('quote-text');
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex];
  quoteText.style.color = 'var(--primary-color)';
  quoteText.style.fontWeight = 'bold';
}

// Random Background Vibe
function changeVibe() {
  const colors = ['#fef2f2', '#f0f9ff', '#f0fdf4', '#fffbeb', '#faf5ff'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
  setTimeout(() => {
    document.body.style.backgroundColor = 'var(--bg-color)';
  }, 2000);
}

function startInteraction() {
  window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
