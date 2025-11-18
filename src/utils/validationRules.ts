import type { ValidationRule } from "@/types/validation";

export const required: ValidationRule = (value) => {
    return value.trim() .length > 0 || "Обязательное поле";
}

export const email: ValidationRule = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value) || "Неправильный формат email";
}

export const minLength = (min: number): ValidationRule => {
    return (value) => {
        return value.length >= min || `Минимальная длина ${min} символов`;
    };
}