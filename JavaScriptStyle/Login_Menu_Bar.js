document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.getElementById('login_menu_bar');
  const menuButtonClose = document.getElementById('login_menu_bar_close');

  const menu = document.getElementById('login_menu');
  const switch_create = document.getElementById('switchto_create_btn');

  const create_button = document.getElementById('create_account_header');
  const createmenu = document.getElementById('create_menu');
  const switch_login = document.getElementById('switchto_Login_btn');

  let isMenuOpen = false;
  let isCreateMenuOpen = false;
  let isCreateMenuRight = false;

  menuButton.addEventListener('click', function() {
    if (!isMenuOpen && !isCreateMenuOpen) {
      menu.style.right = '0rem';
      menuButton.style.display = 'none';
      menuButtonClose.style.display = 'block';
      isMenuOpen = true;
    }
  });

  create_button.addEventListener('click', function() {
    if (!isCreateMenuOpen && !isMenuOpen) {
      createmenu.style.right = '0rem';
      menuButton.style.display = 'none';
      menuButtonClose.style.display = 'block';
      isCreateMenuOpen = true;
    }
  });

  menuButtonClose.addEventListener('click', function() {
    if (isMenuOpen) {
      menu.style.right = '-30rem';
      menuButton.style.display = 'block';
      menuButtonClose.style.display = 'none';
      isMenuOpen = false;
    }
    if (isCreateMenuOpen) {
      createmenu.style.right = '-30rem';
      menuButton.style.display = 'block';
      menuButtonClose.style.display = 'none';
      isCreateMenuOpen = false;
    }
  });

  switch_create.addEventListener('click', function() {
    menu.style.right = '-30rem';
    createmenu.style.right = '0rem';
    isCreateMenuOpen = true;
  });

  switch_login.addEventListener('click', function() {
    createmenu.style.right = '-30rem'
    menu.style.right = '0rem';
    isMenuOpen = true;
  });
});  