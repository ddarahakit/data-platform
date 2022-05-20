const myMenu = document.querySelector('.my-menu');
const myMenuButton = document.querySelector('.my-menu-button');
const myMenuContent = document.querySelector('.my-menu-content');

function closeMyMenuOnClickingOutside(event) {
  const target = event.target;

  if (!myMenu.contains(target)) {
    myMenu.classList.remove('is-active');

    window.removeEventListener('click', closeMyMenuOnClickingOutside);
  }
}

function toggleMyMenu() {
  myMenu.classList.toggle('is-active');
  window.addEventListener('click', closeMyMenuOnClickingOutside);
}

myMenuButton.addEventListener('click', toggleMyMenu);
