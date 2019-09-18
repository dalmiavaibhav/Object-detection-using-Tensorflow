const webcamElement = document.getElementById('webcam');
const start = document.querySelector(".bt2");
const load = document.querySelector(".bt3");
const detect = document.querySelector(".bt4");
const msg = document.querySelector(".msg");
const canvas = document.querySelector('canvas');
var mod = new Object();
canvas.width = 600;
canvas.height = 400;
var c = canvas.getContext('2d');
c.strokeStyle = "#FF0000";

async function setupWebcam() {
  return new Promise((resolve, reject) => {
    const navigatorAny = navigator;
    navigator.getUserMedia = navigator.getUserMedia ||
        navigatorAny.webkitGetUserMedia || navigatorAny.mozGetUserMedia ||
        navigatorAny.msGetUserMedia;
    if (navigator.getUserMedia) {
      navigator.getUserMedia({video: true},
        stream => {
          webcamElement.srcObject = stream;
          webcamElement.addEventListener('loadeddata',  () => resolve(), false);
        },
        error => reject());
    } else {
      reject();
    }
  });
}

async function app(){  
  while(true){
    mod.detect(webcamElement).then((results) => {
      // console.log(results);
      if(results.length == 0){
        msg.innerHTML = "NA";
        }
      else{
      results.forEach( result => {
      // console.log(webcamElement);
      // webcamElement.print();
      // console.log(result); 
      c.strokeRect(result.bbox[0],result.bbox[1],result.bbox[2],result.bbox[3]);
      const name = result.class;
      msg.innerHTML = `${name}`;
      });
      }
      
    });
    
    await tf.nextFrame();
  }
  }

start.addEventListener('click', (e) =>{
 setupWebcam();
 console.log("Webcam Started");
});

load.addEventListener('click', (e) =>{
  cocoSsd.load().then((model) => {
    mod = Object.assign(model);
  });
  // console.log(mod);
  console.log("Modël loaded");
  
});

detect.addEventListener('click', (e) =>{

  app();

});

webcamElement.addEventListener('mouseover', function() {
  var $this = this; //cache
  (function loop() {
    if (!$this.paused && !$this.ended) {
      c.drawImage($this, 0, 0);
      setTimeout(loop, 1000 / 30); // drawing at 30fps
    }
  })();
}, 0);