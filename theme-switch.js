const storedStyle = localStorage.getItem('style');
if (!storedStyle) {
  setTheme('sakura');
} else {
  setTheme(storedStyle);
}

const switches = document.getElementsByClassName('switch');
for (const el of switches) {
  el.addEventListener('click', () => {
    setTheme(el.dataset.theme);
  });
}

function setTheme(theme) {
  if (theme === 'purple') {
    document.getElementById('switcher-id').href = '/themes/purple.css';
  } else if (theme === 'mail') {
    document.getElementById('switcher-id').href = '/themes/mail.css';
  } else if (theme === 'stars') {
    document.getElementById('switcher-id').href = '/themes/stars.css';
  } else if (theme === 'spooky') {
    document.getElementById('switcher-id').href = '/themes/spooky.css';
  } else if (theme === 'lace') {
    document.getElementById('switcher-id').href = '/themes/lace.css';
  } else if (theme === 'sakura') {
    document.getElementById('switcher-id').href = '/themes/sakura.css';
  } else if (theme === 'green') {
    document.getElementById('switcher-id').href = '/themes/green.css';
  }  // when adding new themes, be sure to also add it to  _includes/layout/themes.html and style.css under "switch" //
  localStorage.setItem('style', theme);
}
