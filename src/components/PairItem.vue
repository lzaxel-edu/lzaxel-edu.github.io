<script setup lang="ts">
const props = defineProps({
  isAlternative: {
    type: Boolean,
    default: false
  },
  pair: {
    type: Object,
    required: true
  },
  isCurrentWeekTop: {
    type: Boolean,
    required: true
  },
  isTop: {
    type: Boolean,
    required: true
  }
})

function getLocalizedType(type: string) {
  switch (type) {
    case "lec":
      return "Лекция";
    case "lab":
      return "Лабораторная";
    case "prac":
      return "Практика";
    case "lec-prac":
      return "Лекция/Практика";
    case "lab-prac":
      return "Лабораторная/Практика";
    case "lec-lab":
      return "Лекция/Лабораторная";
  }
}


</script>

<template>
  <div class="flex flex-col gap-2 p-2">
    <p v-if="props.isAlternative && props.isTop" class="text-[#384bca] dark:text-[#39ace7] leading-[5px] text-xs underline-offset-2" :class="[props.isCurrentWeekTop && 'underline']">Числитель</p>
    <p v-else-if="props.isAlternative && !props.isTop" class="text-[#b61f26] dark:text-[#E73939] leading-[5px] text-xs underline-offset-2" :class="[!props.isCurrentWeekTop && 'underline']">Знаменатель</p>
    <p class="text-primary-950 dark:text-neutral-100 leading-tight text-sm">{{ props.pair.name }}</p>
    <div class="flex flex-row flex-wrap w-full justify-start gap-2 items-center text-xs">
      <div
          class="text-primary-800 dark:text-neutral-400 leading-[1rem] text-sm rounded-lg border border-solid border-primary-800 dark:border-neutral-400 py-0.5 px-1">
        {{ props.pair.place }}
      </div>
      <div
          class="text-primary-800 dark:text-neutral-400 leading-[1rem] text-sm rounded-lg border border-solid border-primary-800 dark:border-neutral-400 py-0.5 px-1">
        {{ props.pair.teacher }}
      </div>
      <div
          class="text-primary-800 dark:text-neutral-400 leading-[1rem] text-sm rounded-lg border border-solid border-primary-800 dark:border-neutral-400 py-0.5 px-1">
        {{ getLocalizedType(props.pair.type) || props.pair.type }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>