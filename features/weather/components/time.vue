<script lang="ts" setup>
import { useWeatherStore } from "../store";
import { DateTime } from "luxon";
import { onMounted, ref, watch } from "vue";

const store = useWeatherStore();
const datetime = ref(DateTime.now().setZone(store.timezone));

const updateTime = () => {
  datetime.value = DateTime.now().setZone(store.timezone);
};

// const currentTime = computed(() => {
//   return datetime.value.setLocale(locale.value).toLocaleString({
//     weekday: "long",
//     month: "long",
//     day: "numeric",
//     hour: "numeric",
//     minute: "numeric",
//     hour12: false,
//   });
// });

// const selectedTime = computed(() => {
//   return DateTime.fromISO(store.getWeatherForHour().time)
//     .setLocale(locale.value)
//     .toLocaleString({
//       weekday: "long",
//       month: "long",
//       day: "numeric",
//       hour: "numeric",
//       minute: "numeric",
//       hour12: false,
//     });
// });

onMounted(() => {
  updateTime();
  // Optionally update every minute
  setInterval(updateTime, 60000);
});

watch(
  () => store.timezone,
  () => {
    updateTime();
  }
);
</script>
