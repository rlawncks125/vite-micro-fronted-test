<script setup lang="ts">
import { useCount } from "../store/useCount.ts";
import { storeToRefs } from "pinia";

const { count } = storeToRefs(useCount());
const { incre, dcre } = useCount();
</script>

<template>
  <div>
    <div class="btn-color">Remote Buuton 입니다. {{ count }}</div>
    <button @click="incre">+</button>
    <button @click="dcre">-</button>
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
