export type ValidationRule = (value : string) => boolean | string;

export interface FieldState {
    value: string;
    errors: string[];
    isValid: boolean;
    touched: boolean;
}

export interface FormConfig {
    [key: string]: ValidationRule[];
}

export interface FormFields {
    [key: string]: FieldState;
}