import { PropType } from 'vue';
import { Placement, Options } from '@popperjs/core';
import { MenuOption } from './types';

declare const _default: import('vue').DefineComponent<{
    placement: {
        type: PropType<Placement>;
        default: string;
    };
    trigger: {
        type: PropType<"click" | "hover">;
        default: string;
    };
    effect: {
        type: PropType<"dark" | "light">;
        default: string;
    };
    transition: {
        type: StringConstructor;
        default: string;
    };
    openDelay: {
        type: NumberConstructor;
        default: number;
    };
    closeDelay: {
        type: NumberConstructor;
        default: number;
    };
    popperOptions: {
        type: PropType<Options>;
    };
    menuOptions: {
        type: PropType<MenuOption[]>;
        required: true;
    };
    hideAfterClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    manual: {
        type: BooleanConstructor;
    };
}, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, ("select" | "visible-change")[], "select" | "visible-change", import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    placement: {
        type: PropType<Placement>;
        default: string;
    };
    trigger: {
        type: PropType<"click" | "hover">;
        default: string;
    };
    effect: {
        type: PropType<"dark" | "light">;
        default: string;
    };
    transition: {
        type: StringConstructor;
        default: string;
    };
    openDelay: {
        type: NumberConstructor;
        default: number;
    };
    closeDelay: {
        type: NumberConstructor;
        default: number;
    };
    popperOptions: {
        type: PropType<Options>;
    };
    menuOptions: {
        type: PropType<MenuOption[]>;
        required: true;
    };
    hideAfterClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    manual: {
        type: BooleanConstructor;
    };
}>> & {
    onSelect?: ((...args: any[]) => any) | undefined;
    "onVisible-change"?: ((...args: any[]) => any) | undefined;
}, {
    transition: string;
    hideAfterClick: boolean;
    trigger: "click" | "hover";
    effect: "dark" | "light";
    placement: Placement;
    manual: boolean;
    openDelay: number;
    closeDelay: number;
}, {}>;
export default _default;
