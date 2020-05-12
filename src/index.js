const { ref, reactive, computed } = require("vue");

function useTemplateVars() {
  const templateVars = {};

  function templateRef(value, templateKey) {
    templateVars[templateKey] = ref(value);
    return templateVars[templateKey];
  }

  function templateReactive(value, templateKey) {
    templateVars[templateKey] = reactive(value);
    return templateVars[templateKey];
  }

  function templateComputed(value, templateKey) {
    templateVars[templateKey] = computed(value);
    return templateVars[templateKey];
  }

  return {
    templateVars,
    templateRef,
    templateReactive,
    templateComputed
  };
}


module.exports = {
  useTemplateVars
};