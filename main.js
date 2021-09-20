Webcam.set({
  width:250 ,
  height:200 ,
    image_format: 'png' ,
    png_quality:90 
});

camera = document.getElementById("camera") ;

Webcam.attach('#camera');

function take_snapshot(){
  console.log("hi");
  Webcam.snap(function(data_uri){
     document.getElementById("result").innerHTML = '<img="captured_img" src="'+data_uri+'"/>' ; 
  });
}

console.log("ml5",ml5.version);

recognize = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Fm-Icpq5L/",ModelLoaded);

function ModelLoaded() {
    console.log("LOADED !!")
}

function verify(){
  img = document.getElementById("captured_img");
  recognize.classify(img, gotresult);
}

function gotresult(error, results){
  if(error){
    console.error("error");
    document.getElementById("error").value = "error"
  }
  else{
    console.log(results);
    document.getElementById("object_name").innerHTML = results[0]
  }
}