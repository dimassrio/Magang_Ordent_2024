<template>
    <div class="font-sans bg-white overflow-x-hidden">
      <header class="flex flex-col md:flex-row justify-between items-center p-4 bg-white shadow-md">
        <div class="logo mb-4 md:mb-0">
          <nuxt-link to="/">
            <img src="/img/logoG.png" alt="GOERS" class="h-8" />
          </nuxt-link>
        </div>
      </header>
      </div>

</template>  

<script>
export default {
  middleware: 'auth', // Menggunakan middleware untuk halaman ini
  name: 'DashboardPage'
}
</script>