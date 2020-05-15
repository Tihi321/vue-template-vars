# Vue template vars

### Introduction

Vue template vars is a hook package for [Vue 3](http://vuejs.org/) and [Composition Api](https://composition-api.vuejs.org). Which is at the moment in beta and should be used only in development. Vue template vars help with long return statement from setup function. It references all reactive state in templateVars object. Under the hood, it uses standard vue hooks for the reactive state.

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

Import useTemplateVars hook from a package.

``` javascript
import { useTemplateVars } from "vue-template-vars";
```

Then inside setup function, destructure functions that you need.

``` javascript
const { templateVars, templateRef, templateReactive, templateComputed } = useTemplateVars();
```

The most important thing for the variables to be available inside a template, you need to destructure templateVars in the return statement from setup function, as they contain all references to the data.

``` javascript
return { ...templateVars }
```

All the hooks behave the same as vue native hooks; what is different is the second argument. The second argument is the name of the variable referenced inside the template.

## Example

```javascript
templateRef(0, "templateCount");
```

Then inside a template, we reference the variable with a name given to the hook.

``` javascript
{{ templateCount }}
```

To be able to manipulate reactive object inside setup function, assign it to a variable, as hook returns a reactive object.

```javascript
const count = templateRef(0, "templateCount");
```
### Live example
You can view them in action on [Code sandbox](https://codesandbox.io/s/vue-template-vars-example-7m9xe?file=/src/App.vue).

## License

[MIT](http://opensource.org/licenses/MIT)
