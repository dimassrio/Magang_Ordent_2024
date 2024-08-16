<template>
  <div class="font-sans bg-white">
    <header class="flex justify-between items-center p-4 bg-white shadow-md">
      <div class="logo">
        <nuxt-link to="/">
          <img src="/img/logoG.png" alt="GOERS" class="h-8" />
        </nuxt-link>
      </div>
    </header>

    <div class="container mx-auto p-4 max-w-screen-md" v-if="event">
      <header class="flex justify-center items-center mb-4">
        <h1 class="text-xl font-bold">{{ event.name }}</h1>
      </header>

      <div class="flex flex-col lg:flex-row items-start space-y-4 lg:space-y-0 lg:space-x-4">
        <div class="lg:w-2/3">
          <img :src="getFirstImage(event.images)" alt="Event Image" class="w-full h-auto object-cover rounded-lg"/>
        </div>

        <div class="lg:w-1/3 flex flex-col space-y-4">
          <div class="bg-white p-4 rounded-lg shadow-md">
            <h3 class="text-lg font-semibold mb-2">Detail Acara</h3>
            <p class="mb-1">Lokasi: <span class="font-semibold">{{ event.location }}</span></p>
            <p class="mb-1">Waktu: <span class="font-semibold">{{ formatDate(event.start_at) }} - {{ formatDate(event.end_at) }}</span></p>
            <p class="mb-1">Harga: <span class="font-semibold">IDR {{ event.price }}</span></p>
            <button class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300" @click="navigateToIndex">Pilih Tanggal</button>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-center p-4">Loading event details...</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      event: null,
    };
  },
  mounted() {
    this.fetchEventDetails();
  },
  methods: {
    async fetchEventDetails() {
      try {
        const response = await fetch(`https://event-api.ordent-global.workers.dev/api/event/${this.$route.params.slug}`);
        this.event = await response.json();
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    },
    getFirstImage(images) {
      return images && images.length > 0 ? images[0].url : '/img/default-event.png';
    },
    formatDate(dateStr) {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateStr).toLocaleDateString('id-ID', options);
    },
    navigateToIndex() {
      this.$router.push(`/event/${this.$route.params.slug}/tiket`);
    },
  },
};
</script>

<style scoped>
/* You can add custom styles here */
</style>
