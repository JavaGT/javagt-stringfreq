# stringfreq
returns stats about the frequency of different strings of characters separated by a custom divider

### Usage
```
var freq = require('stringfreq')
var strings = [
  'this is a string',
  'another string is here',
  'more string'
]

console.log(freq(strings, ' '))
//[ [ 'string', 3 ],
//  [ 'is', 2 ],
//  [ 'more', 1 ],
//  [ 'here', 1 ],
//  [ 'another', 1 ],
//  [ 'a', 1 ],
//  [ 'this', 1 ] ]

console.log(freq(strings, ''))
// [ [ ' ', 7 ],
//   [ 'i', 6 ],
//   [ 'r', 6 ],
//   [ 's', 6 ],
//   [ 't', 5 ],
//   [ 'n', 4 ],
//   [ 'e', 4 ],
//   [ 'g', 3 ],
//   [ 'h', 3 ],
//   [ 'o', 2 ],
//   [ 'a', 2 ],
//   [ 'm', 1 ] ]
```
