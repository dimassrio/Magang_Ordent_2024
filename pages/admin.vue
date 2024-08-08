<template>
  <div>
    <h1>Welcome</h1>
  </div>
</template>

<script>
export default {
  middleware: 'admin' 
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

</style>