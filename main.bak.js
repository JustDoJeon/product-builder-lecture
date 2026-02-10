document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Function to set the theme
  function setTheme(theme) {
    if (theme === 'dark') {
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }

  // Load saved theme from localStorage or default to light
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);

  // Toggle theme on button click
  themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  });
});
