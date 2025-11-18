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
    return /^\d+$/.test(value) || 'Только цифры';
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
    const regex = /^[a-zA-Zа-яА-ЯёЁ\s-]+$/;
    return regex.test(value) || 'Только буквы, пробелы, дефисы';
}