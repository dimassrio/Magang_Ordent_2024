<template>
  <div class="font-sans bg-white overflow-x-hidden">
    <header class="flex flex-col md:flex-row justify-between items-center p-4 bg-white shadow-md">
      <div class="logo mb-4 md:mb-0">
        <nuxt-link to="/">
          <img src="/img/logoG.png" alt="GOERS" class="h-8" />
        </nuxt-link>
      </div>

      <div class="search-bar flex items-center bg-gray-200 rounded-full w-full md:w-1/2 mb-4 md:mb-0">
        <input class="bg-transparent w-full p-2 rounded-full" type="text" placeholder="Cari acara, taman rekreasi, dll..." />
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

    <main>
      <section class="banner ">
        <img src="/img/f1.jpg" alt="Destinasi liburan" class="w-full h-auto object-cover rounded-lg" />
        <div class="banner-nav bottom-4 left-1/2 transform -translate-x-1/2 flex"></div>
      </section>

      <section class="best-offers p-4 bg-white mt-4">
        <div class="section-header flex justify-between items-center mb-4">
          <h2 class="text-xl font-bold">Best Offers</h2>
          <nuxt-link to="/event" class="view-all bg-teal-100 text-green-700 py-2 px-4 rounded-full hover:bg-teal-200 transition-colors duration-400 font-bold">Lihat Semua</nuxt-link>
        </div>
        
        <div class="event-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-center" style="scrollbar-width: none; -ms-overflow-style: none">
          <nuxt-link to="/event/dept-live-in-jakarta-2024" class="event-card flex-none w-60">
            <img src="/img/a.jpg" alt="Dept Live in Jakarta 2024" class="rounded-lg" />
              <h3 class="text-lg mt-2 px-2">Dept Live in Jakarta 2024</h3>
                <b class="text-black py-1 px-2 rounded">Dari IDR 840K</b>
          </nuxt-link>

          <nuxt-link to="/event/soundshock" class="event-card flex-none w-60">
            <img src="/img/b.jpg" alt="SOUNDSHOCK" class="rounded-lg" />
              <h3 class="text-lg mt-2 px-2">SOUNDSHOCK</h3>
                <b class="text-black py-1 px-2 rounded">Dari IDR 149K</b>
          </nuxt-link>

          <nuxt-link to="/event/bang-yedam-1st-fan-meeting-in-jakarta" class="event-card flex-none w-60">
            <img src="/img/c.jpg" alt="BANG YEDAM 1ST FAN MEETING IN JAKARTA" class="rounded-lg"/>
              <h3 class="text-lg mt-2 px-2">BANG YEDAM 1ST FAN MEETING IN JAKARTA</h3>
                <b class="text-black py-1 px-2 rounded">Dari IDR 900K</b>
          </nuxt-link>

          <nuxt-link to="/event/the-papandayan-jazz-fest-2024" class="event-card flex-none w-60">
            <img src="/img/d.jpg" alt="The Papandayan Jazz Fest 2024" class="rounded-lg" />
             <h3 class="text-lg mt-2 px-2">The Papandayan Jazz Fest 2024</h3>
                <b class="text-black py-1 px-2 rounded">Dari IDR 195K</b>
          </nuxt-link>

          <nuxt-link to="/event/puri-nirwana-waterpark-festival" class="event-card flex-none w-60">
            <img src="/img/e.jpeg" alt="Puri Nirwana Waterpark Festival" class="rounded-lg" />
              <h3 class="text-lg mt-2 px-2">Puri Nirwana Waterpark Festival</h3>
                <b class="text-black py-1 px-2 rounded">IDR 50K</b>
          </nuxt-link>
        </div>
        <br/>

        <div class="section-header flex justify-between items-center mb-4">
          <h2 class="text-xl font-bold">Jalan Jalan Untuk Satu Circle Paling Seru</h2>
          <nuxt-link to="/event" class="view-all bg-teal-100 text-green-700 py-2 px-4 rounded-full hover:bg-teal-200 transition-colors duration-400 font-bold">Lihat Semua</nuxt-link>
        </div>

        <div class="event-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-center" style="scrollbar-width: none; -ms-overflow-style: none">
          <nuxt-link to="/event/krakatau-park" class="event-card flex-none w-60">
            <img src="/img/aa.jpg" alt="Krakatau Park" class="rounded-lg" />
              <h3 class="text-lg mt-2 px-2">Krakatau Park</h3>
               <b class="text-black py-1 px-2 rounded">Dari IDR 90K</b>
               <br>
               <b class="bg-red-500 text-white py-1 px-2 rounded-full">Diskon s/d 50%</b>
          </nuxt-link>

          <nuxt-link to="/event/theatrical-audio-experience" class="event-card flex-none w-60">
            <img src="/img/bb.jpg" alt="12AM Indonesia - 360° Theatrical Audio Experience" class="rounded-lg h-44 w-full object-cover" />
              <h3 class="text-lg mt-2 px-2">12AM Indonesia - 360° Theatrical Audio Experience</h3>
                <b class="text-black py-1 px-2 rounded">Dari IDR 119K</b>
                <br>
               <b class="bg-red-500 text-white py-1 px-2 rounded-full">Diskon s/d 8%</b>
          </nuxt-link>

          <nuxt-link to="/event/bounce-street-asia" class="event-card flex-none w-60">
            <img src="/img/cc.jpg" alt="Bounce Street Asia" class="rounded-lg" />
              <h3 class="text-lg mt-2 px-2">Bounce Street Asia</h3>
                <b class="text-black py-1 px-2 rounded">IDR 20K</b>
          </nuxt-link>

          <nuxt-link to="/event/the-bucketlist" class="event-card flex-none w-60">
            <img src="/img/dd.jpg" alt="The Bucketlist" class="rounded-lg" />
              <h3 class="text-lg mt-2 px-2">The Bucket List</h3>
                <b class="text-black py-1 px-2 rounded">IDR 250K</b>
                <br>
                <b class="bg-red-500 text-white py-1 px-2 rounded-full">Diskon s/d 33%</b>
          </nuxt-link>

          <nuxt-link to="/event/go-wet-waterpark" class="event-card flex-none w-60">
            <img src="/img/ee.jpg" alt="Go! Wet Waterpark" class="rounded-lg h-44 w-full object-cover" />
              <h3 class="text-lg mt-2 px-2">Go! Wet Waterpark</h3>
                <b class="text-black py-1 px-2 rounded">IDR 70K</b>
                <br>
                <b class="bg-red-500 text-white py-1 px-2 rounded-full">Diskon s/d 68%</b>
          </nuxt-link>
        </div>
        <br />

        <div class="section-header flex justify-between items-center mb-4">
          <h2 class="text-xl font-bold">Attractions</h2>
            <nuxt-link to="/event" class="view-all bg-teal-100 text-green-700 py-2 px-4 rounded-full hover:bg-teal-200 transition-colors duration-400 font-bold">Lihat Semua</nuxt-link>
        </div>
        
        <div class="event-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-center" style="scrollbar-width: none; -ms-overflow-style: none">
          <nuxt-link to="/event/taman-pantai-ancol-regular" class="event-card flex-none w-60">
            <img src="/img/3a.png" alt="Taman Pantai - Ancol Regular" class="rounded-lg" />
              <h3 class="text-md mt-2 px-2">Taman Pantai-Ancol Regular</h3>
                <p class="text-black py-1 px-2 rounded font-bold">Dari IDR 50K</p>
                  <b class="bg-red-500 text-white py-1 px-2 rounded-full">Diskon s/d 8%</b>
          </nuxt-link>

          <nuxt-link to="/event/taman-mini-indonesia-indah" class="event-card flex-none w-60">
            <img src="/img/3b.jpg" alt="Taman Mini Indonesia Indah (TMII)" class="rounded-lg" />
              <h3 class="text-lg mt-2 px-2">Taman Mini Indonesia Indah (TMII)</h3>
                <P class="text-black py-1 px-2 rounded font-bold">Dari IDR 10K</P>
                  <b class="bg-red-500 text-white py-1 px-2 rounded-full">Diskon s/d 60%</b>
          </nuxt-link>

          <nuxt-link to="/event/solo-safari" class="event-card flex-none w-60">
            <img src="/img/3c.jpg" alt="Solo Safari" class="rounded-lg" />
              <h3 class="text-lg mt-2 px-2">Solo Safari</h3>
                <p class="text-black py-1 px-2 rounded font-bold">Dari IDR 900K</p>
                  <b class="bg-red-500 text-white py-1 px-2 rounded-full">Diskon s/d 29%</b>
          </nuxt-link>

          <nuxt-link to="/event/candi-borobudur-pelataran" class="event-card flex-none w-60">
            <img src="/img/3d.jpg" alt="Candi Borobudur - Pelataran" class="rounded-lg" />
              <h3 class="text-md mt-2 px-2">Candi Borobudur - Pelataran</h3>
                <p class="text-black py-1 px-2 rounded font-bold">Dari IDR 25K</p>
          </nuxt-link>

          <nuxt-link to="/event/banyuwangi-park" class="event-card flex-none w-60">
            <img src="/img/3e.jpg" alt="Banyuwangi Park" class="rounded-lg" />
              <h3 class="text-lg mt-2 px-2">Banyuwangi Park</h3>
                <p class="text-black py-1 px-2 rounded font-bold">Dari IDR 50K</p>
                  <b class="bg-red-500 text-white py-1 px-2 rounded-full">Diskon s/d 29%</b>
          </nuxt-link>
        </div>
        <br />

        <div class="section-header flex justify-between items-center mb-4">
          <h2 class="text-md font-bold">Latest On Goers</h2>
          <nuxt-link to="/event" class="view-all bg-teal-100 text-green-700 py-2 px-4 rounded-full hover:bg-teal-200 transition-colors duration-400 font-bold">Lihat Semua</nuxt-link>
        </div>

        <div
          class="event-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-center"
          style="scrollbar-width: none; -ms-overflow-style: none">
          <nuxt-link to="/event/sempurna-bersama-harris-puri-mansion" class="event-card flex-none w-60">
            <img src="/img/4a.jpg" alt="Sempurn4 Bersama Harris Puri Mansion" class="rounded-lg" />
            <h3 class="text-lg mt-2 px-2">Sempurn4 Bersama Harris Puri Mansion</h3>
            <b class="text-black py-1 px-2 rounded">Dari IDR 350K</b>
          </nuxt-link>
          <nuxt-link to="/event/relish-groovy-night" class="event-card flex-none w-60">
            <img src="/img/4b.jpeg" alt="Relish Groovy Night" class="rounded-lg"/>
            <h3 class="text-lg mt-2 px-2">Relish Groovy Night</h3>
            <b class="text-black py-1 px-2 rounded">Dari IDR 100K</b>
            <br>
            <b class="bg-red-500 text-white py-1 px-2 rounded-full">Diskon s/d 9%</b>
          </nuxt-link>
          <nuxt-link to="/event/indonesia-product-conference-2024" class="event-card flex-none w-60">
            <img src="/img/4c.png" alt="Indonesia Product Conference" class="rounded-lg h-44 w-full object-cover"/>
            <h3 class="text-lg mt-2 px-2">Indonesia Product Conference</h3>
            <b class="text-black py-1 px-2 rounded">Dari IDR 221K</b>
          </nuxt-link>
          <nuxt-link to="/event/youth-conference" class="event-card flex-none w-60">
            <img src="/img/4d.jpg" alt="Youth Conference" class="rounded-lg" />
            <h3 class="text-lg mt-2 px-2">Youth Conference</h3>
            <b class="text-black py-1 px-2 rounded">Dari IDR 195K</b>
          </nuxt-link>
          <nuxt-link to="/event/btv-semesta-berpesta-yogyakarta" class="event-card flex-none w-60">
            <img src="/img/4e.jpg" alt="BTV SEMESTA BERPESTA - YOGYAKARTA" class="rounded-lg" />
            <h3 class="text-lg mt-2 px-2">BTV SEMESTA BERPESTA - YOGYAKARTA</h3>
            <b class="text-black py-1 px-2 rounded">Dari IDR 30K</b>
          </nuxt-link>
        </div>
      </section>
    </main>

    <section class="banner ">
        <img src="/img/f1.jpg" alt="Destinasi liburan" class="w-full h-auto object-cover rounded-lg" />
        <div class="banner-nav bottom-4 left-1/2 transform -translate-x-1/2 flex"></div>
      </section>

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
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      showCategory: false,
      showCity: false
    };
  },
  methods: {
    toggleCategory() {
      this.showCategory = !this.showCategory; // Tambahkan metode untuk toggle visibilitas daftar kategori
    },
    toggleCity() {
      this.showCity = !this.showCity; // Tambahkan metode untuk toggle visibilitas daftar kota
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.showCity = false; // Tutup daftar kota jika mengklik di luar box list
      }
    }
  },

  name: 'IndexPage'
}
routes:
{
      path: '/dashboard'
      component: () => import('~/pages/dashboard.vue')
      meta: { requiresAuth: true }
    }
{
  middleware: 'admin'

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
</style>

<<<<<<< HEAD
=======

>>>>>>> 0893210e5b0b5c53384724a0fcbfb55e99133e3d
