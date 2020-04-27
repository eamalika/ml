


var lines, markov, data1, data2;
var paragraph;
function preload() {

 data1 = loadStrings('txt/twitter.txt');
 data2 = loadStrings('txt/1984.txt');
}

function setup() {

 noCanvas();
 textFont('times', 16);
 textAlign(LEFT);

 lines = ["click to generate!"];

 // create a markov model w' n=4
 markov = new RiMarkov(4);

 // load text into the model
 markov.loadText(data1.join(' '));
 markov.loadText(data2.join(' '));
 paragraph = createP();
 drawText();
}

function drawText() {
 paragraph.html(lines);
}

function mouseClicked() {

 x = y = 50;
 lines = markov.generateSentences(10);
 drawText();
}
