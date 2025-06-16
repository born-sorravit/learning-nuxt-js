<template>
  <div class="container mx-auto">
    <h1>Product detail : {{ id }}</h1>

    <div v-if="todo">
      <div
        class="rounded-md shadow-md p-5 cursor-pointer hover:bg-gray-100 h-full w-52"
      >
        <p class="text-sm font-semibold">
          {{ todo.name }}
        </p>
      </div>
    </div>
    <div v-else>Loading...</div>
    <MyCard v-model:message="message" :onClick="handleClick" />
  </div>
</template>

<script setup lang="ts">
const id = useRoute().params.id;
useHead({ title: `Product detail of ${id}` });

const todo = ref();
const message = ref(`This is a card ${id}`);
const BASE_URL = "https://684fa4a6e7c42cfd17955654.mockapi.io";

const getTodoById = async () => {
  const { data } = await useFetch(`${BASE_URL}/todos/${id}`, {});
  todo.value = data.value;
};

getTodoById();

const handleClick = () => {
  console.log("Card clicked");
};
</script>

<style lang="scss" scoped></style>
