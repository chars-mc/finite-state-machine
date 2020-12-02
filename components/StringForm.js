const StringForm = Vue.component("string-form", {
  template: `
    <form @submit.prevent="addString" class="string-form">
      <label class="text" for="input-string">
        Enter a string that matches:
        <b>
          <code>VAR=(VAR/D)(OP(VAR/D))*</code>
          </b>
      </label>

      <div class="input-container">
        <input
          id="input-string"
          class="input-string"
          v-model="inputString"
          type="text"
          placeholder="For example a=2+4-1*9/3;"
        />

        <button type="submit" class="btn btn-icon add-button" :disabled="disabled">
          <i class="bx bx-right-arrow-circle"></i>
        </button>
      </div>
    </form>
  `,
  data() {
    return {
      inputString: ""
    };
  },
  computed: {
    disabled() {
      return this.inputString.length === 0;
    }
  },
  methods: {
    addString() {
      this.$emit("newString", this.inputString);
      this.inputString = "";
    }
  }
});
