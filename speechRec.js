
let lang = navigator.language || 'en-US';
let speechRec;
let continuous = true;
let interim = true;

function setup(){
  noCanvas();

  speechRec = new p5.SpeechRec(lang, speechReady);
  speechRec.continuous = true;
  speechRec.interimResults = false;
  speechRec.start();


}

function speechReady(){
  if(speechRec.resultValue){
    createP(speechRec.resultString);
  }
  console.log(speechRec);
}



function draw(){


}
