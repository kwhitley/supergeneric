supergeneric
=======
#### supergeneric helper functions

[![npm version](https://badge.fury.io/js/supergeneric.svg)](https://www.npmjs.com/package/supergeneric)
[![node version support](https://img.shields.io/node/v/supergeneric.svg)](https://www.npmjs.com/package/supergeneric)
[![Build Status via Travis CI](https://travis-ci.org/kwhitley/supergeneric.svg?branch=master)](https://travis-ci.org/kwhitley/supergeneric)
[![Coverage Status](https://coveralls.io/repos/github/kwhitley/supergeneric/badge.svg?branch=master)](https://coveralls.io/github/kwhitley/supergeneric?branch=master)
[![NPM downloads](https://img.shields.io/npm/dt/supergeneric.svg?style=flat-square)](https://www.npmjs.com/package/supergeneric)

## Modules

<dl>
<dt><a href="#module_collections/first">collections/first</a></dt>
<dd><p>returns first value in array</p>
</dd>
<dt><a href="#module_collections/last">collections/last</a></dt>
<dd><p>returns last value in array</p>
</dd>
<dt><a href="#module_collections/ascending">collections/ascending</a></dt>
<dd><p>ascending sort function.  Example: myArray.sort(ascending)</p>
</dd>
<dt><a href="#module_collections/descending">collections/descending</a></dt>
<dd><p>Descending sort function.  Example: myArray.sort(descending)</p>
</dd>
<dt><a href="#module_collections/sortBy">collections/sortBy</a> ⇒ <code>array</code></dt>
<dd><p>sorts by a predefined key.</p>
</dd>
<dt><a href="#module_collections/onlyNumbers">collections/onlyNumbers</a></dt>
<dd><p>returns only the numeric values of an array</p>
</dd>
<dt><a href="#module_collections/randomItem">collections/randomItem</a></dt>
<dd><p>returns a random entry from an array</p>
</dd>
</dl>

<a name="module_collections/first"></a>

## collections/first
returns first value in array


| Param | Type | Description |
| --- | --- | --- |
| values | <code>array</code> | an array of values/objects |

<a name="module_collections/last"></a>

## collections/last
returns last value in array


| Param | Type | Description |
| --- | --- | --- |
| values | <code>array</code> | an array of values/objects |

<a name="module_collections/ascending"></a>

## collections/ascending
ascending sort function.  Example: myArray.sort(ascending)

<a name="module_collections/descending"></a>

## collections/descending
Descending sort function.  Example: myArray.sort(descending)

<a name="module_collections/sortBy"></a>

## collections/sortBy ⇒ <code>array</code>
sorts by a predefined key.

**Returns**: <code>array</code> - sorted by attribute @name

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | attribute name for object sorting |
| descending | <code>boolean</code> | set to true for descending sort |

**Example**
```js
people.sort(sortBy('name'))
```
<a name="module_collections/onlyNumbers"></a>

## collections/onlyNumbers
returns only the numeric values of an array


| Param | Type | Description |
| --- | --- | --- |
| values | <code>array</code> | an array of values |

<a name="module_collections/randomItem"></a>

## collections/randomItem
returns a random entry from an array


| Param | Type | Description |
| --- | --- | --- |
| items | <code>array</code> | an array of values/objects |
