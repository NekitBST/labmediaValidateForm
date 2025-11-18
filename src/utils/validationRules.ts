import type { ValidationRule } from "@/types/validation";

export const required: ValidationRule = (value) => {
  return value.trim().length > 0 || "Обязательное поле";
};

export const email: ValidationRule = (value) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(value) || "Неправильный формат email";
};

export const minLength = (min: number): ValidationRule => {
  return (value) => {
    return value.length >= min || `Минимальная длина ${min} символов`;
  };
};

export const numeric: ValidationRule = (value) => {
    const isNumber = !isNaN(Number(value));
    return isNumber || "Только цифры";
}

export const ageRange: ValidationRule = (value) => {
  const age = Number(value);

  if (age < 12) {
    return "Возраст должен быть не меньше 12 лет";
  }

  if (age > 100) {
    return "Возраст должен быть не больше 100 лет";
  }

  return true;
};

export const name: ValidationRule = (value) => {
  return value.length >= 2 || 'Минимум 2 символа'
}
