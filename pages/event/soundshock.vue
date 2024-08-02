<template>
    <div class="font-sans bg-white overflow-x-hidden">
      <header class="flex flex-col md:flex-row justify-between items-center p-4 bg-white shadow-md">
        <div class="logo mb-4 md:mb-0">
          <nuxt-link to="/">
            <img src="/img/logoG.png" alt="GOERS" class="h-8" />
          </nuxt-link>
        </div>
  
        <div class="search-bar flex items-center bg-gray-200 rounded-full px-4 w-full md:w-1/2 mb-4 md:mb-0">
          <input class="bg-transparent w-full p-2" type="text" placeholder="Cari acara, taman rekreasi, dll..." />
          <i class="fas fa-search"></i>
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
              <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Ambon</a>
              <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Bali</a>
              <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Balikpapan</a>
              <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Bandung</a>
              <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Banjarbaru - Banjarmasin</a>
              <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Batam</a>
              <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Bekasi</a>
              <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Bima</a>
              <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Blitar</a>
              <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Cirebon</a>
              <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Depok</a>
              <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Flores</a>
            </div>
          </div>
          <div class="dropdown relative mb-4 md:mb-0 ml-3">
            <button @click="toggleCategory" class="dropbtn bg-white hover:bg-gray-100 transition-colors duration-400 text-gray-800 py-2 px-4 rounded-md">Kategori</button> 
            <div v-if="showCategory" class="dropdown-content absolute bg-white shadow-xl rounded-md mt-2 w-full">
              <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Edukasi & Karier</a>
              <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Hiburan & Pertunjukan</a>
              <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Travel & Outdoor</a>
              <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Amal</a>
              <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Olahraga</a>
              <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Tempat Wisata</a>
              <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Belanja</a>
              <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Seni & Belanja</a>
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
  
      <main class="p-4">
        <div class="breadcrumb text-sm text-gray-600 mb-4 ml-2">
          <nuxt-link to="/" class="hover:underline">Beranda</nuxt-link> &gt; 
          <nuxt-link to="/jakarta" class="hover:underline">Bandung</nuxt-link> &gt; 
          <span class="text-blue-900 font-semibold">SOUNDSHOCK</span>
        </div>
  
        <div class="flex flex-col md:flex-row">
          <div class="w-full md:w-2/3">
            <h1 class="text-2xl font-bold mb-2 ml-2">SOUNDSHOCK</h1>
            <p class="text-gray-600 mb-4 ml-2 text-sm">oleh <Nuxt-Link to="#" class="text-green-500 text-sm">SOUNDSHOCK</Nuxt-Link></p> 
            <div class="flex items-center mb-4">
              <i class="fas fa-map-marker-alt text-green-500 mr-2"></i>
              <p class="text-gray-800"><b>Cornerstone Auditorium</b><br>
                Ruko, Paskal Hyper Square, Jl. Pasir Kaliki No.25-27, Kebon Jeruk, Andir, Ba, Bandung Kota, Jawa Barat, Indonesia</p>  
            </div>
            <div class="items-center flex flex-col md:flex-row ml-2 mb-4">
                <nuxt-link to="#" class="text-green-700 font-semibold">Lihat di peta</nuxt-link>  
            </div>
            <div class="flex items-center mb-4">
              <i class="fas fa-calendar-alt text-green-500 mr-2"></i>
              <p class="text-gray-800">20 Sep '24, 18.30-22.00 WIB</p>
            </div>
                <div class="flex justify-between items-center p-4 bg-white shadow-md rounded-lg">
        <span class="text-gray-800 font-bold">Dari IDR 149K</span>
        <button class="bg-teal-500 text-white font-bold py-2 px-9 rounded-lg hover:bg-teal-600 transition-colors duration-300">Beli Tiket</button>
    </div>
