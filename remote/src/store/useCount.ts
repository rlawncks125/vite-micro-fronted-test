import { defineStore } from "pinia";
import { ref } from "vue";

export const useCount = defineStore("count-state", () => {
  const count = ref(0);

  const incre = () => {
    console.log("remote");
    // count.value++;
  };
  const dcre = () => {
    // count.value--;
  };

  return {
    count,
    incre,
    dcre,
  };
});
