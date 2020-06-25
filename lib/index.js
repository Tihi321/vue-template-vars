"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTemplateVars = void 0;
var vue_1 = require("vue");
function useTemplateVars() {
    var templateVars = {};
    function templateRef(value, templateKey) {
        templateVars[templateKey] = vue_1.ref(value);
        return templateVars[templateKey];
    }
    function templateReactive(value, templateKey) {
        templateVars[templateKey] = vue_1.reactive(value);
        return templateVars[templateKey];
    }
    function templateComputed(value, templateKey) {
        templateVars[templateKey] = vue_1.computed(value);
        return templateVars[templateKey];
    }
    return {
        templateVars: templateVars,
        templateRef: templateRef,
        templateReactive: templateReactive,
        templateComputed: templateComputed
    };
}
exports.useTemplateVars = useTemplateVars;
//# sourceMappingURL=index.js.map