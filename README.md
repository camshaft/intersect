intersect
=========

Find the intersections in two arrays

Installation
------------

### Node

```sh
$ npm install camshaft/intersect
```

### Component

```sh
$ component install camshaft/intersect
```

Usage
-----

```js
var intersect = require('intersect');

intersect([1, 2, 3], [2, 3]);
// [2, 3]

intersect([1, 2, 3], [4, 5, 6])
// []
```
