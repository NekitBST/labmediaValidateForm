<script setup lang="ts">
import { ref } from 'vue'
import TestForm from './components/TestForm.vue'
import HttpTestForm from './components/HttpTestForm.vue'

type Page = 'home' | 'validation' | 'http'
const currentPage = ref<Page>('home')
</script>

<template>
    <div v-if="currentPage === 'home'" class="home-page">
      <h1>Тестовые задания</h1>
      <button @click="currentPage = 'validation'">Задание 1: Валидация формы</button>
      <button @click="currentPage = 'http'">Задание 2: HTTP</button>
    </div>

    <div v-if="currentPage === 'validation'">
      <button @click="currentPage = 'home'" class="back-button">Назад</button>
      <TestForm />
    </div>

    <div v-if="currentPage === 'http'">
      <button @click="currentPage = 'home'" class="back-button">Назад</button>
      <HttpTestForm />
    </div>
</template>

<style>
body {
  font-family: 'Comic Sans MS';
  padding: 20px;
}

.home-page {
  max-width: 500px;
  margin: auto;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
}

button {
  display: block;
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  color: white;
  background-color: #808080; 
  font-size: 16px;
  font-family: 'Comic Sans MS';
  cursor: pointer;
  border: none;
  border-radius: 4px;
}

button:hover {
  background-color: #666666;
}

.back-button {
  width: auto;
  padding: 10px 20px;
}
</style>