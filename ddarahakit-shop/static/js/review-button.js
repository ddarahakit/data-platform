const reviewList = document.querySelector('.product-review .review-list');

const HELPFUL = '도움됨';
const NOT_HELPFUL = '도움이 돼요';
const checkIcon = '<i class="ic-check" aria-hidden="true"></i>';

function toggleReviewLikeButton(event) {
  const target = event.target;
  if (target.tagName !== 'BUTTON') return;

  const isLiked = target.matches('.btn-primary');
  const textElement = target.nextElementSibling;
  const reviewCardFooter = target.parentNode;

  if (isLiked) {
    target.setAttribute('class', 'btn-outlined btn-32');
    target.innerHTML = NOT_HELPFUL;
  } else {
    target.setAttribute('class', 'btn-primary btn-32');
    target.innerHTML = checkIcon + HELPFUL;
  }

  if (textElement) {
    const countSpan = textElement.querySelector('span');
    const count = Number(countSpan.textContent.replaceAll(',', ''));

    let newCount = isLiked ? count - 1 : count + 1;

    if (!newCount) {
      reviewCardFooter.removeChild(textElement);
    } else {
      countSpan.textContent = newCount.toLocaleString();
    }
  } else {
    if (!isLiked) {
      const newTextElement = document.createElement('p');
      newTextElement.innerHTML =
        '<strong><span>1</span>명</strong>에게 도움이 되었습니다.';

      reviewCardFooter.appendChild(newTextElement);
    }
  }
}

reviewList.addEventListener('click', toggleReviewLikeButton);
