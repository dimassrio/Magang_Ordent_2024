<template>
  <div class="font-sans bg-white overflow-x-hidden">
    <header class="flex flex-col md:flex-row justify-between items-center p-4 bg-white shadow-md relative">
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
        
        <div v-if="user">
        <button @click="toggleDropdown">{{ user.username }}</button>
        <div v-if="dropdownOpen" class="dropdown-user">
          <!-- Dropdown Content -->
          <a href="#">Profil</a>
          <a @click="logout">Logout</a>
        </div>
      </div>
      <div v-else>
        <NuxtLink to="/login" class="btn-masuk bg-green-500 text-white hover:bg-green-700 transition-colors duration-400 font-bold py-2 px-3 rounded">Masuk</NuxtLink>
      </div>
      </div>
    </header>


    <nav class="flex flex-col md:flex-row justify-between p-4 bg-white shadow mt-2 border-gray-200">
      <div class="flex flex-row justify-between w-full">
        <div class="nav-left flex flex-col md:flex-row">
          <div class="dropdown relative mb-4 md:mb-0">
            <button @click="toggleCity" class="dropbtn bg-white hover:bg-gray-100 transition-colors duration-400 text-black py-2 px-4 rounded-md w-full md:w-auto font-semibold">Pilih Kota</button> 
            <div v-if="showCity" class="dropdown-content absolute bg-white shadow-2xl rounded mt-2 w-full md:w-auto border-gray-100"> 
              <input type="text" placeholder="Cari nama kota" class="w-full p-2 border-b"/>
              <a href="#" v-for="city in cities" :key="city" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">{{ city }}</a>
            </div>
          </div>
          
          <div class="dropdown relative mb-4 md:mb-0 ml-3">
            <button @click="toggleCategory" class="dropbtn bg-white hover:bg-gray-100 transition-colors duration-400 text-black py-2 px-4 rounded-md font-semibold">Kategori</button> 
            <div v-if="showCategory" class="dropdown-content absolute bg-white shadow-2xl rounded-md mt-2 w-full border-gray-100">
              <a href="#" v-for="category in categories" :key="category" class="block px-4 py-2 text-black hover:bg-gray-200">{{ category }}</a>
            </div>
          </div>
        </div>

        <div class="nav-right flex flex-col md:flex-row items-end">
          <a href="#" class="bg-white hover:bg-gray-100 transition-colors duration-400 rounded-md text-black ml-0 md:ml-4 mb-4 md:mb-3 py-2 px-4 font-semibold">Blog</a>
          <a href="/about-us" class="bg-white hover:bg-gray-100 transition-colors duration-400 rounded-md text-black ml-0 md:ml-4 mb-4 md:mb-3 py-2 px-4 font-semibold">Tentang Kami</a>
          <a href="#" class="bg-white hover:bg-gray-100 transition-colors duration-400 rounded-md text-black ml-0 md:ml-4 md:mb-3 py-2 px-4 font-semibold">Kerjasama Dengan Kami</a>
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
          <NuxtLink to="#">
            <button class="view-all bg-teal-100 text-green-900 py-2 px-4 rounded-full hover:bg-green-500 transition-colors duration-400 font-bold">Lihat Semua</button>
          </NuxtLink>
        </div>
        
        <div v-if="loading" class="loading-spinner">Loading...</div>
        
        <div v-else class="event-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 justify-center">
          <nuxt-link v-for="event in (searchConfirmed ? searchResults : events)" :key="event.id" @click="goToEvent(event.slug)">
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
import Swal from 'sweetalert2';
import axios from 'axios';

export default {
  data() {
    return {
      showCategory: false,
      showCity: false,
      searchQuery: '', 
      searchResults: [], 
      events: [], 
      user: null,
      loading: true, 
      isSearching: false,
      searchConfirmed: false, 
      isLoggedIn: false,
      username: '',
      dropdownOpen: false,
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
  methods: {
    async fetchEvents() {
      try {
        console.log('Fetching all events...');
        const response = await axios.get('https://event-api.ordent-global.workers.dev/api/event');
        console.log('Response received:', response);
        this.events = response.data.result.map(event => {
          return {
            ...event,
            images: JSON.parse(event.images)
          };
        });
        this.loading = false; 
      } catch (error) {
        console.error('Error fetching events:', error);
        this.loading = false; 
      }
    },
    
    fetchUser(token) {
      fetch('https://event-api.ordent-global.workers.dev/api/auth/getuser', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      })
      .then(response => response.json())
      .then(data => {
        if (data.user) {
          this.user = data.user
        } else {
          console.error('Gagal mengambil data pengguna:', data.message)
        }
      })
      .catch(error => {
        console.error('Error fetching user:', error)
        this.user = null
      })
    },

    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen
    },

    async searchEvents() {
      try {
        console.log('Searching for:', this.searchQuery);
        const response = await axios.get(`https://event-api.ordent-global.workers.dev/api/event?search=${this.searchQuery}`);
        this.events = response.data.result.map(event => {
          return {
            ...event,
            images: JSON.parse(event.images)
          };
        });
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

    getFirstImage(images) {
      return Array.isArray(images) && images.length > 0 ? images[0] : '/img/default-event.jpg'; 
    },

    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
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
    },

    goToEvent(slug) {
      this.$router.push(`/event/${slug}/tiket`);
    },

    logout() {
      localStorage.removeItem('token')
      this.user = null
      location.reload()
      this.$router.push('/login'); 
    }
  },

  watch: {
    searchQuery() {
      if (!this.searchConfirmed) {
        this.performSearch(); 
      }
    }
  },

  async mounted() {
    const token = localStorage.getItem('token')
    if (token) {
      this.fetchUser(token)
    }
    await this.fetchEvents(); 
    document.addEventListener('click', this.handleClickOutside);
  },

  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside);
  }
}
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
  align-items: center;
  padding: 8px 16px; 
}

.dropdown-content a:hover {
  background-color: #f1f1f1; 
}

.dropdown-user {
  position: absolute;
  right: 0;
  background-color: white;
  border: 1px solid #ddd;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  z-index: 1;
  width: 150px;
}

.dropdown-user a {
  display: block;
  padding: 8px 16px;
  text-decoration: none;
  color: #333;
}

.dropdown-user a:hover {
  background-color: #f0f0f0;
}


.event-list a {
  cursor: pointer; 
}

.event-list img {
  pointer-events: none; 
}

.event-card {
  position: relative;
  z-index: 1; 
}

.event-card:hover {
  cursor: pointer;
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