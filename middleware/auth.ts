import { defineNuxtRouteMiddleware, navigateTo, useState } from "nuxt/app";

export default defineNuxtRouteMiddleware((to, from) => {
  try {
    const isLoggedIn = useState<boolean>('loggedIn').value;
    const isAdmin = useState<boolean>('isAdmin').value;
    const isUser = useState<boolean>('isUser').value;

    // Jika tidak ada pengguna, arahkan ke halaman login
    if (!isLoggedIn) {
      console.log('User not logged in, redirecting to login');
      return navigateTo('/login');
    }

    // Jika pengguna bukan admin atau user, arahkan ke halaman login
    if (!isAdmin && !isUser) {
      console.log('User is neither admin nor user, redirecting to login');
      return navigateTo('/login');
    }
  } catch (error) {
    console.error('Error in auth middleware:', error);
    return navigateTo('/error');
  }
});