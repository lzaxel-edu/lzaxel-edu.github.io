<script setup lang="ts">
import schedule from "./data/schedule.json";
import time from "./data/time.json";
import dayjs from "dayjs";
import {computed, onMounted} from "vue";
import PairItem from "./components/PairItem.vue";
import ChangeThemeButton from "./components/ChangeThemeButton.vue";

const isFirstWeekTop = true;
const firstDate = "09-03";
const firstWeekNumber = dayjs(firstDate).week()

type Weekday = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";

const isCurrentWeekTop = computed(() => {
  return ((dayjs().week() - firstWeekNumber) % 2 === 0) === isFirstWeekTop
})


function getLocalizedWeekdayName(weekday: string) {
  switch (weekday) {
    case "monday":
      return "Понедельник";
    case "tuesday":
      return "Вторник";
    case "wednesday":
      return "Среда";
    case "thursday":
      return "Четверг";
    case "friday":
      return "Пятница";
    case "saturday":
      return "Суббота";
    case "sunday":
      return "Воскресенье";
    default:
      return "Неизвестно";
  }
}


function getTime(number: number) {
  const numberStr = number.toString() as keyof typeof time;
  return time[numberStr].start + " - " + time[numberStr].end
}

onMounted(() => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  localStorage.theme = 'light'

  localStorage.theme = 'dark'

  localStorage.removeItem('theme')
})
</script>

<template>
  <div class="min-h-screen relative h-full w-full bg-white background transition-colors duration-300">
    <div class="absolute right-2 top-2">
      <ChangeThemeButton/>
    </div>
    <div class="h-full p-2">
      <div class="text-center mt-10">
        <p class="text-3xl text-primary-950 dark:text-neutral-200">Расписание уника</p>
        <p class="text text-primary-700 dark:text-neutral-300 font-light">Вот бы отменили пары...</p>
        <p class="text text-primary-700 dark:text-neutral-300 font-light mt-3">Кста текущая неделя:
          <span v-if="isCurrentWeekTop" class="text-[#384bca] dark:text-[#39ace7]">Числитель</span>
          <span v-else class="text-[#b61f26] dark:text-[#E73939]">Знаменатель</span>
        </p>
      </div>
      <div class="grid grid-container--fit gap-5">
        <div v-for="weekday in Object.keys(schedule) as Weekday[]" class="mt-10">
          <p class="text-xl text-primary-950 dark:text-neutral-200 ml-2 mb-2">{{ getLocalizedWeekdayName(weekday) }}</p>
          <div class="flex flex-col gap-2">
            <div v-for="pair in schedule[weekday]"
                 class="rounded-2xl glass relative overflow-hidden w-full flex flex-row p-1 gap-2 pl-9">
              <div
                  class="bg-white dark:bg-neutral-900 bg-opacity-30 absolute top-0 left-0 bottom-0 h-full w-8 min-w-8 text-primary-800 dark:text-neutral-200 flex justify-center items-center text-xl">
                {{ pair.number }}
              </div>
              <div class="flex flex-col gap-1">
                <p class="leading-[5px] mt-2 ml-2 text-xs text-primary-900 dark:text-neutral-200">
                  {{ getTime(pair.number) }}</p>
                <PairItem v-if="pair.pairs.top" :is-current-week-top="isCurrentWeekTop" :pair="pair.pairs.top"
                          :is-alternative="pair.isAlternative" :is-top="true"/>
                <PairItem v-if="pair.pairs.bottom" :is-current-week-top="isCurrentWeekTop" :pair="pair.pairs.bottom"
                          :is-alternative="pair.isAlternative" :is-top="false"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  background: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
}

.glass {
  background: rgba(255, 255, 255, 0.20);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.glass:where([color-scheme="dark"], [color-scheme="dark"] *) {
  background: rgba(38, 38, 38, 0.20);
  border-radius: 16px;
  border: 1px solid rgb(23, 23, 23, 100%);
}
.background:where([color-scheme="dark"], [color-scheme="dark"] *) {
  background: #29323c;
}

.grid-container--fit {
  grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
}
</style>
