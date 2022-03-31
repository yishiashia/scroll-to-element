# scroll-to-element

An alternative scroll library to scrollIntoView.

[![NPM](https://nodei.co/npm/@yishiashia/scroll-to-element.png?mini=true)](https://www.npmjs.com/package/@yishiashia/scroll-to-element)

## Install

    $ npm install @yishiashia/scroll-to-element

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

## Usage

Here's a example that directly include the library into html page. For further customization details, see [options](#options).

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>scroll-to-element demo</title>

  <style>
    body {
      min-height: 200vh;
      background-color: green;
    }
    div.content-block {
      height: 100px;
      width: 90%;
      margin: 20px auto;
      padding: 20px;
      background-color: yellow;
      border: solid 1px black;
    }
    button {
      margin: 0 auto;
      display: block;
    }
  </style>

  <script src='scrollToElement.js'></script>
  <script>
    function doScroll() {
      scrollToElement(document.getElementById('scroll-target'), { });
    }
  </script>
</head>
<body>
  <div class="content-block"></div>
  <div class="content-block"></div>
  <div id="scroll-target" class="content-block">
    <strong>I am scroll target.</strong>
  </div>
  <br />
  <br />
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

