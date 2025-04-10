// constant
const form = document.getElementById('search-form');
const word = document.querySelector('.section-title');
const phonetic = document.querySelector('.section-phonetic');
const definition = document.querySelector('.word-definition');
const partOfSpeech = document.querySelector('.word-type');
const message = document.querySelector('.section-message');
const buttonSearch = document.querySelector('.button-input');
const contentWord = document.querySelector('.section-content');
const inputSearch = document.querySelector('.search-input');
const heading = document.querySelector('.word-heading');

// create class
class WordData {
  constructor(data) {
    this.word = data?.word;
    this.phonetic =
      data?.phonetic ||
      data?.phonetics?.[0]?.text ||
      data?.phonetics?.[1]?.text ||
      '(No phonetic)';
    this.definition =
      data?.meanings?.[0]?.definitions?.[0]?.definition || 'No definition';
    this.partOfSpeech =
      data?.meanings?.[0]?.partOfSpeech || 'No part of speech';
  }
}

// function search word
const searchWord = (event) => {
  event.preventDefault();
  const inputWord = inputSearch.value.trim();

  //check input is null ?
  if (!inputWord) {
    message.textContent = 'Please enter the word!';
    return;
  }

  //set api
  const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`;
  message.textContent = 'Loading...';
  buttonSearch.disabled = true;
  contentWord.classList.add('hidden');

  const renderDictionaryData = (dictionaryData) => {
    // use inner HTML
    contentWord.innerHTML = `
        <div class="section-header">
            <h2 class="section-title">${dictionaryData.word}</h2>
            <p class="section-phonetic">${dictionaryData.phonetic}</p>
            <div class="section-type">
            <span class="word-type">${dictionaryData.partOfSpeech}</span>
            </div>
        </div>
        <div class="section-body">
            <p class="word-heading">Meaning</p>
            <p class="word-definition">${dictionaryData.definition}</p>
        </div>
        `;

    //set button abled and content visible when loading done
    message.textContent = '';
    buttonSearch.disabled = false;
    contentWord.classList.remove('hidden');
  };

  //function render error
  const renderError = () => {
    message.textContent = 'Can not find the word';
    buttonSearch.disabled = false;
  };

  //fetch data
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Cannot find word!');
      }
      return response.json();
    })
    .then((wordData) => {
      const resultData = wordData[0];
      const dictionaryData = new WordData(resultData);

      renderDictionaryData(dictionaryData);
    })
    .catch((error) => {
      console.error(error);
      renderError();
    });
};

form.addEventListener('submit', searchWord);
