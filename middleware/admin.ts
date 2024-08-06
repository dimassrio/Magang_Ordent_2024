// middleware/admin.ts
import { Middleware } from '@nuxt/types'
const admin: Middleware = ({ store, redirect }) => {
  try {
    // Jika tidak ada pengguna, arahkan ke halaman login
    if (!store.state.user) {
      console.log('User not found, redirecting to login');
      return redirect('/login');
    }
    // Jika pengguna bukan admin, arahkan ke halaman login
    if (!store.state.user.isAdmin) {
      console.log('User is not admin, redirecting to login');
      return redirect('/login');
    }
  } catch (error) {
    console.error('Error in admin middleware:', error);
    return redirect('/error');
  }
}

export default admin;