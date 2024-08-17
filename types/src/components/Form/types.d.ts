import { InjectionKey } from 'vue';
import { RuleItem, ValidateError, ValidateFieldsError } from 'async-validator';

export interface FormItemProps {
    label?: string;
    prop?: string;
}
export interface FormItemRule extends RuleItem {
    trigger?: string | string[];
}
export type FormRules = Record<string, FormItemRule[]>;
export interface FormProps {
    model: Record<string, string>;
    rules: FormRules;
}
export interface FormValidateFailure {
    errors: ValidateError[] | null;
    fields: ValidateFieldsError;
}
export interface FormContext extends FormProps {
    addField: (field: FormItemContext) => void;
    removeField: (field: FormItemContext) => void;
}
export interface FormItemContext {
    prop?: string;
    validate: (trigger?: string) => Promise<any>;
    clearValidate: () => void;
    resetField: () => void;
}
export interface FormInstance {
    validate: () => Promise<any>;
    clearValidate: (fields?: string[]) => void;
    resetFields: (fields?: string[]) => void;
}
export interface ValidateStatus {
    state: 'init' | 'success' | 'error';
    errorMsg: string;
    loading: boolean;
}
export interface FormItemInstance {
    validate: (trigger?: string) => Promise<any>;
    clearValidate: () => void;
    resetField: () => void;
    validateStatus: ValidateStatus;
}
export declare const formContextKey: InjectionKey<FormContext>;
export declare const formItemContextKey: InjectionKey<FormItemContext>;
