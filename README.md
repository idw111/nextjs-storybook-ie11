This repository was created to find out issue in nextjs + storybook in IE11.
It seems that importing next/link module has some issue with storybook.
In components/Colors.js

```javascript
import Link from 'next/link'

const Color = ({}) => ...
```
does not render in IE11


```javascript
// import Link from 'next/link'

const Color = ({}) => ...
```
works in IE11
