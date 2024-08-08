import type { InjectionKey } from 'vue'
import type { RuleItem, ValidateError, ValidateFieldsError } from 'async-validator'

export interface FormItemProps {
  label?: string
  prop?: string
}

export interface FormItemRule extends RuleItem {
  trigger?: string | string[]
}
export type FormRules = Record<string, FormItemRule[]>

export interface FormProps {
  model: Record<string, string>
  rules: FormRules
}

export interface FormValidateFailure {
  errors: ValidateError[] | null
  fields: ValidateFieldsError
}

export interface FormContext extends FormProps {
  addField: (field: FormItemContext) => void
  removeField: (field: FormItemContext) => void
}
export interface FormItemContext {
  prop?: string
  validate: (trigger?: string) => any
}
export interface FormInstance {
  validate: () => Promise<any>
}
export const formContextKey: InjectionKey<FormContext> = Symbol('FormContextKey')
export const formItemContextKey: InjectionKey<FormItemContext> = Symbol('FormItemContextKey')

