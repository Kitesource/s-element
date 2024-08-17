import { Placement, Options } from '@popperjs/core';

export interface TooltipProps {
    content?: string;
    trigger?: 'hover' | 'click';
    effect?: 'dark' | 'light';
    placement?: Placement;
    manual?: boolean;
    popperOptions?: Partial<Options>;
    transition?: string;
    openDelay?: number;
    closeDelay?: number;
}
export interface TooltipEmits {
    (e: 'visible-change', value: boolean): void;
    (e: 'click-outside', value: boolean): void;
}
export interface TooltipInstance {
    show: () => void;
    hide: () => void;
}
