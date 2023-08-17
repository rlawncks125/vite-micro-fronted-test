<script setup lang="ts">
import { useCount } from "@/store/useCount";
import { storeToRefs } from "pinia";

// const { count } = storeToRefs(useCount());
// const { incre, dcre } = useCount();
</script>

<template>
  <div>
    <div class="btn-color">Nuxt Boutton 입니다. :</div>
    <!-- <button @click="incre">+</button>
    <button @click="dcre">-</button> -->
  </div>
</template>

<style lang="scss">
.btn-color {
  border: 1px solid black;
  color: yellowgreen;
}
</style>
