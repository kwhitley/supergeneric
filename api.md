## Modules

<dl>
<dt><a href="#module_collections/first">collections/first</a> ⇒ <code>object</code></dt>
<dd><p>returns first value in array</p>
</dd>
<dt><a href="#module_collections/last">collections/last</a> ⇒ <code>object</code></dt>
<dd><p>returns last value in array</p>
</dd>
<dt><a href="#module_collections/ascending">collections/ascending</a> ⇒ <code>function</code></dt>
<dd><p>ascending sort function.  Example: myArray.sort(ascending)</p>
</dd>
<dt><a href="#module_collections/descending">collections/descending</a> ⇒ <code>function</code></dt>
<dd><p>Descending sort function.  Example: myArray.sort(descending)</p>
</dd>
<dt><a href="#module_collections/sortBy">collections/sortBy</a> ⇒ <code>array</code></dt>
<dd><p>sorts by a predefined key.</p>
</dd>
<dt><a href="#module_collections/onlyNumbers">collections/onlyNumbers</a> ⇒ <code>array</code></dt>
<dd><p>returns only the numeric values of an array</p>
</dd>
<dt><a href="#module_collections/randomItem">collections/randomItem</a> ⇒ <code>object</code></dt>
<dd><p>returns a random entry from an array</p>
</dd>
<dt><a href="#module_time/getMilliseconds">time/getMilliseconds</a> ⇒ <code>number</code></dt>
<dd><p>converts text durations (e.g. &quot;2 minutes&quot;) to milliseconds</p>
</dd>
</dl>

<a name="module_collections/first"></a>

## collections/first ⇒ <code>object</code>
returns first value in array

**Returns**: <code>object</code> - first value/object in an array  

| Param | Type | Description |
| --- | --- | --- |
| values | <code>array</code> | an array of values/objects |

<a name="module_collections/last"></a>

## collections/last ⇒ <code>object</code>
returns last value in array

**Returns**: <code>object</code> - last value/object in an array  

| Param | Type | Description |
| --- | --- | --- |
| values | <code>array</code> | an array of values/objects |

<a name="module_collections/ascending"></a>

## collections/ascending ⇒ <code>function</code>
ascending sort function.  Example: myArray.sort(ascending)

**Returns**: <code>function</code> - ascending sort function  
<a name="module_collections/descending"></a>

## collections/descending ⇒ <code>function</code>
Descending sort function.  Example: myArray.sort(descending)

**Returns**: <code>function</code> - descending sort function  
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

## collections/onlyNumbers ⇒ <code>array</code>
returns only the numeric values of an array

**Returns**: <code>array</code> - only numeric values  

| Param | Type | Description |
| --- | --- | --- |
| values | <code>array</code> | an array of values |

<a name="module_collections/randomItem"></a>

## collections/randomItem ⇒ <code>object</code>
returns a random entry from an array

**Returns**: <code>object</code> - random value/object from array of values/objects  

| Param | Type | Description |
| --- | --- | --- |
| items | <code>array</code> | an array of values/objects |

<a name="module_time/getMilliseconds"></a>

## time/getMilliseconds ⇒ <code>number</code>
converts text durations (e.g. "2 minutes") to milliseconds

**Returns**: <code>number</code> - milliseconds  

| Param | Type | Description |
| --- | --- | --- |
| duration | <code>string</code> \| <code>number</code> | will leave numeric values alone but convert string values |

**Example**  
```js
getMilliseconds('2 minutes') // 120000
```
