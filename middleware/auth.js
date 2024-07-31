// middleware/auth.js
export default function ({ store, redirect }) {
  // Jika pengguna tidak terautentikasi, arahkan ke halaman login
  if (!store.state.authenticated) {
    return redirect('/login')
  }
}
