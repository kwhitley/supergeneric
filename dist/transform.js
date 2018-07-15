'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var recurse = exports.recurse = function recurse(fn) {
  return function (data) {
    if (data.length) {
      return data.map(recurse(fn));
    }

    for (var key in data) {
      data[key] = fn(data[key], key);
    }

    return data;
  };
};

var numbers = exports.numbers = function numbers(value) {
  var num = Number(value);

  return isNaN(num) ? value : num;
};

var dates = exports.dates = function dates(value, key) {
  key = key.toLowerCase();
  var isDate = key.includes('time') || key.includes('date');

  return isDate ? new Date(value) : value;
};

var convert = exports.convert = function convert(data) {
  for (var _len = arguments.length, fns = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    fns[_key - 1] = arguments[_key];
  }

  fns.forEach(function (fn) {
    data = recurse(fn)(data);
  });

  return data;
};

var merge = exports.merge = function merge() {
  return Object.assign.apply(Object, arguments);
};

var mergeClean = exports.mergeClean = function mergeClean() {
  var merged = merge.apply(undefined, arguments);

  for (var key in merged) {
    var value = merged[key];

    if (value === undefined) {
      delete merged[key];
    }
  }

  return merged;
};