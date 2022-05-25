const sidebarNav = document.querySelector('.sidebar-nav');
const sidebarDrawerMenuList = document.querySelectorAll(
  '.sidebar-nav .drawer-menu'
);

function closeDrawerMenuAll() {
  sidebarDrawerMenuList.forEach((drawer) => {
    drawer.classList.remove('is-open');
  });
}

function onClick(event) {
  const target = event.target;
  const targetIsDrawerMenuButton = target.matches('.drawer-menu-button');

  if (!targetIsDrawerMenuButton) return;

  const drawerMenu = target.parentNode;
  const isOpened = drawerMenu.matches('.is-open');

  if (isOpened) {
    drawerMenu.classList.remove('is-open');
  } else {
    closeDrawerMenuAll();
    drawerMenu.classList.add('is-open');
  }
}

sidebarNav.addEventListener('click', onClick);
