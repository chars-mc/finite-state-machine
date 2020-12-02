const Alphabets = Vue.component("alphabetss", {
  template: `
    <details class="alphabets">
      <summary class="alphabets__summary text">Alphabets</summary>

      <ul class="alphabets__list">
        <li> &Sigma; = {VAR, D, OP, =, ;} </li>
        <li> VAR= {a, b} </li>
        <li> D= {0, 1, 2, 3, 4, 5, 6, 7, 8, 9} </li>
        <li> OP= {+, -, *, /} </li>
      </ul>
    </details>
  `
});
