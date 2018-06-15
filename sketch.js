var mouse;
var w = window.innerWidth;
var h = window.innerHeight;
var axiom = "FBFBFBFB";
var lf = 40;
var lb=20/Math.sqrt(2);
var sentence = axiom;
var angle;

// variables: FAB
// axiom: FBFBFBFB
// rules: A->AFBFA
//        B->AFBFBFBFA

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
	frameRate(15);
	//createCanvas(400,400);
    createCanvas(w,h);
	background('#151c19');
	turtle();
	angle = radians(45);
	for(var i=0;i<1;i++){
	generate();}
}

function turtle(){
	resetMatrix();
	translate(width/2, height/2);
	for (var i = 0; i < sentence.length; i++){
		var current = sentence.charAt(i);
		if (current == "F"){
			stroke("green");
			line(mouseX,mouseY, mouseX, mouseY-lf);
			translate(mouseX, mouseY-lf);
		}
		else if (current == "A"){
			stroke("blue");
			for(var a=0;a>radians(-90);a-=0.05){
				var r=lf;
				var x=r*cos(a);
				var y=r*sin(a);
				//point(x-r,y);
			}
			translate(x-r,y);
			rotate(radians(-90));
		}
		else if (current == "B"){
			stroke("red");
			line(mouseX,mouseY, mouseX, mouseY-lb);
			translate(mouseX, mouseY-lb);
			for(var a=0;a>radians(-270);a-=0.05){
				var r=lb;
				var x=r*cos(a);
				var y=r*sin(a);
				point(x-r,y);
			}
			translate(x,y);
			rotate(radians(-270));
			line(x,y, x, y-lb);
			translate(x, y-lb);
		}
	}
}


function generate(){
	//len *= .5;
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
