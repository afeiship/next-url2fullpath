# next-url2fullpath
> Get url full pathname + others.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-url2fullpath
```

## usage
```js
import '@jswork/next-url2fullpath';

const url1 = 'https://github.com/afeiship/next-url2fullpath';
const url2 = 'https://confluence.demo.cn/pages/viewpage.action?pageId=25196240';
const url3 = 'https://owlcarousel2.github.io/OwlCarousel2/demos/urlhashnav.html#seven';

nx.url2fullpath(url1) // '/afeiship/next-url2fullpath'
nx.url2fullpath(url2) // '/pages/viewpage.action?pageId=25196240'
nx.url2fullpath(url3) // '/OwlCarousel2/demos/urlhashnav.html#seven'
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-url2fullpath/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-url2fullpath
[version-url]: https://npmjs.org/package/@jswork/next-url2fullpath

[license-image]: https://img.shields.io/npm/l/@jswork/next-url2fullpath
[license-url]: https://github.com/afeiship/next-url2fullpath/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-url2fullpath
[size-url]: https://github.com/afeiship/next-url2fullpath/blob/master/dist/next-url2fullpath.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-url2fullpath
[download-url]: https://www.npmjs.com/package/@jswork/next-url2fullpath
