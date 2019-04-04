This repository was created to find out issue in nextjs + storybook in IE11.
It seems that importing next module (next/link and next/router) has some issue with storybook.

In components/Colors.js

```javascript
import Link from 'next/link';
import { withRouter } from 'next/router';

const Color = ({}) => ...
```

does not render in IE11

```javascript
// import Link from 'next/link';
// import { withRouter } from 'next/router';

const Color = ({}) => ...
```

works in IE11

# How to make nextjs + storybook work in IE11

-   add fake next module to .storybook/
    -   .storybook/next/link.js
    -   .storybook/next/router.js
-   replace next/link and next/router with fake module in custom storybook webpack
    -   .storybook/webpack.config.js
