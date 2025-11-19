<template>
  <div class="form-container">
    <h2>HTTP Запросы</h2>

    <div class="buttons-section">
      <button
        type="button"
        @click="executeGet"
        :disabled="currentHttp.isLoading"
        class="get-button"
      >
        GET Запрос
      </button>

      <button
        type="button"
        @click="executePost"
        :disabled="currentHttp.isLoading"
        class="post-button"
      >
        POST Запрос
      </button>
    </div>

    <div class="response-section">
      <h3>Состояние запроса:</h3>

      <div class="state-info">
        <div class="state-item">
          <strong>isLoading:</strong>
          <span :class="{ active: currentHttp.isLoading }">
            {{ currentHttp.isLoading }}
          </span>
        </div>
        <div class="state-item">
          <strong>isSuccess:</strong>
          <span :class="{ active: currentHttp.isSuccess }">
            {{ currentHttp.isSuccess }}
          </span>
        </div>
        <div class="state-item">
          <strong>isError:</strong>
          <span :class="{ active: currentHttp.isError }">
            {{ currentHttp.isError }}
          </span>
        </div>
        <div class="state-item">
          <strong>status:</strong> {{ currentHttp.status || "null" }}
        </div>
      </div>

<h4>Данные (JSON):</h4>
<pre class="json-response">{{ currentHttp.data ? JSON.stringify(currentHttp.data, null, 2) : 'null' }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useHTTP } from "@/composables/useHTTP";

const getHttp = useHTTP("https://jsonplaceholder.typicode.com/posts/3", {
  method: "GET",
});

const postHttp = useHTTP("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: {
    title: "Test title",
    body: "Test body",
    userId: 15,
  },
});

const currentHttp = ref(getHttp);
const activeRequest = ref<"GET" | "POST">("GET");

const executeGet = () => {
  currentHttp.value = getHttp;
  activeRequest.value = "GET";
  getHttp.execute();
};

const executePost = () => {
  currentHttp.value = postHttp;
  activeRequest.value = "POST";
  postHttp.execute();
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
  margin-bottom: 20px;
}

h3 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 18px;
}

h4 {
  margin-top: 15px;
  margin-bottom: 8px;
  font-size: 14px;
}

.buttons-section {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

button {
  flex: 1;
  padding: 12px;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
  font-family: "Comic Sans MS";
}

.get-button {
  background-color: #4caf50;
}

.get-button:hover:not(:disabled) {
  background-color: #45a049;
}

.post-button {
  background-color: #595dd9;
}

.post-button:hover:not(:disabled) {
  background-color: #3a3fcd;
}

.response-section {
  padding: 15px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.state-info {
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 15px;
}

.state-item {
  padding: 5px 0;
  font-size: 14px;
}

.state-item strong {
  color: #e97f06;
  margin-right: 5px;
}

.json-response {
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 4px;
  overflow-x: auto;
  font-size: 13px;
}
</style>
