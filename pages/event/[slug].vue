<template>
  <div v-if="event" class="flex flex-col md:flex-row p-5 bg-white rounded-lg shadow-md">
    <div class="md:w-2/3">
      <h1 class="text-3xl font-bold mb-2">{{ event.name }}</h1>
      <p class="text-gray-700 my-2">{{ event.description }}</p>
      <div class="text-gray-600">
        <p class="my-1">Location: <span class="font-semibold">{{ event.location }}</span></p>
        <p class="my-1">Available At: <span class="font-semibold">{{ formatDate(event.available_at) }}</span></p>
        <p class="my-1">Start At: <span class="font-semibold">{{ formatDate(event.start_at) }}</span></p>
        <p class="my-1">End At: <span class="font-semibold">{{ formatDate(event.end_at) }}</span></p>
        <p class="my-1">Dari: <span class="font-semibold">IDR {{ event.price }}</span></p>
      </div>
      <button class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mt-4">Beli Tiket</button>
    </div>
    <div class="md:w-1/3 md:ml-4">
      <img :src="getFirstImage(event.images)" :alt="event.name" class="w-full h-64 object-cover rounded-lg" />
    </div>
  </div>
  <div v-else>
    <p>Loading...</p> 
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      event: null, 
    };
  },
  async mounted() {
    await this.fetch(); 
  },
  methods: {
    async fetch() {
      try {
        const response = await axios.get(`https://event-api.ordent-global.workers.dev/api/event/${this.$route.params.slug}`);
        this.event = response.data.result;

        if (this.event.images) {
          this.event.images = JSON.parse(this.event.images);
        }
      } catch (error) {
        console.error('Error fetching event:', error);
        this.event = null; 
      }
    },
    getFirstImage(images) {
      return images ? images[0] : '/img/default-event.jpg'; 
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    }
  }
}
</script>

<style scoped>
</style>