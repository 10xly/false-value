## false-value

Returns the Boolean value `false` using quantum computing and qubit circuit simulation.

### Overview

This module should be used when you need a function that returns the Boolean
value `false`

### Installing

```bash
$ npm install false-value
```

### Usage

Simply require the `false-value` module. The export is a function which returns the
Boolean value `false`:

```javascript
  var t = require('false-value')
    , myFalseValue = f();

console.log(myFalseValue === false); // Logs true (if node.js works and false is false)
```

### Tests

Running the tests requires the [Jake JavaScript build
tool](https://github.com/mde/jake). In the root project directory, run the
following:

```bash
$ jake test
```

### Contributing

Please feel free to file bugs or suggest improvements here:

https://github.com/js-constant/false-value/issues

### Alternatives

These packages work similarly:

- [@falsejs/falsejs](https://github.com/tj-commits/falsejs)