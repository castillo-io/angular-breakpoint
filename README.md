# AngularBreakpoint

##### Add responsive design awareness to your angular templates

Angular Breakpoint listens for media query changes and updates the global scope of your app with the active breakpoint.

### Demo

[Angular Breakpoint Demo](http://alexandercastillo.github.io/angular-breakpoint)


### Quick Start

Install and manage with [jspm](http://jspm.io) or [Bower](http://bower.io). A [CDN](http://cdnjs.com/libraries/angular-breakpoint) is also provided by cdnjs.com

``` bash
$ jspm install angular-breakpoint
```

``` bash
$ bower install angular-breakpoint
```

1) Include the required JavaScript libraries in your `index.html` (ngRoute and UI Router are optional). 

``` html
<script src="/libs/angularjs/1.4.7/angular.min.js"></script>
<script src="/libs/angular-breakpoint/angular-breakpoint.min.js"></script>
```

2) Add `ngBreakpoint` as a dependency in your app.

``` js
var myApp = angular.module('myApp', ['ngBreakpoint']);
```

### Examples

This module can be used by adding the `breakpoint` directive to your main template. 

```html
<html ng-app="myApp" breakpoint>
```

Then, default or custom breakpoints will be accessible in your templates. The following example illustrates how a DOM element can only be visible on small screens.

```html
<nav ng-if="breakpoint.sm">
  ...
</nav>
```

In the same way, it can be used in other directives like `ng-class`.

```html
<body ng-class="{ 'mobile': breakpoint.sm, 'tablet': breakpoint.md, 'desktop': breakpoint.lg }">
  ...
</body>
```

See [demo](http://alexandercastillo.github.io/angular-breakpoint) for more information.


### Default Breakpoints

```js
{
  xs: '(max-width: 480px)', // extra small screens
  sm: '(min-width: 481px) and (max-width: 768px)', // small screens
  md: '(min-width: 769px) and (max-width: 991px)', // medium screens
  lg: '(min-width: 992px)' // large screens
}
```

### Configuring custom breakpoints

You can set custom breakpoints via `$breakpointProvider` during the `config` phase of your app.

``` js
myApp.config(function($breakpointProvider) {

  $breakpointProvider.set({
    appleWatch: '(max-device-width: 42mm) and (min-device-width: 38mm)',
    mobile: 'handheld and (max-width: 768px)',
    tablet: 'handheld and (min-width: 769px) and (max-width: 1190px)',
    desktop: '(min-width: 1191x) and (max-width: 1400px)',
    kiosk: '(min-width: 1401px) and (max-width: 1800px) and (min-aspect-ratio: 4/3)',
    tv: 'tv and (scan: progressive)'
  });

});
```

### Support

AngularBreakpoint is fully supported by AngularJS 1.3+


#### Browsers

Chrome, Firefox, Safari, iOS Safari, Android and IE10+

Unfortunately, IE9 Does not support the [matchMedia](http://caniuse.com/#feat=matchmedia) API. 


### Contributing

Please submit all pull requests the against master branch. If your pull request contains JavaScript patches or features, you should include relevant unit tests.

### Copyright and license

```
The MIT License

Copyright (c) 2015 Alex Castillo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
