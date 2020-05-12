# Vue template vars

### Introduction

Vue template vars is hook package for [Vue 3](http://vuejs.org/) and [Composition Api](https://composition-api.vuejs.org). Which is at the moment in beta and is not recommended to use in production. Vue template vars help with long return statement from setup function. It references all reactive state in templateVars object. Under the hood it uses standard vue hooks for reactive state.

## Install

#### npm
``` bash
npm i vue-template-vars
```
#### Yarn
``` bash
yarn add vue-template-vars
```

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

All the hooks behave the same as vue native hooks, what is different is the second argument. Second argument is the name of the variable referenced inside the template.

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
