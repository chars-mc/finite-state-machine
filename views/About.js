const About = Vue.component("about", {
  template: `
    <div class="container about">
      <p>
        Evaluate expressions that match the regular expression
        <b>VAR=(VAR/D)(OP(VAR/D))*</b>
      </p>
        
      <h2 class="subtitle">Alphabets</h2>
      <ul>
        <li>&Sigma; = {VAR, D, OP, =, ;}</li>
        <li>VAR= {a, b}</li>
        <li>D= {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}</li>
        <li>OP= {+, -, *, /}</li>
      </ul>
      
      <h2 class="subtitle">States</h2>
      <ul class="about__states">
        <li>
          E = {q<sub>0</sub>, q<sub>1</sub>, q<sub>2</sub>, q<sub>3
          </sub>, q<sub>4</sub>, q<sub>5</sub>, q<sub>6</sub>}
          is the set of states.
        </li>
        <li>S = q<sub>0</sub> is the initial state.</li>
        <li>F = q<sub>6</sub> is the final state.</li>
        <li>δ: Σ × Σ → Σ is the function to determine the next state</li>
      </ul>
          
      <h2 class="subtitle">Diagram</h2>
      <img src="img/diagram.png">
      
      <h2 class="subtitle">Table</h2>
      <table>
        <thead>
          <tr>
            <th>δ</th>
            <th>VAR</th>
            <th>D</th>
            <th>OP</th>
            <th>=</th>
            <th>;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>q<sub>0</sub></td>
            <td>q<sub>1</sub></td>
            <td>-1</td>
            <td>-1</td>
            <td>-1</td>
            <td>-1</td>
          </tr>
          <tr>
            <td>q<sub>1</sub></td>
            <td>-1</td>
            <td>-1</td>
            <td>-1</td>
            <td>q<sub>2</sub></td>
            <td>-1</td>
          </tr>
          <tr>
            <td>q<sub>2</sub></td>
            <td>q<sub>3</sub></td>
            <td>q<sub>3</sub></td>
            <td>-1</td>
            <td>-1</td>
            <td>-1</td>
          </tr>
          <tr>
            <td>q<sub>3</sub></td>
            <td>-1</td>
            <td>-1</td>
            <td>q<sub>4</sub></td>
            <td>-1</td>
            <td>q<sub>6</sub></td>
          </tr>
          <tr>
            <td>q<sub>4</sub></td>
            <td>q<sub>5</sub></td>
            <td>q<sub>5</sub></td>
            <td>-1</td>
            <td>-1</td>
            <td>-1</td>
          </tr>
          <tr>
            <td>q<sub>5</sub></td>
            <td>-1</td>
            <td>-1</td>
            <td>q<sub>4</sub></td>
            <td>-1</td>
            <td>q<sub>6</sub></td>
          </tr>
        </tbody>
      </table>
    </div>
  `
});
