<template>
  <div>
    <div class="container mx-auto">
      <h1>Home</h1>
      <p class="text-sm">This is a home page</p>
      <p class="text-sm">Counter: {{ counter.count }}</p>
      <button
        class="bg-blue-500 text-white px-4 py-2 rounded-md ml-2 cursor-pointer"
        @click="counter.increment"
      >
        Increment Counter
      </button>

      <p class="text-sm">Your view count: {{ view.view }}</p>
      <button
        class="bg-blue-500 text-white px-4 py-2 rounded-md ml-2 cursor-pointer"
        @click="view.incrementView"
      >
        Increment View
      </button>
      <div class="flex pt-10 justify-center">
        <div class="flex space-x-5">
          <img src="/images/appstore.png" alt="" class="w-auto h-20" />
          <img src="/images/googleplay.png" alt="" class="w-auto h-20" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "~/stores/count";
import { useViewStore } from "~/stores/view";

useHead({
  title: "Home",
  meta: [
    {
      name: "description",
      content: "Home description",
    },
  ],
});

const counter = useCounterStore();
const view = useViewStore();
</script>

<style lang="scss" scoped></style>
