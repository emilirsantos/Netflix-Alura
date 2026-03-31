const checkbox = document.getElementById('themeToggle');

const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.dataset.theme = savedTheme;
checkbox.checked = savedTheme === 'light';

checkbox.addEventListener('change', () => {
  const next = checkbox.checked ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  localStorage.setItem('theme', next);
});