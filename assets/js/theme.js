function toggleTheme() {
  const themeLink = document.getElementById('theme-style');
  const current = themeLink.getAttribute('href');

  if (current.includes('vermelho.css')) {
    themeLink.setAttribute('href', 'assets/css/colorido.css');
  } else {
    themeLink.setAttribute('href', 'assets/css/vermelho.css');
  }
}
