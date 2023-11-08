const storedStyle = localStorage.getItem('style');
if (!storedStyle) {
  setTheme('purple');
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
  } // when adding new themes, be sure to also add it to the _layouts (both) and footer (for mobile) and style.css "switch" //
  localStorage.setItem('style', theme);
}
