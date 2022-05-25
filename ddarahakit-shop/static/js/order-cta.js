const orderCTA = document.querySelector('.order-cta');
const orderModal = document.querySelector('.order-form-modal');
const orderModalOverlay = document.querySelector('.overlay');
const [ctaBookmarkButton, ctaBuyButton] = orderCTA.children;
const [bookmarkIcon, bookmarkSpan] = ctaBookmarkButton.children;

function openOrderModal() {
  orderModal.classList.add('is-open');
  orderModalOverlay.classList.add('is-active');
}

ctaBuyButton.addEventListener('click', openOrderModal);

function closeOrderModal() {
  orderModal.classList.remove('is-open');
  orderModalOverlay.classList.remove('is-active');
}

orderModalOverlay.addEventListener('click', closeOrderModal);

function toggleCtaBookmarkButton() {
  let count = Number(bookmarkSpan.innerText.replaceAll(',', ''));
  let newCount = count;

  if (this.matches('.is-active')) {
    bookmarkIcon.setAttribute('class', 'ic-bookmark');
    newCount -= 1;
  } else {
    bookmarkIcon.setAttribute('class', 'ic-bookmark-filled');
    newCount += 1;
  }

  this.classList.toggle('is-active');
  updateBookmarkSpan(newCount);
}

function updateBookmarkSpan(num) {
  bookmarkSpan.innerText = num.toLocaleString();
  bookmarkSpan.setAttribute('aria-label', `북마크 ${num}회`);
}

ctaBookmarkButton.addEventListener('click', toggleCtaBookmarkButton);
