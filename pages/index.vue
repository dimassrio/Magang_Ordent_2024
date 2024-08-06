<template>
  <div class="font-sans bg-white overflow-x-hidden">
    <header class="flex flex-col md:flex-row justify-between items-center p-4 bg-white shadow-md relative">
      <div class="logo mb-4 md:mb-0">
        <nuxt-link to="/">
          <img src="/img/logoG.png" alt="GOERS" class="h-8" />
        </nuxt-link>
      </div>

      <div class="search-container relative w-full md:w-1/2 mb-4 md:mb-0">
        <div class="search-bar items-center bg-gray-200 rounded-full">
          <input class="bg-transparent w-full p-2 rounded-full" type="text" placeholder="Cari acara, taman rekreasi, dll..." v-model="searchQuery" @input="performSearch"/>
          <i class="fas fa-search mr-2"></i>
        </div>

        <div v-if="searchResults.length > 0" class="search-results absolute bg-white shadow-md rounded mt-2 w-full z-10">
          <div v-for="result in searchResults" :key="result.id" class="p-2 hover:bg-gray-100 cursor-pointer" @click="goToEvent(result)">{{ result.name }}</div>
        </div>
      </div>

      <div class="header-right flex items-center">
        <button class="btn-pengalaman bg-white font-bold py-1 px-4 rounded-md mr-2 hover:bg-teal-200 transition-colors duration-400 text-green-700">Buat Pengalaman</button>
        <nuxt-link to="/login">
          <button class="btn-masuk bg-green-500 text-white font-bold py-1 px-3 rounded">Masuk</button>
        </nuxt-link>
      </div>
    </header>

    <nav class="flex flex-col md:flex-row justify-between p-4 bg-white shadow mt-2 border-gray-200">
      <div class="flex flex-row justify-between w-full">
        <div class="nav-left flex flex-col md:flex-row">
          <div class="dropdown relative mb-4 md:mb-0">
            <button @click="toggleCity" class="dropbtn bg-white hover:bg-gray-100 transition-colors duration-400 text-gray-800 py-2 px-4 rounded-md w-full md:w-auto">Pilih Kota</button> 
            <div v-if="showCity" class="dropdown-content absolute bg-white shadow-md rounded mt-2 w-full md:w-auto"> 
              <input type="text" placeholder="Cari nama kota" class="w-full p-2 border-b"/>
              <a href="#" v-for="city in cities" :key="city" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">{{ city }}</a>
            </div>
          </div>
          <div class="dropdown relative mb-4 md:mb-0 ml-3">
            <button @click="toggleCategory" class="dropbtn bg-white hover:bg-gray-100 transition-colors duration-400 text-gray-800 py-2 px-4 rounded-md">Kategori</button> 
            <div v-if="showCategory" class="dropdown-content absolute bg-white shadow-xl rounded-md mt-2 w-full">
              <a href="#" v-for="category in categories" :key="category" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">{{ category }}</a>
            </div>
          </div>
        </div>

        <div class="nav-right flex flex-col md:flex-row items-end">
          <a href="#" class="bg-white hover:bg-gray-100 transition-colors duration-400 rounded-md text-gray-800 ml-0 md:ml-4 mb-4 md:mb-3 py-2 px-4">Blog</a>
          <a href="#" class="bg-white hover:bg-gray-100 transition-colors duration-400 rounded-md text-gray-800 ml-0 md:ml-4 mb-4 md:mb-3 py-2 px-4">Tentang Kami</a>
          <a href="#" class="bg-white hover:bg-gray-100 transition-colors duration-400 rounded-md text-gray-800 ml-0 md:ml-4 md:mb-3 py-2 px-4">Kerjasama Dengan Kami</a>
        </div>
      </div>
    </nav>

    <main>
      <section class="banner">
        <img src="/img/f1.jpg" alt="Destinasi liburan" class="w-full h-auto object-cover rounded-lg" />
        <div class="banner-nav bottom-4 left-1/2 transform -translate-x-1/2 flex"></div>
      </section>

      <section class="events p-4 bg-white mt-4">
    <div class="section-header flex justify-between items-center mb-4">
      <h2 class="text-xl font-bold">Best Offer</h2>
      <nuxt-link to="/event" class="view-all bg-teal-100 text-green-700 py-2 px-4 rounded-full hover:bg-teal-200 transition-colors duration-400 font-bold">Lihat Semua</nuxt-link>
    </div>
    
    <div v-if="loading" class="loading-spinner">Loading...</div>
    
    <div v-else class="event-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-center">
      <nuxt-link v-for="event in events" :key="event.id" :to="getEventUrl(event)" class="event-card flex-none w-60">
        <img :src="getFirstImage(event.images)" :alt="event.name" class="rounded-lg" />
        <h3 class="text-lg mt-2 px-2">{{ event.name }}</h3>
        <p class="text-sm text-gray-600 px-2">{{ event.location }}</p>
        <p class="text-sm px-2">{{ formatDate(event.start_at) }} - {{ formatDate(event.end_at) }}</p>
      </nuxt-link>
    </div>
  </section>
    </main>

    <footer class="bg-gray-100 p-8 border-t border-gray-200">
      <div class="footer-container flex flex-col md:flex-row justify-around"> 
        <div class="footer-column mb-4 md:mb-0">
          <h3 class="text-lg font-bold mb-2">MENGGUNAKAN GOERS</h3>
          <ul>
            <li v-for="item in footerLinks.menggunakanGoers" :key="item" class="mb-1 hover:underline hover:text-green-500 transition-colors duration-400">
              <a href="#">{{ item }}</a>
            </li>
          </ul>
        </div>
        <div class="footer-column mb-4 md:mb-0">
          <h3 class="text-lg font-bold mb-2">INFORMASI</h3>
          <ul>
            <li v-for="item in footerLinks.informasi" :key="item" class="mb-1 hover:underline hover:text-green-500 transition-colors duration-400">
              <a href="#">{{ item }}</a>
            </li>
          </ul>
        </div>
        <div class="footer-column mb-4 md:mb-0">
          <h3 class="text-lg font-bold mb-2">BISNIS</h3>
          <ul>
            <li v-for="item in footerLinks.bisnis" :key="item" class="mb-1 hover:underline hover:text-green-500 transition-colors duration-400">
              <a href="#">{{ item }}</a>
            </li>
          </ul>
        </div>
        <div class="footer-column mb-4 md:mb-0">
          <h3 class="text-lg font-bold mb-2">BERTEMU GOERS</h3>
          <ul>
            <li v-for="item in footerLinks.bertemuGoers" :key="item" class="mb-1 hover:underline hover:text-green-500 transition-colors duration-400">
              <a href="#">{{ item }}</a>
            </li>
          </ul>
        </div>
        <div class="footer-column">
          <h3 class="text-lg font-bold mb-2">KONTAK KAMI</h3>
          <h3 class="mb-1 font-bold">Kantor GOERS:</h3>
          <p class="mb-1">Graha Krama Yudha Lt. 4 Unit B</p>
          <p class="mb-1">Jalan Haji Tutty Alawiyah No. 43</p>
          <p class="mb-1">Jakarta Selatan 12760</p>
          <h3 class="mb-1 font-bold">Layanan Pelanggan (WA):</h3>
          <p class="mb-1">+6281110588333</p>
          <h3 class="mb-1 font-bold">Jam Kerja:</h3>
          <p class="mb-1">Hari Kerja @ 09.00 - 20.00</p>
        </div>
      </div>
      <div class="footer-bottom flex flex-col md:flex-row justify-center items-center py-4"> 
        <div class="social-media flex mb-4 md:mb-0"> 
          <a href="#" v-for="(icon, index) in socialIcons" :key="index" class="mr-4">
            <img :src="icon" :alt="['Instagram', 'Facebook', 'Twitter'][index]">
          </a>
        </div>
        <div class="newsletter flex flex-col md:flex-row items-center ml-0 md:ml-8"> 
          <p class="mr-2">Dapatkan kabar terakhir dari kami</p>
          <input type="email" placeholder="Alamat email" class="p-2 border rounded mr-2">
          <button class="p-2 border rounded bg-teal-200 hover:bg-green-500 transition-colors duration-400 text-white font-bold gap-4">Berlangganan</button>
        </div>
      </div>
      <div class="footer-credits text-center py-4 border-t border-gray-200 mt-4">
        <p>Goers © 2021. All Rights Reserved.</p>
        <p class="text-gray-600">Version 4.6.0</p>
      </div>
    </footer>
  </div>
