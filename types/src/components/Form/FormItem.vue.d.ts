import { FormItemProps, ValidateStatus } from './types';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_TypePropsToRuntimeProps<FormItemProps>, {
    validate: (trigger?: string | undefined) => Promise<any>;
    clearValidate: () => void;
    resetField: () => void;
    validateStatus: ValidateStatus;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<FormItemProps>>>, {}, {}>, {
    label?(_: {
        label: string | undefined;
    }): any;
    default?(_: {
        validate: (trigger?: string | undefined) => Promise<boolean | void>;
    }): any;
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
