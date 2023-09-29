quick_draw_data_set=["aircraft carrier","airplane","alarm clock","ambulance","angel","animal migration","ant","anvil","apple","arm","asparagus","axe","backpack","banana","bandage","barn","baseball","baseball bat","basket","basketball","bat","bathtub","beach","bear","beard","bed","bee","belt","bench","bicycle","binoculars","bird","birthday cake","blackberry","blueberry","book","boomerang","bottlecap","bowtie","bracelet","brain","bread","bridge","broccoli","broom","bucket","bulldozer","bus","bush","butterfly","cactus","cake","calculator","calendar","camel","camera","camouflage","campfire","candle","cannon","canoe","car","carrot","castle","cat","ceiling fan","cello","cell phone","chair","chandelier","church","circle","clarinet","clock","cloud","coffee cup","compass","computer","cookie","cooler","couch","cow","crab","crayon","crocodile","crown","cruise ship","cup","diamond","dishwasher","diving board","dog","dolphin","donut","door","dragon","dresser","drill","drums","duck","dumbbell","ear", "elbow","elephant","envelope","eraser","eye","eyeglasses","face","fan","feather","fence","finger","fire hydrant","fireplace","firetruck","fish","flamingo","flashlight","flip flops","floor lamp","flower","flying saucer","foot","fork","frog","frying pan","garden","garden hose","giraffe","goatee","golf club","grapes","grass","guitar","hamburger","hammer","hand","harp","hat","headphones","hedgehog","helicopter","helmet","hexagon","hockey puck","hockey stick","horse","hospital","hot air balloon","hot dog","hot tub","hourglass","house","house plant","hurricane","ice cream","jacket","jail","kangaroo","key","keyboard","knee","knife","ladder","lantern","laptop","leaf","leg","light bulb","lighter","lighthouse","lightning","line","lion","lipstick","lobster","lollipop","mailbox","map","marker","matches","megaphone","mermaid","microphone","microwave","monkey","moon","mosquito","motorbike","mountain","mouse","moustache","mouth","mug","mushroom","nail","necklace","nose","ocean","octagon","octopus","onion","oven","owl","paintbrush","paint can"];
random_no=Math.floor(Math.random()*quick_draw_data_set.length+1);
sketch=quick_draw_data_set[random_no];
document.getElementById("sketch").innerHTML="Sketch to be drawn:" + sketch;
timer_counter=0;
timer_check="";
drawn_sketch="";
answer="";
score=0;
function setup(){
    canvas=createCanvas(400,300);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
}

function preload(){
    classifier=ml5.imageClassifier("DoodleNet");
}

function draw(){
    strokeWeight(10);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY);
    }

}
function classifyCanvas(){
    classifier.classify(canvas, gotResult);
}

function gotResult(error, result){
    if (error){
        console.log(error);
    }
    console.log(result);
    drawn_sketch=result[0].label;
    document.getElementById("name").innerHTML="Your sketch: "+result[0].label;
    document.getElementById("confidence").innerHTML="Confidence:"+Math.round(result[0].confidence*100)+"%";
}

function check_sketch(){
    timer_counter++;
    document.getElementById("time").innerHTML="Timer:"+timer_counter;
    console.log(timer_counter);
    if(timer_counter>500){
        timer_counter=0;
        timer_check="completed";
    }
    if(timer_check=="completed" || answer=="set"){
        timer_check="";
        answer="";
        updateCanvas();
    }
}

function updateCanvas(){
    background("white");
    random_no=Math.floor(Math.random()*quick_draw_data_set.length+1);
    sketch=quick_draw_data_set[random_no];
    document.getElementById("sketch").innerHTML="Sketch to be drawn:" + sketch;
}

check_sketch()
    if(drawn_sketch==sketch){
        score++;
        document.getElementById("score").innerHTML="Score:"+score;
        answer=-"set";
    }
