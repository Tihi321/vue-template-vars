import { ComputedGetter } from '@vue/reactivity';
import  { ref, reactive, computed, Ref, ComputedRef } from 'vue';

type TemplateRefValue = string | number;
type TemplateKey = string | number;
type TemplateVar = Ref | ComputedRef | object;

interface TemplateVars {
  [index: string]: TemplateVar
}

export function useTemplateVars() {
  const templateVars: TemplateVars = {};

  function templateRef(value: TemplateRefValue, templateKey: TemplateKey): TemplateVar {
    templateVars[templateKey] = ref(value);
    return templateVars[templateKey];
  }

  function templateReactive(value: object, templateKey: TemplateKey): TemplateVar {
    templateVars[templateKey] = reactive(value);
    return templateVars[templateKey];
  }

  function templateComputed(value: ComputedGetter<any>, templateKey: TemplateKey): TemplateVar {
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
