// middleware/admin.js
export default function ({ store, redirect }) {
    // Jika pengguna bukan admin, arahkan ke halaman home
    if (!store.state.user.isAdmin) {
      return redirect('/login')
    }
    else (!store.state.user) 
        return redirect('/login')
    
}