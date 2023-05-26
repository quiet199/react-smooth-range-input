# 🎚 React Smooth Range Input

[![Coverage Status](https://coveralls.io/repos/github/bluebill1049/react-smooth-range-input/badge.svg?branch=master)](https://coveralls.io/github/bluebill1049/react-smooth-range-input?branch=master) [![npm downloads](https://img.shields.io/npm/dm/react-smooth-range-input.svg?style=flat-square)](https://www.npmjs.com/package/react-smooth-range-input) [![npm](https://img.shields.io/npm/dt/react-smooth-range-input.svg?style=flat-square)](https://www.npmjs.com/package/react-smooth-range-input) [![npm](https://badgen.net/bundlephobia/minzip/react-smooth-range-input)](https://badgen.net/bundlephobia/minzip/react-smooth-range-input)

- Smooth input range
- Beautiful animation interaction
- Tiny size

## Install

    $ npm install react-smooth-range-input

## Example

<p>
    <a href="https://react-smooth-range-input.now.sh" target="_blank">
        <img height="500" src="https://raw.githubusercontent.com/bluebill1049/react-smooth-range-input/master/example/example.gif" alt="https://react-smooth-range-input.now.sh" />
    </a>
</p>

## Quickstart

```jsx
import react from 'react';
import Slider from 'react-smooth-range-input';

export default () => <Slider value={1} min={1} max={30} />;
```

## Props

| Prop               | Type                                             | Required | Description                                  |
| :----------------- | :----------------------------------------------- | :------: | :------------------------------------------- |
| `value`            | number                                           |    ✓     | current value                                |
| `min`              | number                                           |    ✓     | min number range                             |
| `max`              | number                                           |    ✓     | max number range                             |
| `onChange`         | Function                                         |          | on value change callback                     |
| `disabled`         | boolean                                          |          | disable the component                        |
| `hasTickMarks`     | boolean = true                                   |          | show tick marks only apply to thick type     |
| `customController` | ({ ref: any, value: number }) => React.ReactNode |          | custom controller: make sure to pass the ref |


## By the makers of BEEKAI

We also make [BEEKAI](https://www.beekai.com/). Build the next-generation forms with modern technology and best in class user experience and accessibility.
