 ## L-System Application
 Variables: F,A,B <br>
 Axiom: FBFBFBFB <br>
 Rules: <br>
  A->AFBFA <br>
  B->AFBFBFBFA <br>
  Where, 
F <br>
  Move forward 20 units <br>
A <br>
  Draw an arc of radius 20 units upto 90 degrees <br>
B <br>
  Calculate forward units l = 10/sqrt (2) <br>
  Move forward l Units <br>
  Draw an arc adius l units upto 270 degrees <br>
  Forward l Units
## Screenshot
![alt tag](https://github.com/Dhanya-Abhirami/Kolam-Generator/blob/master/output.png)
## References
[Wikipedia](https://en.wikipedia.org/wiki/L-system) <br>
[Similar One](https://imaginary.org/film/mathlapse-l-system-for-single-knot-kolam-pattern-generation) <br>
[An Example](https://gist.github.com/jhubley/3cc23bf95bb5acaaad09152878a13d3b) <br>
