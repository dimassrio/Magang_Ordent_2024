<template>
    <div>
        <header class="flex flex-col md:flex-row justify-between items-center p-4 bg-white shadow-md">
            <div class="logo mb-4 md:mb-0">
                <NuxtLink to="/"><img src="/img/logoG.png" alt="GOERS" class="h-8"></NuxtLink>
            </div>
        <div class="search-bar flex items-center bg-gray-200 rounded-full px-4 w-full md:w-1/2 mb-4 md:mb-0">
          <input class="bg-transparent w-full p-2" type="text" placeholder="Cari acara, taman rekreasi, dll...">
          <i class="fas fa-search"></i>
        </div>
        <div class="header-right flex items-center">
          <button class="btn-pengalaman bg-white font-bold py-1 px-4 rounded mr-2 hover:bg-teal-200 transition-colors duration-400 text-green-700">Buat Pengalaman</button>
          <NuxtLink to="/login"><button class="btn-masuk bg-green-500 text-white font-bold py-1 px-3 rounded">Masuk</button></NuxtLink>
        </div>
      </header>
  
      <nav class="flex flex-col md:flex-row justify-between p-4 bg-white shadow mt-2 border-gray-200">
      <div class="flex flex-row justify-between w-full">
        <div class="nav-left flex flex-col md:flex-row">
          <div class="dropdown relative mb-4 md:mb-0">
            <button class="dropbtn bg-white text-gray-800 py-2 px-4 rounded-full">Pilih Kota Anda</button>
            <div class="dropdown-content absolute hidden bg-white rounded mt-2"></div>
          </div>
          <div class="dropdown relative ml-0 md:ml-4">
            <button class="dropbtn bg-white text-gray-800 py-2 px-4 rounded-full">Kategori</button>
            <div class="dropdown-content absolute hidden bg-white shadow-md rounded mt-2">
              <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Edukasi & Karier</a>
              <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Hiburan & Pertunjukan</a>
              <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Travel & Outdoor</a>
              <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Amal</a>
              <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Olahraga</a>
              <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Tempat Wisata</a>
              <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Belanja</a>
              <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Seni & Belanja</a>
            </div>
          </div>
        </div>
        <div class="nav-right flex flex-col md:flex-row items-end">
          <a href="#" class="text-gray-800 ml-0 md:ml-4 mb-4 md:mb-3">Blog</a>
          <a href="#" class="text-gray-800 ml-0 md:ml-4 mb-4 md:mb-3">Tentang Kami</a>
          <a href="#" class="text-gray-800 ml-0 md:ml-4 md:mb-3">Kerjasama Dengan Kami</a>
        </div>
      </div>
    </nav>
  
      <div class="max-w-md mx-auto mt-1 p-4 bg-white rounded-lg text-blue-900">
        <h2 class="text-2xl font-bold mb-2">Halo!
          <br>Silahkan masukkan email Anda untuk masuk
        </h2>
        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <input v-model="email" type="email" id="email" name="email" required
                   class="text-black px-1 py-2 w-full p-2 border-b border-gray-300 focus:outline-none"
                   placeholder="Silakan masukkan alamat email anda...">
          </div>
          <div class="mb-4">
            <input v-model="password" type="password" id="password" name="password" required
                   class="text-black px-1 py-2 w-full p-2 border-b border-gray-300 focus:outline-none"
                   placeholder="Silakan masukkan Password anda...">
          </div>
          <button id="submitButton" type="submit" class="w-full bg-green-400 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300 font-bold">
            Lanjutkan
          </button>
        
        </form>
        
        <div class="text-center my-4 font-bold">atau</div>
        
        <button @click="loginWithGoogle" class="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition duration-300 mb-3 flex items-center justify-center">
        <img src="/img/google.png" alt="Google" class="w-5 h-5 mr-2">
        Lanjutkan dengan Google
      </button>
        
      <button @click="loginWithApple" class="w-full bg-black text-white py-2 px-10 rounded-md hover:bg-gray-800 transition duration-300 mb-4 flex items-center justify-center">
        <img src="/img/apple.png" alt="Apple" class="w-5 h-5 mr-2">
        Lanjutkan dengan Apple
      </button>

        <div class="flex items-center mb-4">
          <input v-model="rememberMe" type="checkbox" id="remember" name="remember" class="w-5 h-6 mr-2">
          <label for="remember" class="text-sm text-gray-600">Ingat saya</label>
        </div>
        <p class="text-sm text text-gray-600 mb-2 text-center">Belum punya akun? <NuxtLink to="/register" class="text-green-400 font-bold mb-4">Klik disini</NuxtLink> untuk membuat akun!</p>
        <p class="text-sm text-gray-600 mb-4 text-center">
          Jika terjadi masalah, silakan kunjungi pusat bantuan kami
        </p>
        <button @click="goToHelpCenter" class="w-full bg-gray-100 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-200 transition duration-300 font-bold">
          Pusat Bantuan
        </button>
      </div>
    </div>

    <footer class="bg-gray-100 p-8 border-t border-gray-200">
        <div class="footer-container flex flex-col md:flex-row justify-around"> 
            <div class="footer-column mb-4 md:mb-0">
                <h3 class="text-lg font-bold mb-2">MENGGUNAKAN GOERS</h3>
                <ul>
                    <a href=""><li class="mb-1 hover:underline hover:text-green-500 transition-colors duration-400">Penawaran Terbaik</li></a>
                    <a href=""><li class="mb-1 hover:underline hover:text-green-500 transition-colors duration-400">Lokasi  Terbaik</li></a>
                    <a href=""><li class="mb-1 hover:underline hover:text-green-500 transition-colors duration-400">Promo</li></a>
                    <a href=""><li class="mb-1 hover:underline hover:text-green-500 transition-colors duration-400">Pusat Bantuan</li></a>
                    <a href=""><li class="mb-1 hover:underline hover:text-green-500 transition-colors duration-400">Kebijakan Privasi</li></a>
                    <a href=""><li class="mb-1 hover:underline hover:text-green-500 transition-colors duration-400">Syarat dan Ketentuan</li></a>
                </ul>
            </div>
            <div class="footer-column mb-4 md:mb-0">
                <h3 class="text-lg font-bold mb-2">INFORMASI</h3>
                <ul>
                    <a href=""><li class="mb-1 hover:underline hover:text-green-500 transition-colors duration-400">Menayangkan Event di Goers</li></a>
                    <a href=""><li class="mb-1 hover:underline hover:text-green-500 transition-colors duration-400">Solusi Pemilik Venue</li></a>
                    <a href=""><li class="mb-1 hover:underline hover:text-green-500 transition-colors duration-400">Unduh Brosur</li></a>
                    <a href=""><li class="mb-1 hover:underline hover:text-green-500 transition-colors duration-400">Goers Experience Manager</li></a>
                    <a href=""><li class="mb-1 hover:underline hover:text-green-500 transition-colors duration-400">Point of Sales</li></a>
                    <a href=""><li class="mb-1 hover:underline hover:text-green-500 transition-colors duration-400">Ticket Scanner</li></a>
                    <a href=""><li class="mb-1 hover:underline hover:text-green-500 transition-colors duration-400">Harga</li></a>
                </ul>
            </div>
            <div class="footer-column mb-4 md:mb-0">
                <h3 class="text-lg font-bold mb-2">BISNIS</h3>
                <ul>
                    <a href=""><li class="mb-1 hover:underline hover:text-green-500 transition-colors duration-400">Solusi New Normal</li></a>
                    <a href=""><li class="mb-1 hover:underline hover:text-green-500 transition-colors duration-400">Management Online Event</li></a>
                    <a href=""><li class="mb-1 hover:underline hover:text-green-500 transition-colors duration-400">Venue & Event Olahraga</li></a>
                    <a href=""><li class="mb-1 hover:underline hover:text-green-500 transition-colors duration-400">Taman Bertema</li></a>
                    <a href=""><li class="mb-1 hover:underline hover:text-green-500 transition-colors duration-400">Tur & Wisata</li></a>
                    <a href=""><li class="mb-1 hover:underline hover:text-green-500 transition-colors duration-400">Pameran</li></a>
                    <a href=""><li class="mb-1 hover:underline hover:text-green-500 transition-colors duration-400">Konser & Musik</li></a>
                    <a href=""><li class="mb-1 hover:underline hover:text-green-500 transition-colors duration-400">Seminar</li></a>
                </ul>
            </div>
            <div class="footer-column mb-4 md:mb-0">
                <h3 class="text-lg font-bold mb-2">BERTEMU GOERS</h3>
                <ul>
                    <a href=""><li class="mb-1 hover:underline hover:text-green-500 transition-colors duration-400">Tentang Kami</li></a>
                    <a href=""><li class="mb-1 hover:underline hover:text-green-500 transition-colors duration-400">Blog</li></a>
                    <a href=""><li class="mb-1 hover:underline hover:text-green-500 transition-colors duration-400">Karir</li></a>
                    <a href=""><li class="mb-1 hover:underline hover:text-green-500 transition-colors duration-400">Press Kit</li></a>
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
                <a href="event.html" class="mr-4"><img src="/img/ig.svg" alt="Instagram"></a>
                <a href="event.html" class="mr-4"><img src="/img/fb.svg" alt="Facebook"></a>
                <a href="event.html" class="mr-4"><img src="/img/x.svg" alt="Twitter"></a>
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
  </template>
  
  <script>
