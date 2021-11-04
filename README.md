supergeneric
=======
[![npm version](https://badge.fury.io/js/supergeneric.svg)](https://www.npmjs.com/package/supergeneric)

Just a collection of my favorite bespoke functions that I manage to work into nearly every project.  Added to NPM for my convenience (and yours, if you happen to use it)!


### Importing

```js
import { sum } from 'supergeneric'

// or for the tree-shaking minimalists...
import { sum } from 'supergeneric/sum'
```

### Migrating from v1.x to v2.x
Previously, functions were grouped into collections, such as `import { sum } from 'supergeneric/math'`.  This is no longer the case.  All functions are named exports from the base module, or may be referenced directly by name (e.g. "supergeneric/sum").
```js
// version 1.x
import { sum } from 'supergeneric/math'

// version 2.x
import { sum } from 'supergeneric'
```

# API


