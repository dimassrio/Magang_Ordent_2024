<template>
    <div class="ticket-page">
      <h1>Tiket untuk Acara {{ slug }} pada {{ formattedDate }}</h1>
      <div v-for="ticket in tickets" :key="ticket.id" class="ticket-item">
        <h3>{{ ticket.name }}</h3>
        <p>IDR {{ ticket.price }}</p>
        <button @click="addToCart(ticket)">Tambah</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    async asyncData({ params }) {
      try {
        // Perbaiki URL API
        const response = await axios.get(`https://event-api.ordent-global.workers.dev/api/tickets/${params.slug}/${params.date}`);
        return {
          slug: params.slug,
          date: params.date,
          tickets: response.data.tickets || [], // Pastikan untuk menghindari error jika tidak ada tiket
        };
      } catch (error) {
        console.error('Error fetching tickets:', error.response ? error.response.data : error.message);
        return {
          slug: params.slug,
          date: params.date,
          tickets: [], 
        };
      }
    },
    computed: {
      formattedDate() {
        return new Date(this.date).toLocaleDateString();
      },
    },
    methods: {
      addToCart(ticket) {
        // Logika untuk menambahkan tiket ke keranjang
        console.log('Tiket ditambahkan ke keranjang:', ticket);
      },
    },
  };
  </script>
  
  <style scoped>
  .ticket-page {
    padding: 20px;
  }
  .ticket-item {
    margin-bottom: 20px;
  }
  </style>