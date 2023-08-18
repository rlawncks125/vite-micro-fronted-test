<script setup lang="ts">
import { useCount } from "../store/useCount.ts";
import { storeToRefs } from "pinia";

const { count } = storeToRefs(useCount());
const { incre, dcre } = useCount();
</script>

<template>
  <div>
    <div class="btn-color text-[1.2rem]">Remote Buuton 입니다. {{ count }}</div>
    <button class="p-4 bg-amber-200 border-2" @click="incre">+</button>
    <button class="p-4 bg-amber-200 border-2" @click="dcre">-</button>
  </div>
</template>

<style lang="scss">
button {
  border: 1px solid black;
  padding: 2rem;
  background-color: aquamarine;
  color: gray;
}
</style>
