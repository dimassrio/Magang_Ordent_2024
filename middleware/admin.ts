import { Middleware } from '@nuxt/types'
const admin: Middleware = ({ store, redirect }) => {
  if (!store.state.user || !store.state.user.isAdmin) {
    return redirect('/login');
  }
}

export default admin;