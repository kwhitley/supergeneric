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

