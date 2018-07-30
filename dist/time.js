'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var timeUnits = {
  ms: 1,
  second: 1000,
  minute: 60000,
  hour: 3600000,
  day: 3600000 * 24,
  week: 3600000 * 24 * 7,
  month: 3600000 * 24 * 30

  // getMilliseconds(duration) --> converts string representation to ms (e.g. '2 minutes' => 1000 * 60 * 2)
};var getMilliseconds = exports.getMilliseconds = function getMilliseconds(duration) {
  if (!['string', 'number'].includes(typeof duration === 'undefined' ? 'undefined' : _typeof(duration))) {
    throw new Error('getMilliseconds(duration) expects a string or number input');
  }

  var asNumber = Number(duration);

  if (!isNaN(asNumber)) {
    return asNumber;
  }

  if (typeof duration !== 'string') {
    throw new Error('getMilliseconds(duration) expects a string or number input');
  }

  var split = duration.match(/^([\d\.,]+)\s?(\w+)$/);

  if (split.length === 3) {
    var len = parseFloat(split[1]);
    var unit = split[2].replace(/s$/i, '').toLowerCase();
    if (unit === 'm') {
      unit = 'ms';
    }

    return (len || 1) * (timeUnits[unit] || 0);
  }

  throw new Error('getMilliseconds(duration) requires a string in the following format "3 minutes"');
};