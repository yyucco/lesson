export default function ({ store, route, redirect }) {
  if (route.meta[0].requiresAuth && !store.getters.isAuthenticated && route.name !== 'login' && route.name !== 'signup' ) {
    return redirect('/login')
  }
  if (route.meta[0].requiresAuth && store.getters.isAuthenticated && route.name !== 'index' ) {
    return redirect('/')
  }
}