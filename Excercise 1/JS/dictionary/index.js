document.addEventListener('DOMContentLoaded', function () {
  // constant
  const form = document.getElementById('searchForm');
  const word = document.querySelector('.section-title');
  const phonetic = document.querySelector('.section-phonetic');
  const definition = document.querySelector('.word-definition');
  const partOfSpeech = document.querySelector('.word-type');
  const message = document.querySelector('.section-message');
  const heading = document.querySelector('.word-heading');
  const contentWord = document.querySelector('.section-content');

  //create class
  class Word {
    constructor(word, phonetic, partOfSpeech, definition) {
      this.word = word;
      this.phonetic = phonetic;
      this.partOfSpeech = partOfSpeech;
      this.definition = definition;
    }
  }

  // function search word
  const searchWord = (event) => {
    event.preventDefault();
    const inputWord = document.querySelector('.search-input').value.trim();

    // check input is null ?
    if (!inputWord) {
      message.textContent = 'Please enter the word!';
      contentWord.classList.add('hidden');
      return;
    }

    // setup api
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`;

    // pending status
    message.textContent = 'Loading...';

    // hide content when loading
    contentWord.classList.add('hidden');

    //fetch api
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Cannot find word!');
        }
        return response.json();
      })
      .then((wordData) => {
        const resultData = wordData[0];

        // Get data[0]
        const dictionaryData = new Word(
          resultData.word || '',
          resultData.phonetic || '',
          resultData.meanings[0].partOfSpeech || '',
          resultData.meanings[0].definitions[0].definition || ''
        );

        // Render html
        word.textContent = dictionaryData.word;
        phonetic.textContent = dictionaryData.phonetic;
        partOfSpeech.textContent = dictionaryData.partOfSpeech;
        definition.textContent = dictionaryData.definition;

        // show text 'meaning' when return success
        heading.classList.add('visible');
        // clear status pending
        message.textContent = '';

        // show content when loading complete
        contentWord.classList.remove('hidden');
      })
      .catch((error) => {
        console.error(error);
        word.textContent = '';
        phonetic.textContent = '';
        partOfSpeech.textContent = '';
        definition.textContent = '';
        heading.classList.remove('visible');
        message.textContent = 'Can not find the word';
      });
  };

  form.addEventListener('submit', searchWord);
});
