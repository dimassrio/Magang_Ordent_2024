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
    async fetch() {
      try {
        const { id } = this.$route.params; 
        const response = await axios.get(`https://event-api.ordent-global.workers.dev/api/event/${id}`);
        this.event = response.data.result; 
      } catch (error) {
        console.error('Error fetching event details:', error);
        this.event = null; 
      }
    },
    methods: {
      getFirstImage(images) {
        const parsedImages = JSON.parse(images); 
        return parsedImages.length > 0 ? parsedImages[0] : '/img/default-event.jpg'; 
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