<template>
  <!-- Tambahkan template HTML Anda di sini -->
  <div>
    <h1>Welcome</h1>
  </div>
</template>

<script>
export default {
  middleware: 'admin' // Menerapkan middleware admin.js pada layout ini
}

export const state = () => ({
  user: null
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  }
}
</script>

<style scoped>
  /* Tambahkan gaya CSS Anda di sini */
</style>