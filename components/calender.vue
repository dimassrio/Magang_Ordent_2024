<template>
  <div class="calendar bg-white p-4 rounded-lg shadow-lg">
    <header class="flex justify-between items-center mb-4">
      <h2 class="text-lg font-semibold">{{ currentMonthName }} {{ currentYear }}</h2>
      <div class="flex items-center">
        <button @click="prevMonth" class="bg-gray-200 p-2 rounded hover:bg-gray-300">Prev</button>
        <button @click="nextMonth" class="bg-gray-200 p-2 rounded hover:bg-gray-300 ml-2">Next</button>
      </div>
    </header>
    <div class="instructions mb-2 text-sm text-gray-600">
      <p>Pilih salah satu tanggal di bawah untuk melihat tiket yang tersedia</p>
    </div>
    <div class="days grid grid-cols-7 gap-2 text-center font-bold">
      <div v-for="day in days" :key="day" class="day text-gray-600">{{ day }}</div>
    </div>
    <div class="dates grid grid-cols-7 gap-2 mt-2">
      <div
        v-for="(date, index) in dates"
        :key="index"
        class="date p-3 cursor-pointer rounded-full hover:bg-blue-200"
        @click="selectDate(date)"
        :class="{
          'bg-blue-500 text-white': isSelected(date.day) && date.isCurrentMonth,
          'text-gray-400 bg-blue-100': !date.isCurrentMonth
        }"
      >
        {{ date.day }}
      </div>
    </div>
    <div class="footer mt-4 text-right">
      <button @click="$emit('close')" class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Tutup</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const now = new Date();
    return {
      currentYear: now.getFullYear(),
      currentMonth: now.getMonth(),
      selectedDate: null,
      today: now.getDate(),
    };
  },
  computed: {
    currentMonthName() {
      return new Date(this.currentYear, this.currentMonth).toLocaleString('default', { month: 'long' });
    },
    days() {
      return ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    },
    dates() {
      const start = new Date(this.currentYear, this.currentMonth, 1);
      const end = new Date(this.currentYear, this.currentMonth + 1, 0);
      const dates = [];

      const prevMonthEnd = new Date(this.currentYear, this.currentMonth, 0);
      for (let i = start.getDay() - 1; i >= 0; i--) {
        dates.push({
          day: prevMonthEnd.getDate() - i,
          isPrevMonth: true,
          isCurrentMonth: false
        });
      }

      for (let i = 1; i <= end.getDate(); i++) {
        dates.push({
          day: i,
          isCurrentMonth: true
        });
      }

      let nextMonthDay = 1;
      while (dates.length < 42) { 
        dates.push({
          day: nextMonthDay++,
          isNextMonth: true,
          isCurrentMonth: false
        });
      }

      return dates;
    },
  },
  methods: {
    selectDate(date) {
      if (date) {
        this.selectedDate = date;
        const selectedDate = new Date(this.currentYear, this.currentMonth, date.day);
        this.$emit('dateSelected', selectedDate);
      }
    },
    prevMonth() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
    nextMonth() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    isSelected(day) {
      return this.selectedDate && this.selectedDate.getDate() === day;
    },
  },
};
</script>

<style scoped>
.calendar {
  max-width: 400px;
}
.day, .date {
  padding: 10px;
  text-align: center;
  cursor: pointer;
}
.date {
  transition: background-color 0.3s;
}
.date.selected {
  background: #4caf50;
  color: white;
}
.date.text-gray-400 {
  opacity: 0.5;
}
</style>