</div>
            <div class="w-full md:w-1/3 mt-4 md:mt-0 md:ml-4">
                <img src="/img/b.jpg" alt="Dept Live in Jakarta 2024" class="w-lg h-auto object-cover rounded-lg" />
            </div>
        </div>
  
        <div class="mt-8">
        <h2 class="text-xl font-bold mb-2">Tentang experience ini</h2>
        <!-- Teks singkat yang ditampilkan jika showMore adalah false -->
        <p class="text-gray-800 mb-4" v-if="!showMore">
          Penyangkalan, amarah, cemas, sedih, kecewa... semua rasa ini dianggap perlu disembunyikan, bahkan perlu segera dihilangkan. Namun, kali ini, mari kita sepakati kalau semua rasa boleh dirasakan dan dirayakan. Bahkan, jika perlu, kita ...
        </p>
        <!-- Teks lengkap yang ditampilkan jika showMore adalah true -->
        <p class="text-gray-800 mb-4" v-else>
            Penyangkalan, amarah, cemas, sedih, kecewa... semua rasa ini dianggap perlu disembunyikan, bahkan perlu segera dihilangkan. Namun, kali ini, mari kita sepakati kalau semua rasa boleh dirasakan dan dirayakan. Bahkan, jika perlu, kita buat perayaannya lebih istimewa.
          <br><br>
          Kita tumpahkan segala rasa bersama-sama di SOUNDSHOCK, Jumat, 20 September 2024, di Corner Stone Auditorium, Paskal Hyper Square, Bandung, ditemani For Revenge, Juicy Luicy, dan opening act oleh 510.Soundshock
        </p>
        <!-- Tombol untuk mengubah state showMore -->
        <button @click="toggleShowMore" class="text-green-500">
          {{ showMore ? 'Baca Lebih Sedikit' : 'Baca Lebih Banyak' }}
        </button>
      </div>

      <div class="mt-4">
        <h2 class="text-xl font-bold mb-2">Aturan dan Kebijakan</h2>
        <p class="text-gray-800 mb-4" v-if="!showMore">
          <ul>
            <li>1. Pastikan data diri sudah sesuai dengan kartu identitas</li>
            <li>2. Tiket akan ditukarkan dengan wristband pada saat hari H acara</li>
            <li>3. Ada batasan umur pengunjung wajib di atas 18+...</li>
          </ul>
        </p>
        <p class="text-gray-800 mb-4" v-else>
          <ul class="text-gray-800 mb-4">
            <li>1. Pastikan data diri sudah sesuai dengan kartu identitas</li>
            <li>2. Tiket akan ditukarkan dengan wristband pada saat hari H acara</li>
            <li>3. Ada batasan umur pengunjung wajib di atas 18+</li>
            <li>4. Pengunjung tidak diperbolehkan membawa senjata tajam dan senjata api.</li>
            <li>5. Pengunjung tidak diperbolehkan membawa obat-obatan terlarang.</li>
            <li>6. Pengunjung tidak diperbolehkan membawa hewan peliharaan.</li>
            <li>7. Pengunjung tidak diperbolehkan membawa makanan dan minuman dari luar</li>
            <li>8. Pengunjung tidak diperbolehkan membawa kamera DSLR.</li>
            <li>9. Pengunjung tidak diperbolehkan membawa bahan yang mudah terbakar.</li>
            <li>10. Pengunjung tidak diperbolehkan membawa Drone.</li>
        </ul>
        </p>
        <button @click="toggleShowMore" class="text-green-500">
          {{ showMore ? 'Baca Lebih Sedikit' : 'Baca Lebih Banyak' }}
        </button>
      </div>
  
        <div class="mt-8">
          <h2 class="text-xl font-bold mb-2">Bagikan:</h2>
          <div class="flex space-x-4">
            <a href="" class="text-gray-800"><i class="fab fa-xing"></i></a>
            <a href="" class="text-gray-800"><i class="fab fa-linkedin"></i></a>
            <a href="" class="text-gray-800"><i class="fab fa-whatsapp"></i></a>
            <a href="" class="text-gray-800"><i class="fab fa-telegram"></i></a>
          </div>
        </div>
      </main>
  
      <footer class="bg-gray-100 p-8 border-t border-gray-200 mt-8">
        <div class="footer-container flex flex-col md:flex-row justify-around">
          <div class="footer-column mb-4 md:mb-0">
            <h3 class="text-lg font-bold mb-2">MENGGUNAKAN GOERS</h3>
            <ul>
              <a href=""><li class="mb-1 hover:underline hover:text-green-500 transition-colors duration-400">Penawaran Terbaik</li></a>
              <a href=""><li class="mb-1 hover:underline hover:text-green-500 transition-colors duration-400">Lokasi Terbaik</li></a>
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
            <input type="email" placeholder="Alamat email" class="p-2 border rounded-lg mr-2">
            <button class="p-2 border rounded-lg bg-teal-200 hover:bg-green-500 transition-colors duration-400 text-white font-bold gap-4">Berlangganan</button>
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
    name: 'EventDetailPage',
    data() {
      return {
        showMore: false, // State untuk mengontrol tampilan teks
        eventTitle: 'Dept Live in Jakarta 2024'
      };
    },
    methods: {
      toggleShowMore() {
        this.showMore = !this.showMore; // Metode untuk mengubah state showMore
      }
    }
  }
  </script>
  
  <style scoped>
  /* Tambahkan gaya khusus di sini jika diperlukan */
  </style>