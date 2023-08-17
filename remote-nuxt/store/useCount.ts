import { defineStore } from "pinia";

export const useCount = defineStore("count-state", () => {
  const count = ref(0);

  const incre = () => {
    console.log("nuxt");
    count.value++;
  };
  const dcre = () => {
    count.value--;
  };

  return {
    count,
    incre,
    dcre,
  };
});
