<template>
  <div class="font-sans bg-white overflow-x-hidden">
    <header class="flex flex-col md:flex-row justify-between items-center p-4 bg-white shadow-md">
      <div class="logo mb-4 md:mb-0">
        <NuxtLink to="/"><img src="/img/logoG.png" alt="GOERS" class="h-8"></NuxtLink>
      </div>
      <div class="header-right flex items-center">
        <button class="btn-pengalaman bg-white font-bold py-2 px-4 rounded-md mr-2 hover:bg-teal-200 transition-colors duration-400 text-green-700">Buat Pengalaman</button>
        <NuxtLink to="/login"><button class="btn-masuk bg-green-500 text-white hover:bg-green-700 transition-colors duration-400 font-bold py-2 px-3 rounded">Masuk</button></NuxtLink>
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

    <div class="max-w-md mx-auto mt-1 p-4 bg-white rounded-lg text-blue-900">
      <h2 class="text-2xl font-bold mb-2">Daftar<br>Silakan masukkan username, email, dan password Anda untuk membuat akun</h2>
      <form @submit.prevent="handleRegister">
        <div class="input-group mb-4 text-left">
          <label for="username" class="block mb-2 font-bold text-gray-600">Username</label>
          <input v-model="username" type="text" id="username" name="username" required placeholder="Masukkan username anda..." class="w-full p-2 border-b border-gray-300 focus:outline-none">
        </div>
        <div class="input-group mb-4 text-left">
          <label for="email" class="block mb-2 font-bold text-gray-600">Alamat Email</label>
          <input v-model="email" type="email" id="email" name="email" required placeholder="Masukkan email anda..." class="w-full p-2 border-b border-gray-300 focus:outline-none">
        </div>
        <div class="input-group mb-4 text-left">
          <label for="phone" class="block mb-2 font-bold text-gray-600">No Telepon</label>
          <input v-model="phone" type="phone" id="phone" name="phone" required placeholder="Masukkan no telepon anda..." class="w-full p-2 border-b border-gray-300 focus:outline-none">
        </div>
        <div class="input-group mb-4 text-left">
          <label for="password" class="block mb-2 font-bold text-gray-600">Password</label>
          <input v-model="password" type="password" id="password" name="password" required placeholder="Masukkan password anda..." class="w-full p-2 border-b border-gray-300 focus:outline-none">
        </div>
        <button type="submit" class="w-full bg-green-400 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300 font-bold">Daftar</button>
      </form>
      <p v-if="errorMessage" class="text-red-500 text-sm mt-2">{{ errorMessage }}</p>
      <p class="text-sm text-gray-600 mb-2 text-center">Sudah punya akun? <NuxtLink to="/login" class="text-green-400 font-bold mb-4">Klik disini</NuxtLink> untuk masuk!</p>
    </div>

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

export default {
  data() {
    return {
      email: '',
      username: '',
      password: '',
      phone: '',
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
    async handleRegister() {
      fetch('https://event-api.ordent-global.workers.dev/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.username,
          email: this.email,
          phone: this.phone,
          password: this.password
        })
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          Swal.fire('Registrasi Berhasil', 'Anda telah berhasil mendaftar. Silakan login.', 'success')
            .then(() => {
              this.$router.push('/login')
            })
        } else {
          Swal.fire('Registrasi Gagal', data.message || 'Terjadi kesalahan saat registrasi.', 'error')
        }
      })
      .catch(() => {
        Swal.fire('Kesalahan', 'Terjadi kesalahan jaringan. Silakan coba lagi nanti.', 'error')
      })
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
      }
    },
    mounted() {
      document.addEventListener('click', this.handleClickOutside);
    },
    beforeDestroy() {
      document.removeEventListener('click', this.handleClickOutside);
    },
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
</style>