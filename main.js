objectDetector= ""; 
video = ""; 
objects = []; 
Status = "";
 sound = "";
 img = "";
function preload()
{
sound = loadSound('alarm.mp3');
 } 


 function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting Objects"; 
 }
     function setup() {
        canvas = createCanvas(380, 380); 
        canvas.center(); 
        video = createCapture(VIDEO);
        video.size(380,380);
        video.hide();
        }

        function modelLoaded() {
            console.log("Model Loaded!")
            Status = true;
            objectDetector.detect(video, gotResult);
        }

        function gotResult(error, results) {
            if (error){
                console.log(error);
            }
            console.log(results);
            objects = results;
        }

        function draw(){
            image(video, 0, 0, 380, 380,);
           if(status != )
           {
            r = random(255);
            g = random(255);
            b = random(255);
            objectDetector.detect(video, gotResult);
            for (i = 0; 1 < objects.length; i++)
            {
                document.getElementById("status").innerHTML = "Status : Object Detected";
                document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : " + objects.length;
                fill(r,g,b);
                percent = floor(objects[i].confidence * 100);
                text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
                noFill();
                stroke(r,g,b);
                rect(objects[i].x ,objects[i].y, objects[i].width, objects[i].height );

                if(Status == "person")
                {
                    document.getElementById("number_of_objects").innerHTML = "Baby Found";
                    console.log("stop");
                    sound.stop();
                }
                else{
                    document.getElementById("number_of_objects").innerHTML = "Baby Not Found";
                    console.log("play");
                    sound.play();
                }


            }

            if(objects.length == 0)
            {
              document.getElementById("number_of_objects").innerHTML = "Baby Not Found";
              console.log("play"); 
              s.play();
            }
           }
        }