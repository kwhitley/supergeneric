'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rounder = exports.mad = exports.median = exports.round = exports.stddev = exports.mean = exports.sum = exports.random = exports.max = exports.min = undefined;

var _collections = require('./collections');

// min(array) --> returns min value in array
var min = exports.min = function min(values) {
  return Math.min.apply(Math, (0, _collections.onlyNumbers)(values));
};

// max(array) --> returns max value in array
var max = exports.max = function max(values) {
  return Math.max.apply(Math, (0, _collections.onlyNumbers)(values));
};

// random(min, max) --> returns random value between min and max (inclusive)
var random = exports.random = function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// sum(values) --> returns the sum of values [array]
var sum = exports.sum = function sum(values) {
  var sum = 0;
  var filtered = (0, _collections.onlyNumbers)(values);

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = filtered[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var v = _step.value;

      sum += v;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return sum;
};

// MEAN([values])
var mean = exports.mean = function mean() {
  var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var filtered = (0, _collections.onlyNumbers)(values);

  return sum(filtered) / filtered.length;
};

// s = sqrt(sum((x - m)^2)/(n - 1))
var stddev = exports.stddev = function stddev(values) {
  var filtered = (0, _collections.onlyNumbers)(values);
  var m = mean(filtered);
  var n = filtered.length;
  var sumerror = 0;

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = filtered[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var v = _step2.value;

      sumerror += Math.pow(v - m, 2);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return Math.sqrt(sumerror / (n - 1));
};

var round = exports.round = function round(value) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var mult = Math.pow(10, precision);

  return Math.round(value * mult) / mult;
};

var median = exports.median = function median() {
  var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var filtered = (0, _collections.onlyNumbers)(values);
  var sorted = filtered.sort(_collections.ascending);
  var mid = Math.floor(sorted.length / 2);

  if (sorted.length % 2) {
    return sorted[mid];
  } else {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  }
};

// median absolute deviation
var mad = exports.mad = function mad(values) {
  var filtered = (0, _collections.onlyNumbers)(values);
  var medianValue = median(filtered);
  var deviations = filtered.map(function (v) {
    return Math.abs(v - medianValue);
  });

  return median(deviations);
};

var rounder = exports.rounder = function rounder() {
  var precision = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return function (value) {
    return round(value, precision);
  };
};