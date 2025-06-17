<template>
  <div>
    <div class="container mx-auto">
      <h1>All Todos</h1>
      <input
        v-model="todoText"
        type="text"
        placeholder="Add a new todo"
        class="border p-2 rounded-md"
      />
      <button
        class="bg-blue-500 text-white px-4 py-2 rounded-md ml-2 cursor-pointer"
        :disabled="isLoading"
        @click="createTodo"
      >
        <span v-if="isLoading">Adding...</span>
        <span v-else>Add Todo</span>
      </button>
      <div class="grid grid-cols-3 gap-5 pt-5">
        <div
          v-for="todo in todoLists"
          :key="todo.id"
          class="rounded-md shadow-md p-5 cursor-pointer hover:bg-gray-100 h-full"
        >
          <div class="flex justify-between">
            <NuxtLink :to="`/todos/${todo.id}`" class="text-sm font-semibold">
              {{ todo.id }}. {{ todo.name }}
            </NuxtLink>
            <div @click.stop>
              <select v-model="todo.status" class="text-sm">
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
                <option value="In Progress">In Progress</option>
              </select>
              <button
                class="text-sm bg-green-500 text-white px-2 py-1 rounded-md ml-2"
                @click.stop="updateTodo(todo.id, todo.status)"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ITodos } from "~/types/todo";

useHead({ title: "Todos" });

const todoText = ref("");
// const todoLists = ref<ITodos[]>([]);
const isLoading = ref(false);
const BASE_URL = "https://684fa4a6e7c42cfd17955654.mockapi.io";

// const getTodos = async () => {
//   const { data } = await useFetch<ITodos[]>(`${BASE_URL}/todos`);
//   todoLists.value = data.value ?? [];
// };
// ✅ SSR: useAsyncData จะดึงข้อมูลในฝั่ง server
const { data: todoLists, refresh } = await useAsyncData<ITodos[]>(
  "todos",
  () => $fetch(`${BASE_URL}/todos`, { method: "GET" }),
  { server: true }
);

const createTodo = async () => {
  try {
    isLoading.value = true;

    await useFetch(`${BASE_URL}/todos`, {
      method: "POST",
      body: {
        name: todoText.value,
        status: "Pending",
      },
    });

    await refresh();
  } catch (error) {
    console.error("Error creating todo:", error);
  } finally {
    todoText.value = "";
    isLoading.value = false;
  }
};

const updateTodo = async (id: number, status: string) => {
  try {
    await useFetch(`${BASE_URL}/todos/${id}`, {
      method: "PUT",
      body: { status },
    });
  } catch (error) {
    console.error("Error updating todo:", error);
  }
};

// getTodos();
</script>

<style lang="scss" scoped></style>
