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
  
          <!-- Rekomendasi pencarian dinonaktifkan
          <div v-if="searchQuery && !searchConfirmed && searchResults.length > 0" class="search-results">
            <div v-for="result in searchResults" :key="result.id" class="p-2 hover:bg-gray-100 cursor-pointer" @click="selectRecommendation(result)">{{ result.name }}</div>
          </div>
          -->
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
      <section class="about-us p-8 bg-white mt-4">
    <div class="flex flex-col md:flex-row items-center">
      <div class="text-section md:w-1/2">
        <h2 class="text-3xl font-bold mb-2">Pengalaman ekstra untuk tiap langkah Anda</h2>
        <p class="mb-4 text-2xl">Kami membantu para pemilik bisnis acara hiburan, area bisnis, dan korporasi hingga aktivitas dan destinasi wisata-rekreasi mewujudkan pengalaman digital tidak terlupakan.</p>
      </div>
      <div class="image-section md:w-1/2 flex justify-center">
        <img src="/img/goer-icon.png" alt="Experience Creator and Customer" class="max-w-xs" />
      </div>
    </div>
    </section>

    <section class="pb-8">
    <div class="flex flex-col md:flex-row items-center mt-6">
      <div class="image-section md:w-1/2 flex justify-center">
        <img src="/img/laptop.png" alt="Goers Icons" class="max-w-xs" />
      </div>
      <div class="text-section md:w-1/2">
        <h3 class="text-3xl font-bold mb-2 pb-3">Goers</h3>
        <p class="text-2xl">Solusi kami yang end-to-end mencakup marketplace tiket event, destinasi, dan aktivitas berbasis aplikasi dan website, sistem pemesanan dan reservasi secara online hingga manajemen kunjungan di lokasi. Fitur kami juga mendukung promosi bisnis Anda yang lebih luas dan membuat Anda tetap terhubung dengan pelanggan Anda.</p>
      </div>
    </div>
  </section>
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
                <a href="event.html" class="mr-4"><img src="/img/ig.png" alt="Instagram"></a>
                <a href="event.html" class="mr-4"><img src="/img/fb.png" alt="Facebook"></a>
                <a href="event.html" class="mr-4"><img src="/img/x.png" alt="Twitter"></a>
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
import axios from 'axios';

export default {
  data() {
    return {
      showCategory: false,
      showCity: false,
      searchQuery: '', 
      searchResults: [], 
      isSearching: false,
      searchConfirmed: false, 
      cities: ['Ambon', 'Bali', 'Balikpapan', 'Bandung', 'Banjarbaru - Banjarmasin', 'Batam', 'Bekasi', 'Bima', 'Blitar', 'Cirebon', 'Depok', 'Flores'],
      categories: ['Edukasi & Karier', 'Hiburan & Pertunjukan', 'Travel & Outdoor', 'Amal', 'Olahraga', 'Tempat Wisata', 'Belanja', 'Seni & Belanja'],
      footerLinks: {
      menggunakanGoers: ['Penawaran Terbaik', 'Lokasi Terbaik', 'Promo', 'Pusat Bantuan', 'Kebijakan Privasi', 'Syarat dan Ketentuan'],
      informasi: ['Menayangkan Event di Goers', 'Solusi Pemilik Venue', 'Unduh Brosur', 'Goers Experience Manager', 'Point of Sales', 'Ticket Scanner', 'Harga'],
      bisnis: ['Solusi New Normal', 'Management Online Event', 'Venue & Event Olahraga', 'Taman Bertema', 'Tur & Wisata', 'Pameran', 'Konser & Musik', 'Seminar'],
      bertemuGoers: ['Tentang Kami', 'Blog', 'Karir', 'Press Kit']
      },
    };
  },

  async mounted() {
    document.addEventListener('keydown', this.handleKeyPress); 
  },
  
  beforeDestroy() {
    document.removeEventListener('keydown', this.handleKeyPress); 
  },


  methods: {
  async searchEvents() {
      try {
        console.log('Searching for:', this.searchQuery);
        const response = await axios.get(`https://event-api.ordent-global.workers.dev/api/event?search=${this.searchQuery}`);
        this.isSearching = true; 
      } catch (error) {
        console.error('Error searching events:', error);
      }
    },

    performSearch() {
      if (this.searchQuery) {
        this.searchEvents();
        this.searchConfirmed = false; 
      } else {
        this.resetSearch();
      }
    },

    resetSearch() {
      this.searchResults = [];
      this.isSearching = false;
      this.searchConfirmed = false;
    },
    
    selectRecommendation(result) {
      this.searchQuery = result.name; 
      this.searchConfirmed = true; 
      this.searchResults = []; 
      this.isSearching = false; 
      this.searchEvents(); 
      this.searchQuery = ''; 
    },

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
        this.resetSearch(); 
      }
    }
  }
}
</script>

<style>
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

.about-us {
  background-color: #ffffff; /* Ganti dengan warna latar belakang yang diinginkan */
}

.about-us h2, .about-us h3 {
  color: #2c3e50; /* Ganti dengan warna teks yang diinginkan */
}

.about-us p {
  color: #34495e; /* Ganti dengan warna teks yang diinginkan */
}

.about-us img {
  max-width: 100%; /* Memastikan gambar responsif */
  height: auto; /* Memastikan gambar proporsional */
}
</style>