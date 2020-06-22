import  { firebase, auth, db } from '@/plugins/firebase'

export default (context) => {
  context.app.router.beforeEach((to, from, next)  => {
    if (!context.route.meta[0].requiresAuth) {
      next();  
    } else {
      auth.onAuthStateChanged( (user) => {
        context.app.store.dispatch('changedUser',user);
        if (!user && to.name != 'login' && to.name != 'signup'){
          next({ path: '/login' })
        } else {
          next();   
        }
        return
      })
    }
  })
}



