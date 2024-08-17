import { Ref } from 'vue';
import { InputProps } from './types';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<InputProps>, {
    type: string;
    autocomplete: string;
}>, {
    ref: Ref<HTMLInputElement>;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string) => void;
    input: (value: string) => void;
    change: (value: string) => void;
    focus: (value: FocusEvent) => void;
    blur: (value: FocusEvent) => void;
    clear: () => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<InputProps>, {
    type: string;
    autocomplete: string;
}>>> & {
    onFocus?: ((value: FocusEvent) => any) | undefined;
    onBlur?: ((value: FocusEvent) => any) | undefined;
    onChange?: ((value: string) => any) | undefined;
    onInput?: ((value: string) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onClear?: (() => any) | undefined;
}, {
    type: string;
    autocomplete: string;
}, {}>, {
    prepend?(_: {}): any;
    prefix?(_: {}): any;
    suffix?(_: {}): any;
    append?(_: {}): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