</template>


<script>

export default {
  middleware: 'auth', // Menggunakan middleware untuk halaman ini
  name: 'IndexPage',
  data() {
    return {
      showCategory: false,
      showCity: false,
      searchQuery: '', 
      searchResults: [], 
      events: [], 
      loading: true, 
      cities: ['Ambon', 'Bali', 'Balikpapan', 'Bandung', 'Banjarbaru - Banjarmasin', 'Batam', 'Bekasi', 'Bima', 'Blitar', 'Cirebon', 'Depok', 'Flores'],
      categories: ['Edukasi & Karier', 'Hiburan & Pertunjukan', 'Travel & Outdoor', 'Amal', 'Olahraga', 'Tempat Wisata', 'Belanja', 'Seni & Belanja'],
      footerLinks: {
        menggunakanGoers: ['Penawaran Terbaik', 'Lokasi Terbaik', 'Promo', 'Pusat Bantuan', 'Kebijakan Privasi', 'Syarat dan Ketentuan'],
        informasi: ['Menayangkan Event di Goers', 'Solusi Pemilik Venue', 'Unduh Brosur', 'Goers Experience Manager', 'Point of Sales', 'Ticket Scanner', 'Harga'],
        bisnis: ['Solusi New Normal', 'Management Online Event', 'Venue & Event Olahraga', 'Taman Bertema', 'Tur & Wisata', 'Pameran', 'Konser & Musik', 'Seminar'],
        bertemuGoers: ['Tentang Kami', 'Blog', 'Karir', 'Press Kit']
      },
      socialIcons: ['/img/ig.svg', '/img/fb.svg', '/img/x.svg']
    };
  },
  computed: {
    filteredEvents() { 
      if (this.searchQuery.trim() === '') {
        return this.events; 
      }
      return this.events.filter(event =>
        event.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    toggleCategory() {
      this.showCategory = !this.showCategory;
    },
    toggleCity() {
      this.showCity = !this.showCity;
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.showCity = false;
        this.showCategory = false;
        this.searchResults = [];
      }
    },
    performSearch() {
      console.log('Searching for:', this.searchQuery);
      this.searchResults = this.events.filter(event =>
        event.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    goToEvent(result) {
     const url = `/event/${result.slug}`; // Hanya menggunakan slug
     console.log('Navigating to:', url); // Tambahkan log untuk memeriksa URL
     this.$router.push(url);
     this.searchQuery = '';
     this.searchResults = [];
},
async fetchEvents() {
  try {
    const response = await fetch('https://event-api.ordent-global.workers.dev/api/event');
    const data = await response.json();
    console.log(data); // Menambahkan log untuk memeriksa data yang diterima dari API
    this.events = Array.isArray(data.result) ? data.result : []; // Memastikan data di-bind dengan benar
    this.loading = false; // Mengatur loading menjadi false setelah data diambil
  } catch (error) {
    console.error('Error fetching events:', error);
    this.loading = false; // Mengatur loading menjadi false jika terjadi error
  }
},
    getFirstImage(images) {
      return images ? images.split(',')[0] : '/img/default-event.jpg';
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
    getEventUrl(event) {
      return `/event/${event.slug}-${event.id}`;
    }
  },
  watch: {
    searchQuery() {
      this.performSearch();
    }
  },
  async mounted() {
    document.addEventListener('click', this.handleClickOutside);
    await this.fetchEvents(); 
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside);
  }
}
  
  
</script>

<style scoped>
.dropbtn {
  width: 100px; 
}

.dropdown-content {
  width: 200px; 
  max-height: 400px; 
  overflow-y: auto; 
}

.dropdown-content input {
  width: calc(100% - 16px); 
  margin: 8px; 
}

.dropdown-content a {
  display: flex;
  align-items: center;
  padding: 8px 16px; 
}

.dropdown-content a:hover {
  background-color: #f1f1f1; 
}

.search-container {
  position: relative;
  margin: 0 auto;
}

.search-results {
  left: 0;
  right: 0;
  max-height: 300px;
  overflow-y: auto;
}

.search-results::-webkit-scrollbar {
  width: 8px;
}

.search-results::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.search-results::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.search-results::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>