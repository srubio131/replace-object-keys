# replace-object-keys
Replace object keys to camel case from snake case

## Usage
```javascript
import { normalizeObject } from 'replace-object-keys'

const obj = { object_one: { hello_one: 1 } }
console.log(normalizeObject(obj))

```
Output
```
{ objectOne: { helloOne: 1 } }
```

## Example
https://stackblitz.com/edit/replace-object-keys
