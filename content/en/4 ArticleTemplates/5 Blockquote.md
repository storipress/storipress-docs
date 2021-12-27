---
title: Blockquotes [WIP]
description: ''
position: 35
category: Article Templates
---

An element used only in articles templates to apply fancier styles to article body text! **Style with <u>pure css</u>**

When running `yarn bootstrap`, choose `Article Blockquote`

![](/Blocks/Blockquote_1.png)

You'll see only two files under `src/block`:

#### 1. `index.js`: file to define name and style of your blockquote

```js
export const name = 'regular'

export const style = {
  italic: true,
}
```

- `name`: define your blockquote name. It should be a valid css class name as it used in css too
- `style`: define your style in js to tell our builder what this blockquote looks like

#### 2. `style.scss`: file to define the actual style in scss format

```js
@use "@storipress/article/mixins";

// make sure the name at here is same in `index.js`
@include mixins.blockquote($name: 'regular') {
  // Your styles here!
  @apply py-2;
  @apply px-4;
  @apply italic;
}
```

You can write any style within the `mixins.blockquote` mixin.

<alert Type="warning"> Remember to make your style sync with the `style` in `index.js` </alert>

## `Style` in Javascript

Its properties are same as the styleable elements' prop

<alert Type="warning">
Currently, this does not support breakpoints. Please shoot us a feature request so that we can prioritise this feature.
</alert>

### Props

<table>
  <tr>
    <td>Prop</td>
    <td>Type</td>
    <td>Default</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>fontSize</td>
    <td>number</td>
    <td>16px</td>
    <td>font size (valid range: 8 ~ 280)</td>
  </tr>
  <tr>
    <td>fontFamily</td>
    <td>string</td>
    <td>Roboto</td>
    <td>font family</td>
  </tr>
  <tr>
    <td>bold</td>
    <td>boolean</td>
    <td>false</td>
    <td>is bold (font-width: 700)</td>
  </tr>
  <tr>
    <td>italic</td>
    <td>boolean</td>
    <td>false</td>
    <td>is italic (font-style: italic)</td>
  </tr>
  <tr>
    <td>underline</td>
    <td>boolean</td>
    <td>false</td>
    <td>is underline (text-decoration: underline)</td>
  </tr>
  <tr>
    <td>uppercase</td>
    <td>boolean</td>
    <td>false</td>
    <td>is uppercase (text-transform: uppercase)</td>
  </tr>
  <tr>
    <td>lowercase</td>
    <td>boolean</td>
    <td>false</td>
    <td>is lowercase (text-transform: lowercase)</td>
  </tr>
  <tr>
    <td>align</td>
    <td>string</td>
    <td>left</td>
    <td>text align (valid value are: left, center, right)</td>
  </tr>
  <tr>
    <td>color</td>
    <td>string</td>
    <td>000000</td>
    <td>text color, should be hex string like ff0000</td>
  </tr>
  <tr>
    <td>lineHeight</td>
    <td>number</td>
    <td>1.5</td>
    <td>line height (valid range: 1.0 ~ 2.0 step 0.1)</td>
  </tr>
  <tr>
    <td>hoverColor</td>
    <td>string</td>
    <td>N/A</td>
    <td>text color in hover state</td>
  </tr>
</table>

#### Examples:

```scss
@use '@storipress/article/mixins';

@include mixins.blockquote('slim') {
  @apply py-4;
  @apply px-12;
  @apply italic;
}
```

```js
export const name = 'slim'

export const style = {
  italic: true,
}
```

<br>

```scss
@use '@storipress/article/mixins';

@include mixins.blockquote('bold') {
  @apply font-bold;
  @apply italic;
  @apply text-lg;
  @apply pl-4;
  @apply border-l-4;
  @apply border-black;
  @apply my-2;
}
```

```js
export const name = 'bold'

export const style = {
  fontSize: 18,
  bold: true,
  italic: true,
}
```
