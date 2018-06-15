
var w = window.innerWidth;
var h = window.innerHeight;
var axiom = "FBFBFBFB";
var len = 10;
var sentence = axiom;
var angle;

// variables: FAB
// axiom: FBFBFBFB
// rules: F-> FF+[+F-F-F]-[-F+F+F]

var rules = [];
rules[0] = {
	a: "A",
	b: "AFBFA"
}
rules[1] = {
	a: "B",
	b: "AFBFBFBFA"
}
 
function setup() {
    createCanvas(w,h);
	background('#151c19');
	turtle();
	angle = radians(45);
	// for (i = 0; i < 4; i++){
	// 	generate();
	// }
	generate();
}

function turtle(){
	resetMatrix();
	translate(width/2, height);
	for (var i = 0; i < sentence.length; i++){
		var current = sentence.charAt(i);
		if (current == "F"){
			stroke("yellow");
			line(mouseX,mouseX, mouseX, mouseY-len);
			translate(mouseX, mouseY-len);
		}else if (current == "A"){
			stroke("green");
			noFill();push();
			arc(mouseX,mouseY,10,10,0,radians(90));pop();
		}else if (current == "B"){
			 stroke("red");
			 var l=5/Math.sqrt(2);
			line(mouseX,mouseY, mouseX, mouseY-l);
			translate(mouseX, mouseY-l);
			stroke("blue");
			noFill();push();
			arc(mouseX,mouseY,l,l,0,radians(270));pop();
			line(mouseX,mouseY, mouseX, mouseY-l);
			translate(mouseX, mouseY-l);
		}
	}
}


function generate(){
	len *= .5;
	var nextSentence = "";
	for (var i = 0; i < sentence.length; i++){
		var current = sentence.charAt(i);
		var found = false;
		for (var j = 0; j < rules.length; j++ ){
			if (current == rules[j].a){
				found = true;
				nextSentence += rules[j].b;
				break;
			}
		}
		if (!found){
			nextSentence += current;
		}
	}
	sentence = nextSentence;
	// createP(sentence);
	turtle();
}
