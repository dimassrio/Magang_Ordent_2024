<template>
  <div class="font-sans bg-white overflow-x-hidden">
    <header class="flex flex-col md:flex-row justify-between items-center p-4 bg-white relative">
      <div class="logo mb-4 md:mb-0">
        <nuxt-link to="/">
          <img src="/img/logoG.png" alt="GOERS" class="h-8" />
        </nuxt-link>
      </div>

      <div class="search-container relative w-full md:w-1/2 mb-4 md:mb-0">
        <div class="search-bar items-center bg-gray-200 rounded-lg">
          <input class="bg-transparent w-full p-2 rounded-lg" type="text" placeholder="Cari acara, taman rekreasi, dll..." v-model="searchQuery" @input="performSearch"/>
          <i class="fas fa-search mr-2"></i>
        </div>
      </div> 

      <div class="header-right flex items-center">
        <button class="btn-pengalaman bg-white font-bold py-2 px-4 rounded-md mr-2 hover:bg-teal-200 transition-colors duration-400 text-green-700">Buat Pengalaman</button>
        <nuxt-link to="/login">
          <button class="btn-masuk  bg-teal-600 text-white hover:bg-teal-400 transition-colors duration-400 font-bold py-2 px-3 rounded">Masuk</button>
        </nuxt-link>
      </div>
    </header>

    <nav class="flex flex-col md:flex-row justify-between p-4 bg-white shadow mt-2 border-gray-200">
      <div class="flex flex-row justify-between w-full">
        <div class="nav-left flex flex-col md:flex-row">
          <div class="dropdown relative mb-4 md:mb-0">
            <button @click="toggleCity" class="dropbtn bg-white hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 duration-400 text-black py-2 px-4 rounded-md w-full md:w-auto font-semibold">Pilih Kota</button> 
            <div v-if="showCity" class="dropdown-content absolute bg-white shadow-2xl rounded mt-2 w-full md:w-auto border-gray-100"> 
              <input type="text" placeholder="Cari nama kota" class="w-full p-2 border-b"/>
              <a href="#" v-for="city in cities" :key="city" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">{{ city }}</a>
            </div>
          </div>
          
          <div class="dropdown relative mb-4 md:mb-0 ml-3">
            <button @click="toggleCategory" class="dropbtn bg-white hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 duration-400 text-black py-2 px-4 rounded-md font-semibold">Kategori</button> 
            <div v-if="showCategory" class="dropdown-content absolute bg-white shadow-2xl rounded-md mt-2 w-full border-gray-100">
              <a href="#" v-for="category in categories" :key="category" class="block px-4 py-2 text-black hover:bg-gray-200">{{ category }}</a>
            </div>
          </div>
        </div>

        <div class="nav-right flex flex-col md:flex-row items-end">
          <a href="#" class="bg-white hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 duration-400 rounded-md text-gray-600 ml-0 md:ml-4 mb-4 md:mb-3 py-2 px-4 font-semibold">Blog</a>
          <a href="/about-us" class="bg-white hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 duration-400 rounded-md text-gray-600 ml-0 md:ml-4 mb-4 md:mb-3 py-2 px-4 font-semibold">Tentang Kami</a>
          <a href="#" class="bg-white hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 duration-400 rounded-md text-gray-600 ml-0 md:ml-4 md:mb-3 py-2 px-4 font-semibold">Kerjasama Dengan Kami</a>
        </div>
      </div>
    </nav>

    <div class="container mx-auto p-4" v-if="event">
        <header class="flex justify-between items-center mb-4">
          <h1 class="text-3xl font-bold">{{ event.name }}</h1>
          <button class="bg-teal-600 text-white hover:bg-teal-400 py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 duration-400">Beli Tiket</button>
        </header>

      <div class="flex flex-col md:flex-row justify-center">
          <div class="md:w-2/3 pr-4">
            <img :src="getFirstImage(event.images)" alt="Event Image" class="rounded-lg w-full h-48 object-cover mb-4" />
            <div class="text-gray-700">
              <h2 class="text-xl font-semibold">Tentang experience ini</h2>
              <p class="mt-2">{{ event.description }}</p>
            </div>
          </div>
          <div class="md:w-1/3">
            <div class="bg-white p-4 rounded-lg shadow-md">
              <h2 class="text-xl font-bold text-center">Detail Acara</h2>
              <p class="my-1 font-bold">Lokasi: <span class=" font-medium">{{ event.location }}</span></p>
              <p class="my-1 font-bold">Waktu: <span class=" font-medium">{{ formatDate(event.start_at) }} - {{ formatDate(event.end_at) }}</span></p>
              <p class="my-1 font-bold">Harga: <span class=" font-medium">Rp. {{ event.price }}</span></p>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="text-center p-4">Loading event details...</div>

      <footer class="p-8">
      <div class="footer-container flex flex-col md:flex-row justify-around"> 
        <div class="footer-column mb-4 md:mb-0">
          <h3 class="text-lg font-bold mb-2 text-blue-900">MENGGUNAKAN GOERS</h3>
          <ul>
            <li v-for="item in footerLinks.menggunakanGoers" :key="item" class="mb-1 hover:underline hover:text-green-500 transition duration-300 ease-in-out transform hover:scale-105 duration-400 text-gray-600">
              <a href="#">{{ item }}</a>
            </li>
          </ul>
        </div>
        <div class="footer-column mb-4 md:mb-0">
          <h3 class="text-lg font-bold mb-2 text-blue-900">INFORMASI</h3>
          <ul>
            <li v-for="item in footerLinks.informasi" :key="item" class="mb-1 hover:underline hover:text-green-500 transition duration-300 ease-in-out transform hover:scale-105 duration-400 text-gray-600">
              <a href="#">{{ item }}</a>
            </li>
          </ul>
        </div>
        <div class="footer-column mb-4 md:mb-0">
          <h3 class="text-lg font-bold mb-2 text-blue-900">BISNIS</h3>
          <ul>
            <li v-for="item in footerLinks.bisnis" :key="item" class="mb-1 hover:underline hover:text-green-500 transition duration-300 ease-in-out transform hover:scale-105 duration-400 text-gray-600">
              <a href="#">{{ item }}</a>
            </li>
          </ul>
        </div>
        <div class="footer-column mb-4 md:mb-0">
          <h3 class="text-lg font-bold mb-2 text-blue-900">BERTEMU GOERS</h3>
          <ul>
            <li v-for="item in footerLinks.bertemuGoers" :key="item" class="mb-1 hover:underline hover:text-green-500 transition duration-300 ease-in-out transform hover:scale-105 duration-400 text-gray-600">
              <a href="#">{{ item }}</a>
            </li>
          </ul>
        </div>
        <div class="footer-column">
          <h3 class="text-lg font-bold mb-2 text-blue-900">KONTAK KAMI</h3>
          <h3 class="mb-1 font-bold text-blue-900">Kantor GOERS:</h3>
          <p class="mb-1 text-gray-600">Graha Krama Yudha Lt. 4 Unit B</p>
          <p class="mb-1 text-gray-600">Jalan Haji Tutty Alawiyah No. 43</p>
          <p class="mb-1 text-gray-600">Jakarta Selatan 12760</p>
          <h3 class="mb-1 font-bold text-blue-900">Layanan Pelanggan (WA):</h3>
          <p class="mb-1 text-gray-600">+6281110588333</p>
          <h3 class="mb-1 font-bold text-blue-900">Jam Kerja:</h3>
          <p class="mb-1 text-gray-600">Hari Kerja @ 09.00 - 20.00</p>
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
          <input type="email" placeholder="Alamat email" class="p-2 border rounded mr-2 bg-gray-100">
          <button class="p-2 border rounded bg-teal-400 hover:bg-green-500 transition-colors duration-400 text-white font-bold gap-4">Berlangganan</button>
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
      event: null,
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
    await this.fetchEventDetails();
  },

  methods: {
    async fetchEventDetails() {
      try {
        const response = await axios.get(`https://event-api.ordent-global.workers.dev/api/event/${this.$route.params.slug}`);
        this.event = {
            ...response.data.result,
            images: JSON.parse(response.data.result.images) 
          }; 
      } catch (error) {
        console.error('Error fetching event details:', error);
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

    getFirstImage(images) {
        return Array.isArray(images) && images.length > 0 ? images[0] : '/img/default-event.jpg'; 
      },
  
      toggleCategory() {
        this.showCategory = !this.showCategory;
      },
  
      toggleCity() {
        this.showCity = !this.showCity;
      },

      formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
      },
  },

  watch: {
    searchQuery() {
      if (!this.searchConfirmed) {
        this.performSearch(); 
      }
    }
  }
  
};
</script>

<style scoped>
.dropbtn {
  width: 150px;
  align-items: center; 
  justify-content: space-between; 
}

.nav-right {
  justify-content: space-between; 
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
  
  .container {
    max-width: 1200px;
  }

  .fixed {
    z-index: 1000; 
  }
  </style>
