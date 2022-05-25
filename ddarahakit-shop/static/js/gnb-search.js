const gnbSearch = document.querySelector('.gnb-search');
const gnbSearchInput = gnbSearch.querySelector('.form-input');
const gnbSearchHistory = gnbSearch.querySelector('.search-history');
const gnbSearchHistoryList = gnbSearchHistory.querySelector('ol');

const clearButton = gnbSearchHistory.querySelector(
  '.search-history-header button'
);
const deleteButton = gnbSearchHistoryList.querySelector('.delete-button');

function closeGnbSearchHistory() {
  gnbSearchHistory.classList.remove('is-active');
  window.removeEventListener('click', closeGnbSearchHistoryOnClickingOutside);
}

function closeGnbSearchHistoryOnClickingOutside(event) {
  gnbSearch.contains(event.target) || closeGnbSearchHistory();
}

function openGnbSearchHistory() {
  if (!gnbSearchHistoryList.children.length) return;

  if (!gnbSearchHistory.matches('.is-active')) {
    window.addEventListener('click', closeGnbSearchHistoryOnClickingOutside);
  }
  gnbSearchHistory.classList.add('is-active');
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory);

function clearGnbSearchHistoryList() {
  gnbSearchHistoryList.innerHTML = '';
  closeGnbSearchHistory();
}

clearButton.addEventListener('click', clearGnbSearchHistoryList);

function deleteSearchHistoryItem(event) {
  event.stopPropagation();
  // NOTE: event.stopPropagation를 쓴 이유
  // closeGnbSearchHistoryOnClickingOutside 함수는 대상이 불특정하기 때문에
  // 이벤트 전파를 막을 때 쓰는 if(e.currentTarget !== e.target) return;은 오히려 동작을 방해함

  const target = event.target;
  if (!target.matches('.delete-button')) return;

  const itemToDelete = target.parentNode;
  this.removeChild(itemToDelete);

  gnbSearchHistoryList.children.length || closeGnbSearchHistory();
}

gnbSearchHistoryList.addEventListener('click', deleteSearchHistoryItem);
