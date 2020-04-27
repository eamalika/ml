
let txt = "I am an alligator who has a bottle and is sad.";
let button;
let lexicon;

function setup(){
  noCanvas();

  createP(txt);
  button = createButton("Process...");
  button.mousePressed(processText);
  lexicon = new RiLexicon;


}

function processText(){
 let rs = new RiString(txt);
 let words = rs.words();
 let pos = rs.pos();
 print(pos);
 let output = " ";
 for (let i = 0; i < words.length; i++){
   if(/nn.*/.test(pos[i])){
     output += lexicon.randomWord(pos[i]);
   }else{
     output += words[i];
   }

   output += " ";

 }
 createP(output);

}

function draw(){
  //add r g b to background
  background(0);


}