export default {
  data() {
    return {
      email: 'dimassrio@gmail.com',
      phone: '',
      password: '12345678',
      rememberMe: false,
      user: null, // State untuk menyimpan data user
      token: null // State untuk menyimpan token jika diperlukan
    }
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
            phone: this.phone,
            password: this.password
          })
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.errors[0].message || 'Login failed');
        }


        const data = await response.json();
        console.log('Login berhasil:', data);

        // Arahkan ke halaman index setelah login berhasil
        this.$router.push('/');
      } catch (error) {
        console.error('Error saat login:', error.message);
      }
    },

    async getUser() {
      try {
        const response = await fetch('https://event-api.ordent-global.workers.dev/api/auth/getuser', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}` // Tambahkan token jika diperlukan untuk autentikasi

          }
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to get user');
        }

        const data = await response.json();
        this.user = data.result;
        console.log('User data:', data);
      } catch (error) {
        console.error('Error saat mendapatkan user:', error.message);
      }
    },

    loginWithGoogle() {
      console.log('Login dengan Google');
    },
    loginWithApple() {
      console.log('Login dengan Apple');
    },
    goToHelpCenter() {
      this.$router.push('/help-center');
    }
  }
}
</script>



<style scoped>
.dropdown:hover .dropdown-content {
  display: block;
}
</style>
  
