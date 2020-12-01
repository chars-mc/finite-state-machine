const StringCard = Vue.component("string-card", {
  template: `
    <div class="card" :class="valid? 'valid' : 'not-valid'">
      <b>{{ stringInput }}</b>
      <i>{{valid? 'is a valid string' : 'is not a valid string'}}</i>
    </div>
  `,
  props: ["stringInput", "valid"]
});
