<template>
  <div class="container mx-auto">
    <h1>Product detail : {{ id }}</h1>

    <!-- Server-side rendering (SSR) data fetching with useAsyncData -->
    <div v-if="todo">
      <div
        class="rounded-md shadow-md p-5 cursor-pointer hover:bg-gray-100 h-full w-52"
      >
        <p class="text-sm font-semibold">
          {{ todo.id }}. {{ todo.name }} : {{ todo.status }}
        </p>
      </div>
    </div>
    <div v-else>Loading...</div>

    <!-- Client-side data fetching with useFetch -->
    <div v-if="todo2">
      <div
        class="rounded-md shadow-md p-5 cursor-pointer hover:bg-gray-100 h-full w-52"
      >
        <p class="text-sm font-semibold">
          {{ todo2.id }}. {{ todo2.name }} : {{ todo2.status }}
        </p>
      </div>
    </div>
    <div v-else>Loading...</div>
    <MyCard v-model:message="message" :onClick="handleClick" />
  </div>
</template>

<script setup lang="ts">
import type { ITodos } from "~/types/todo";

const id = useRoute().params.id;
useHead({ title: `Product detail of ${id}` });

const todo2 = ref();
const message = ref(`This is a card ${id}`);
const BASE_URL = "https://684fa4a6e7c42cfd17955654.mockapi.io";

const getTodoById = async () => {
  const { data } = await useFetch(`${BASE_URL}/todos/${id}`, {});
  todo2.value = data.value;
};

const { data: todo } = await useAsyncData<ITodos>(
  "todo",
  () => $fetch(`${BASE_URL}/todos/${id}`, { method: "GET" }),
  { server: true }
);

getTodoById();

const handleClick = () => {
  console.log("Card clicked");
};
</script>

<style lang="scss" scoped></style>
