# Finite-state Machine

Evaluate expressions that match the regular expression **`VAR=(VAR/D) (OP (VAR/D))`**

## Alphabet

- **Σ = {VAR, D, OP, =, ;}** is the alphabet, described below:
  - **VAR= {a, b}**
  - **D= {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}**
  - **OP= {+, -, \*, /}**
- **E = {q<sub>0</sub>, q<sub>1</sub>, q<sub>2</sub>, q<sub>3
  </sub>, q<sub>4</sub>, q<sub>5</sub>, q<sub>6</sub>}**
  is the set of states.
- **S = q<sub>0</sub>** is the initial state.
- **F = q<sub>6</sub>** is the final state.
- **δ: Σ × Σ → Σ** is the function to determine the next state.

## Diagram

![diagram](img/diagram.png)

## Table

| δ             | VAR           | D             | OP            | =             | ;             |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| q<sub>0</sub> | q<sub>1</sub> | -1            | -1            | -1            | -1            |
| q<sub>1</sub> | -1            | -1            | -1            | q<sub>2</sub> | -1            |
| q<sub>2</sub> | q<sub>3</sub> | q<sub>3</sub> | -1            | -1            | -1            |
| q<sub>3</sub> | -1            | -1            | q<sub>4</sub> | -1            | q<sub>6</sub> |
| q<sub>4</sub> | q<sub>5</sub> | q<sub>5</sub> | -1            | -1            | -1            |
| q<sub>5</sub> | -1            | -1            | q<sub>4</sub> | -1            | q<sub>6</sub> |

**_Note:_** _for programming purposes, the -1 would be an error in the analyzed string._

## Resources

- [Vue.js](https://vuejs.org/)
- [Vue router](https://router.vuejs.org/)
- Font: [Saira](https://fonts.google.com/specimen/Saira)
- Icons: [Boxicons](https://boxicons.com/)
