import { defineNuxtRouteMiddleware, navigateTo, useState } from "nuxt/app";

export default defineNuxtRouteMiddleware((to, from) => {
  const isLoggedIn = useState<boolean>('loggedIn').value;

  // Jika pengguna tidak terautentikasi, arahkan ke halaman login
  if (!isLoggedIn) {
    return navigateTo('/login');
  }
});
