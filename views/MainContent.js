const MainContent = Vue.component("main-content", {
  template: `
    <div class="container main">
      <div class="main__form">
        <h2 class="subtitle">Enter a string</h2>
        <string-form @newString="validateString"/>
        <alphabets />
      </div>

      <div class="main__results">
        <h2 class="subtitle">{{ stringList.length ? "Results" : ""}}</h2>

        <string-card
          v-for="(s, i) in stringList"
          :stringInput="s.string"
          :valid="s.valid"
          :key="i"
        ></string-card>
      </div>
    </div>
  `,
  data() {
    return {
      reExp: /^[ab]=[ab\d]([\+\-\*\/][ab\d])*;$/,
      stringList: JSON.parse(localStorage.getItem("fsm_string_list")) || []
    };
  },
  components: {
    StringForm,
    StringCard,
    Alphabets
  },
  methods: {
    validateString(s) {
      const result = {
        string: s,
        valid: this.reExp.test(s)
      };

      this.stringList.unshift(result);
      if (this.stringList.length > 10) this.stringList.pop();

      localStorage.setItem("fsm_string_list", JSON.stringify(this.stringList));
    }
  }
});
