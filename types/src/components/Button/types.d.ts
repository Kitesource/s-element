import { PropType } from 'vue';

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type ButtonSize = 'large' | 'small';
export type NativeType = 'button' | 'submit' | 'reset';
export interface ButtonProps {
    type?: ButtonType;
    size?: ButtonSize;
    plain?: boolean;
    round?: boolean;
    circle?: boolean;
    disabled?: boolean;
    nativeType?: NativeType;
    autofocus?: boolean;
    icon?: string;
    loading?: boolean;
}
export interface ButtonInstance {
    ref: HTMLButtonElement;
}
export declare const buttonProps: {
    type: {
        type: PropType<ButtonType>;
    };
    size: {
        type: PropType<ButtonSize>;
    };
    plain: {
        type: BooleanConstructor;
    };
    round: {
        type: BooleanConstructor;
    };
    circle: {
        type: BooleanConstructor;
    };
    disabled: {
        type: BooleanConstructor;
    };
};
