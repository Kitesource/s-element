import { SwtichProps } from './types';

declare const _default: import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<SwtichProps>, {
    activeValue: boolean;
    inactiveValue: boolean;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: import('./types').SwitchValueType) => void;
    change: (value: import('./types').SwitchValueType) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<SwtichProps>, {
    activeValue: boolean;
    inactiveValue: boolean;
}>>> & {
    onChange?: ((value: import('./types').SwitchValueType) => any) | undefined;
    "onUpdate:modelValue"?: ((value: import('./types').SwitchValueType) => any) | undefined;
}, {
    activeValue: import('./types').SwitchValueType;
    inactiveValue: import('./types').SwitchValueType;
}, {}>;
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
