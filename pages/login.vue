<template>
  <div class="font-sans bg-white overflow-x-hidden">
    <header class="flex flex-col md:flex-row justify-between items-center p-4 bg-white relative">
      <div class="logo mb-4 md:mb-0">
        <NuxtLink to="/"><img src="/img/logoG.png" alt="GOERS" class="h-8"></NuxtLink>
      </div>

      <div class="search-container relative w-full md:w-1/2 mb-4 md:mb-0">
        <div class="search-bar items-center bg-gray-200 rounded-lg">
          <input class="bg-transparent w-full p-2 rounded-lg" type="text" placeholder="Cari acara, taman rekreasi, dll..." v-model="searchQuery" @input="performSearch"/>
          <i class="fas fa-search mr-2"></i>
        </div>
      </div> 

      <div class="header-right flex items-center">
        <button class="btn-pengalaman bg-white font-bold py-2 px-4 rounded-md mr-2 hover:bg-teal-100 transition-colors duration-400 text-teal-600">Buat Pengalaman</button>
        <NuxtLink to="/register" class="btn-masuk bg-teal-600 text-white hover:bg-teal-400 transition-colors duration-400 font-bold py-2 px-3 rounded-md"><button>Daftar</button></NuxtLink>
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

    <div class="max-w-md mx-auto mt-1 p-4 bg-white rounded-lg text-blue-900">
      <h2 class="text-2xl font-semibold mb-2">Halo!<br>Silakan masukkan email dan password anda untuk masuk atau mendaftar.</h2>
      <form @submit.prevent="handleLogin">
        <div class="input-group mb-4 text-left">
          <label for="email" class="block mb-2 font-bold text-gray-600">Alamat Email</label>
          <input v-model="email" type="email" id="email" name="email" required placeholder="Masukkan email anda..." class="w-full p-2 border-b border-gray-300 focus:outline-none">
        </div>
        <div class="input-group mb-4 text-left">
          <label for="password" class="block mb-2 font-bold text-gray-600">Password</label>
          <input v-model="password" type="password" id="password" name="password" required placeholder="Masukkan password anda..." class="w-full p-2 border-b border-gray-300 focus:outline-none">
        </div>
        <button type="submit" class="w-full bg-teal-600 text-white hover:bg-teal-400 py-2 px-4 rounded-md transition duration-300 font-bold">Masuk</button>
        <p v-if="errorMessage" class="text-red-500 text-sm mt-2">{{ errorMessage }}</p>
        <p class="text-sm text-gray-600 mb-2 text-center">Belum punya akun? <NuxtLink to="/register" class="text-green-400 font-bold mb-4">Klik disini</NuxtLink> untuk mendaftar!</p>
      </form>
    </div>

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
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      email: '',
      password: '',
      searchQuery: '', 
      showCity: false,
      showCategory: false,
      errorMessage: '', 
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
    async handleLogin() {
      try {
        const response = await fetch('https://event-api.ordent-global.workers.dev/api/auth/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password
          })
        });
        const data = await response.json();

        console.log('API Response:', data);

        if (response.ok) {
          if (data.result && data.result.session) {
            localStorage.setItem('token', data.result.session); // Simpan token di localStorage

            Swal.fire('Login Berhasil', 'Anda telah berhasil masuk.', 'success')
              .then(() => {
                this.$router.push('/'); 
              });
          } else {
            Swal.fire('Login Gagal', data.message || 'Email atau password salah.', 'error');
          }
        } else {
          Swal.fire('Login Gagal', data.message || 'Terjadi kesalahan saat login.', 'error');
        }
      } catch (error) {
        console.error('Login Error:', error);
        Swal.fire('Kesalahan', 'Terjadi kesalahan jaringan. Silakan coba lagi nanti.', 'error');
      }
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

    fetchUser(token) {
  if (!token) {
    console.error('Token tidak ditemukan');
    return; 
  }

  fetch('https://event-api.ordent-global.workers.dev/api/auth/getuser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify({ token }) 
  })
  .then(response => {
    console.log('Response status:', response.status); 
    return response.json();
  })
  .then(data => {
    console.log('Data yang diterima:', data);
    if (data.success === false) {
      console.error('Gagal mengambil data pengguna:', data.result.message || 'Tidak ada pesan kesalahan');
      return;
    }
    if (data.user) {
      this.user = data.user;
    } else {
      console.error('Gagal mengambil data pengguna: Tidak ada data pengguna');
    }
  })
  .catch(error => {
    console.error('Error fetching user:', error);
    this.user = null;
  });
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

    toggleCity() {
      this.showCity = !this.showCity; 
    },

    toggleCategory() {
      this.showCategory = !this.showCategory; 
    },

    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.showCity = false;
        this.showCategory = false;
        this.resetSearch(); 
      }
    },
  },
  watch: {
    searchQuery() {
      if (!this.searchConfirmed) {
        this.performSearch(); 
      }
    }
  },

  async mounted() {
    const token = localStorage.getItem('token'); 
      console.log('Token yang ditemukan:', token); 
      if (token) {
        console.log('Memanggil fetchUser dengan token yang valid');
        await this.fetchUser(token);
      } else {
        console.log('Token tidak ditemukan, tidak memanggil fetchUser');
      } 
      document.addEventListener('click', this.handleClickOutside);
    },

  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside);
  },
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