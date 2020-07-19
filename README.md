 [![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

 # Kolam :snowflake:
 Kolam is a class of patterns drawn using lines, curves and dots. Made of rice flour or chalk, Kolams are a welcome sight in the courtyards of homes in South India.
## Lo Behold!
![alt tag](https://github.com/Dhanya-Abhirami/Kolam-Generator/blob/master/output.png)

 ## L-System
 An L-system or Lindenmayer system is a parallel rewriting system and a type of formal grammar. An L-system consists of an alphabet of symbols that can be used to make strings, a collection of production rules that expand each symbol into some larger string of symbols, an initial "axiom" string from which to begin construction, and a mechanism for translating the generated strings into geometric structures.
L-systems differ from Chomsky grammars in that all variables are replaced in each step, and not just one. For example
```
Axiom (Initial State): G G
Production Rule: G -> g G G f
First Derivation: g G G f g G G f
Second Derivation: g g G G f g G G f f g g G G f g G G f f
```
 ## L-System Application
 ```
 Variables: F,A,B 
 Axiom: FBFBFBFB
 Rules:
  A->AFBFA 
  B->AFBFBFBFA 
  ```
  Where, 
  <table>
 <th>Symbol</th><th>Meaning</th></tr>
 <tr><td>F</td><td> Move forward 20 units</td>
<tr><td>A</td><td>Draw an arc of radius 20 units upto 90 degrees <br>
<tr><td rowspan="4">B</td><td>
  Calculate forward units l = 10/sqrt (2)<br>
  Move forward l Units<br>
  Draw an arc of radius l units upto 270 degrees<br>
 Forward l Units</td>
  </table>
  
## References
[Wikipedia](https://en.wikipedia.org/wiki/L-system) <br>
[Graphical modeling](http://algorithmicbotany.org/papers/abop/abop-ch1.pdf) <br>
[Research Paper 1](https://www.researchgate.net/publication/295258996_A_View_of_India_Through_Kolam_Patterns_and_Their_Grammatical_Representation) <br>
[Research Paper 2](https://www.semanticscholar.org/paper/Application-of-L-Systems-to-Algorithmic-Generation-Prusinkiewicz-Krithivasan/940ea81d742a5b8e690bce367ee4981bb6dbba60) <br>
[Example 1](https://imaginary.org/film/mathlapse-l-system-for-single-knot-kolam-pattern-generation) <br>
[Example 2](https://gist.github.com/jhubley/3cc23bf95bb5acaaad09152878a13d3b) <br>
[Example 3](https://users.math.yale.edu/public_html/People/frame/Fractals/Panorama/Art/Kolams/Kolams.html)
## Support Me!
* If you :heart: my project, please give it a :star: .
* Feel free to give me more grammars for Kolam generation
