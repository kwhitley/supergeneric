'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomItem = exports.onlyNumbers = exports.sortBy = exports.descending = exports.ascending = exports.last = exports.first = undefined;

var _math = require('./math');

// first(array) --> returns first value in array
var first = exports.first = function first(values) {
  return values[0];
};

// last(array) --> returns last value in array
var last = exports.last = function last(values) {
  return values[values.length - 1];
};

// sort helper function (e.g. values.sort(ascending))
var ascending = exports.ascending = function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
};

// sort helper function (e.g. values.sort(descending))
var descending = exports.descending = function descending(a, b) {
  return a > b ? -1 : a < b ? 1 : 0;
};

var sortBy = exports.sortBy = function sortBy(key, _ref) {
  var _ref$ascending = _ref.ascending,
      ascending = _ref$ascending === undefined ? true : _ref$ascending;
  return function (a, b) {
    return a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0;
  };
};

var onlyNumbers = exports.onlyNumbers = function onlyNumbers(values) {
  return values.filter(function (v) {
    return typeof v === 'number' && !isNaN(Number(v));
  });
};

var randomItem = exports.randomItem = function randomItem(items) {
  return items[(0, _math.random)(0, items.length - 1)];
};