import { ComputedGetter } from '@vue/reactivity';
import { Ref, ComputedRef } from 'vue';
declare type TemplateRefValue = string | number;
declare type TemplateKey = string | number;
declare type TemplateVar = Ref | ComputedRef | object;
interface TemplateVars {
    [index: string]: TemplateVar;
}
export declare function useTemplateVars(): {
    templateVars: TemplateVars;
    templateRef: (value: TemplateRefValue, templateKey: TemplateKey) => TemplateVar;
    templateReactive: (value: object, templateKey: TemplateKey) => TemplateVar;
    templateComputed: (value: ComputedGetter<any>, templateKey: TemplateKey) => TemplateVar;
};
export {};
//# sourceMappingURL=index.d.ts.map