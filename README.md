# scroll-to-element

An alternative scroll library to scrollIntoView.

[![npm][npm-version-img]][npm-url]
[![npm][npm-download-img]][npm-url]
[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/@yishiashia/scroll-to-element/badge)](https://data.jsdelivr.com/v1/package/npm/@yishiashia/scroll-to-element/badge)
[![GitHub issues][github-issue-img]][github-issue-url]
![license][license-img]

[![NPM](https://nodei.co/npm/@yishiashia/scroll-to-element.png?mini=true)](https://www.npmjs.com/package/@yishiashia/scroll-to-element)

## Installation
You can install `scroll-to-element` with npm, or just get started quickly with CDN.

### Install from npm

    $ npm install @yishiashia/scroll-to-element

After the package is installed, then you can import the module into you code:

## Syntax

```javascript
scrollToElement(element, [options])
```

<br/>

For example:
```javascript
scrollToElement(document.getElementById("scroll-target"));
scrollToElement(document.getElementById("scroll-target"), {
  duration: 300
});
scrollToElement(document.getElementById("scroll-target"), {
  duration: 300, easeFunc: "linear"
});
```

### Install from CDN
There is `jsDelivr` CDN available for quickly integrated with your web page.

```
https://cdn.jsdelivr.net/npm/@yishiashia/scroll-to-element@2.0.2
```

or

```html
<script src="https://cdn.jsdelivr.net/npm/@yishiashia/scroll-to-element@2.0.2"></script>
```

## Basic Usages

Here's a example that directly include the library into html page. For further customization details, see [options](#options).

```html
<html lang="en">
<head>
  <title>scroll-to-element demo</title>

  <!-- Load scrollToElement library -->
  <script src="https://cdn.jsdelivr.net/npm/@yishiashia/scroll-to-element@2.0.2"></script>
  <!-- End Load -->

  <script>
    function doScroll() {
      /**
       * Use window.scrollToElement function to
       * scroll to the target element
       */
      window.scrollToElement(
        document.getElementById('scroll-target'),
        {
          duration: 300,
          easeFunc: "linear"
        }
      );
    }
  </script>

  <style>
    body {
      min-height: 200vh;
    }
    div.content-block {
      height: 100px;
      width: 90%;
      margin: 20px auto;
      border: solid 1px black;
    }
    button {
      margin: 0 auto;
      display: block;
    }
  </style>

</head>
<body>

  <div class="content-block"></div>
  <div class="content-block"></div>
  <div id="scroll-target" class="content-block">
    <strong>I am scroll target.</strong>
  </div>

  <br /><br />

  <button onclick="doScroll();">Scroll Me</button>
</body>
</html>

```

Anthor way to use this library just import the library and use
`scrollToElement` function.

```js
import scrollToElement from '@yishiashia/scroll-to-element'

function App () {
  scrollToElement(
    document.getElementById("scroll-target"),
    {
      duration: 300,
      easeFunc: "linear"
    }
  );
}
```

### Options

- [`duration`](#duration-optional)
- [`easeFunc`](#easeFunc-optional)

#### duration (optional)

The scroll animation transition duration in milliseconds. Default: `600`.

#### easeFunc (optional)

Easing function of animation, can be `linear`, `easeOutCubic` or `easeOutQuint`. Defaults to `linear`.


[npm-version-img]: https://img.shields.io/npm/v/@yishiashia/scroll-to-element.svg?style=flat-square
[npm-download-img]: https://img.shields.io/npm/dm/@yishiashia/scroll-to-element.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@yishiashia/scroll-to-element

[github-issue-img]: https://img.shields.io/github/issues/yishiashia/scroll-to-element.svg?style=flat-square
[github-issue-url]: https://github.com/yishiashia/scroll-to-element/issues

[license-img]: https://img.shields.io/npm/l/@yishiashia/scroll-to-element.svg?style=flat-square
