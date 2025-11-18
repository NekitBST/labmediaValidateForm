<template>
  <div class="form-container">
    <h2>Форма валидации</h2>

    <form @submit.prevent="onSubmit">
      <div class="form-field">
        <label>Имя:</label>
        <input
          type="text"
          placeholder="Иван"
          v-model="fields.name.value"
          @blur="validateField('name')"
          @input="validateField('name')"
          :class="{
            error: fields.name.errors.length > 0 && fields.name.touched,
          }"
        />
        <span
          class="error-message"
          v-for="error in fields.name.errors"
          :key="error"
        >
          {{ error }}
        </span>
      </div>

      <div class="form-field">
        <label>Возраст:</label>
        <input
          type="text"
          placeholder="30"
          v-model="fields.age.value"
          @blur="validateField('age')"
          @input="validateField('age')"
          :class="{ error: fields.age.errors.length > 0 && fields.age.touched }"
        />
        <span
          class="error-message"
          v-for="error in fields.age.errors"
          :key="error"
        >
          {{ error }}
        </span>
      </div>

      <div class="form-field">
        <label>Email:</label>
        <input
          type="text"
          placeholder="example@mail.com"
          v-model="fields.email.value"
          @blur="validateField('email')"
          @input="validateField('email')"
          :class="{
            error: fields.email.errors.length > 0 && fields.email.touched,
          }"
        />
        <span
          class="error-message"
          v-for="error in fields.email.errors"
          :key="error"
        >
          {{ error }}
        </span>
      </div>

      <div class="form-field">
        <label>Пароль:</label>
        <input
          type="password"
          v-model="fields.password.value"
          @blur="validateField('password')"
          @input="validateField('password')"
          :class="{
            error: fields.password.errors.length > 0 && fields.password.touched,
          }"
        />
        <span
          class="error-message"
          v-for="error in fields.password.errors"
          :key="error"
        >
          {{ error }}
        </span>
      </div>

      <button type="submit" :disabled="!isFormValid">Отправить</button>

      <div class="form-status">
        <p>Статус формы: {{ isFormValid ? "Валидна 👍" : "Не валидна 👎" }}</p>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useFormValidation } from "@/composables/useFormValidation";
import {
  required,
  email,
  minLength,
  name,
  numeric,
  ageRange,
} from "@/utils/validationRules";

const { fields, isFormValid, validateField, validateForm } = useFormValidation({
  name: [required, name, minLength(2)],
  age: [required, numeric, ageRange],
  email: [required, email],
  password: [required, minLength(8)],
});

const onSubmit = () => {
  validateForm();

  if (isFormValid.value) {
    console.log("Форма валидна, данные:", {
      email: fields.email.value,
      password: fields.password.value,
      name: fields.name.value,
      age: fields.age.value,
    });
    alert("Отправлено");
  }
};
</script>

<style scoped>
.form-container {
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid black;
  border-radius: 8px;
  background-color: #f9f9f9;
  font-family: "Comic Sans MS";
}

h2 {
  text-align: center;
}

.form-field {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #bab8b8;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
}

input.error {
  border-color: #ff4444;
}

.error-message {
  display: block;
  color: #ff4444;
  font-size: 14px;
  margin-top: 5px;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #595dd9;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
  font-family: "Comic Sans MS";
}

button:disabled {
  background-color: #bababafb;
  cursor: not-allowed;
}

button:not(:disabled):hover {
  background-color: #3a3fcd;
}

.form-status {
  margin-top: 20px;
  padding: 10px;
  background-color: #daecdb;
  border-radius: 4px;
  text-align: center;
}

.form-status p {
  margin: 0;
  font-weight: bold;
}
</style>
