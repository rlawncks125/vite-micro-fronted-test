<script setup lang="ts">
import { inject } from "vue";
import { useCount } from "../store/useCount";
import { storeToRefs } from "pinia";
import { key as aswAlert } from "../plugins/alert";
import ChildCompoent from "./child.vue";

const { count } = storeToRefs(useCount());
const { incre, dcre } = useCount();
const swAlert = inject(aswAlert)!;
const onAlert = () => {
  swAlert("hi");
};
</script>

<template>
  <div>
    <div class="btn-color text-[1.2rem]">Remote Buuton 입니다. {{ count }}</div>
    <button class="p-4 bg-amber-200 border-2" @click="incre">+</button>
    <button class="p-4 bg-amber-200 border-2" @click="dcre">-</button>
    <button @click="onAlert">나 알람</button>
    <ChildCompoent />
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
