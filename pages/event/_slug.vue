<template>
  <div v-if="event">
    <h1 class="text-2xl font-bold">{{ event.name }}</h1>
    <img :src="getFirstImage(event.images)" :alt="event.name" class="rounded-lg mt-4" />
    <p class="mt-2">{{ event.description }}</p>
    <p class="mt-2">Location: {{ event.location }}</p>
    <p class="mt-2">Available At: {{ formatDate(event.available_at) }}</p>
    <p class="mt-2">Start At: {{ formatDate(event.start_at) }}</p>
    <p class="mt-2">End At: {{ formatDate(event.end_at) }}</p>
  </div>
  <div v-else>
    <p>Event not found.</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      event: null
    };
  },
  async asyncData({ params }) {
    try {
      const response = await axios.get(`https://event-api.ordent-global.workers.dev/api/event/${params.slug}`);
      console.log(response.data); // Tambahkan ini untuk memeriksa data
      return { event: response.data.result };
    } catch (error) {
      console.error('Error fetching event details:', error);
      return { event: null };
    }
  },
  methods: {
    getFirstImage(images) {
  try {
    const parsedImages = JSON.parse(images); // Uraikan string JSON
    return parsedImages.length > 0 ? parsedImages[0] : '/img/default-event.jpg';
  } catch (error) {
    console.error('Error parsing images:', error);
    return '/img/default-event.jpg'; // Kembali ke gambar default jika terjadi kesalahan
  }
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