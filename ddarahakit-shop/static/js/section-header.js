const sectionHeaderIconButtonList = [
  ...document.querySelectorAll('.product-section-header .icon-button.sm-only'),
  ...document.querySelectorAll('.product-section-header.sm-only .icon-button'),
];

function showFullSection(event) {
  const section = event.currentTarget.parentNode.parentNode;
  section.classList.add('is-open');
}

sectionHeaderIconButtonList.forEach((iconButton) => {
  iconButton.addEventListener('click', showFullSection);
});
