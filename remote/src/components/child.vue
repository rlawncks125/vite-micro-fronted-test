<script setup lang="ts">
import { inject } from "vue";
import { key as aswAlert } from "../plugins/alert";

const swAlert = inject(aswAlert)!;
const onAlert = () => {
  swAlert("자식 컴포넌트 에요");
};
</script>

<template>
  <div>
    <span> 응애 컴포넌트에요 </span>
    <button @click="onAlert">자식 알람</button>
  </div>
</template>

<style lang="scss" scoped></style>
