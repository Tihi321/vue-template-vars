# Vue template vars

### Introduction

Vue template vars is hook package for [Vue.js](http://vuejs.org/) version 3 and [Composition Api](https://composition-api.vuejs.org). Helps to avoid long return from setup function. It references all reactive state object in templateVars object, that is spread in the return at the end of setup function.

## Usage

Import useTemplateVars hook from package.

``` javascript
import { useTemplateVars } from "vue-template-vars";
```

Then inside setup function, destructure functions that you need.

``` javascript
const { templateVars, templateRef, templateReactive, templateComputed } = useTemplateVars();
```

Most important thing for variables to be available inisde a template, you need to destructure templateVars, as they contain all references to data.

``` javascript
return { ...templateVars }
```

All the hooks behave the same as VUE native hooks, what is different is second argument. Second argument is the name of the variable referenced inside the template.

## Example

```javascript
templateRef(0, "templateCount");
```

then inside a template we reference the variable with name

``` javascript
{{ templateCount }}
```

To be able to manipulate reactive object inside setup function, just assign it to a variable, as hook returns reactive object.

```javascript
const count = templateRef(0, "templateCount");
```

## License

[MIT](http://opensource.org/licenses/MIT)


### Keywords

[vue](https://www.npmjs.com/search?q=keywords:vue)