const AppBar = Vue.component("app-bar", {
  template: `
    <header class="app-bar">
      <div class="container">
        <div class="app-bar__title" to="/">
          <img class="app-bar__logo" src="img/icon.svg">
          <h1 class="title">Finite-state Machine</h1>
        </div>

        <div class="app-bar__buttons">
          <router-link class="title" :to="$route.path === '/' ? '/about' : '/'">
            <i class="bx bx-home-alt" v-if="$route.path !== '/'"></i>
            <i class="bx bx-help-circle" v-else></i>
          </router-link>
        </div>
      </div>
    </header>
  `
});
