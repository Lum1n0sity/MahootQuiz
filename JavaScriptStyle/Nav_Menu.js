document.addEventListener('DOMContentLoaded', function() {
    const nav_menu = document.getElementById('nav_menu');
    const menu_btn = document.getElementById('nav_menu_btn'); 
    const menu_btn_close = document.getElementById('nav_menu_close');
    let isNavMenuOpen = false;
  
    function openNavMenu() {
      nav_menu.style.display = 'block';
      menu_btn.style.display = 'none';
      menu_btn_close.style.display = 'block';
      isNavMenuOpen = true;
    }
  
    function closeNavMenu() {
      nav_menu.style.display = 'none';
      menu_btn.style.display = 'block';
      menu_btn_close.style.display = 'none';
      isNavMenuOpen = false;
    }
  
    menu_btn.addEventListener('click', function() {
      if (window.innerWidth <= 900 && !isNavMenuOpen) {
        openNavMenu();
      }
    });
  
    menu_btn_close.addEventListener('click', function() {
      if (window.innerWidth <= 900 && isNavMenuOpen) {
        closeNavMenu();
      }
    });
  
    window.addEventListener('resize', function() {
      if (window.innerWidth > 900) {
        nav_menu.style.display = 'none';
        menu_btn.style.display = 'none';
        menu_btn_close.style.display = 'none';
        isNavMenuOpen = false;
      } else {
        if (!isNavMenuOpen) {
          menu_btn.style.display = 'block';
        }
      }
    });
  
    // Initial state based on window width
    if (window.innerWidth <= 900) {
      nav_menu.style.display = 'none';
      menu_btn.style.display = 'block';
      menu_btn_close.style.display = 'none';
      isNavMenuOpen = false;
    }
  });
  