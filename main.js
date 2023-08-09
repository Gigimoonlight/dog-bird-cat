let img="";
let stat="";
let obj=[];
function setup(){
    canvas=createCanvas(640, 420);
    canvas.center();

    detect=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML= "Status: Loading";
}
function preload(){
    img1=loadImage("dog_cat.jpg");
    img2=loadImage("passarinho.jpg");
    img3=loadImage("gato.png");
    img=img1;
}
function dog(){
    img=img1;
    draw();
    modelLoaded();


}
function make(){
    img=img3;
    draw();
    modelLoaded();

}
function water(){
    img=img2;
    draw();
    modelLoaded();
}

function draw(){
    image(img, 0, 0, 640, 420);

    // fill(184, 134, 11);
    // text("Dog", 45, 75 );

    // noFill();
    // stroke(184, 134, 11);
    // rect(40, 60, 300, 350);

    // fill(139, 69, 19); 
    // text("Cat", 300, 75);

    // noFill();
    // stroke(139, 69, 19);
    // rect(295, 60, 300, 350);

    if(stat!=""){
        for(i=0; i<obj.length; i++){
            document.getElementById("status").innerHTML= "Status: Detected";
            let porce=floor(obj[i].confidence*100);
            fill("blue");
            text(obj[i].label+" "+porce+"%", obj[i].x, obj[i].y);
            noFill();
            stroke("blue");
            rect(obj[i].x, obj[i].y, obj[i].width, obj[i].height);

        }
    }
}

function modelLoaded(){
    console.log(":)");
    stat=true;
    detect.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    console.log(results);
    obj=results;
}