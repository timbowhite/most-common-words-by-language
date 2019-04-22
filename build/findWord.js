'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loadWords = require('./loadWords');

var _loadWords2 = _interopRequireDefault(_loadWords);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const lo = require('lodash');

function findWord(word) {
  const allWords = (0, _loadWords2.default)();

  return Object.assign({}, ...lo.entries(allWords).map(([name, words]) => {
    const foundIndex = words.findIndex(w => w.toLowerCase() === word.toLowerCase());

    return foundIndex >= 0 ? { [name]: foundIndex + 1 } : {};
  }));
}

exports.default = findWord;