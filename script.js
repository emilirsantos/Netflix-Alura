const checkbox = document.getElementById('themeToggle');

const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);
checkbox.checked = savedTheme === 'light';

checkbox.addEventListener('change', () => {
  const next = checkbox.checked ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});