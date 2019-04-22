import loadWords from 'most-common-words-by-language/loadWords';
const lo = require('lodash');

function findWord(word) {
  const allWords = loadWords();

  return Object.assign(
    {},
    ...lo.entries(allWords)
      .map(([name, words]) => {
        const foundIndex = words.findIndex(w => w.toLowerCase() === word.toLowerCase());

        return foundIndex >= 0 ? { [name]: foundIndex + 1 } : {};
      }),
  );
}

export default findWord;
