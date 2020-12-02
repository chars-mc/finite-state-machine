new Vue({
  el: "#app",
  template: `
    <div class="app">
      <app-bar/>

      <router-view></router-view>
    </div>
  `,
  router: router
});
