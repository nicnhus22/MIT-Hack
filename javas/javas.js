

xAngle =0;

var faces = ["1","2","3","4"];
var current_face = 0;

var patt = /\w+\s\w+/;

document.addEventListener('keydown', function(e){

	switch(e.keyCode){

        case 37: // left
            leftPressed();
        break;
        case 39: // right
            rightPressed();
        break;
        case 13: // If Enter is pressed
            enterPresed();
        break;
    };


}, false);




function updateLabels(){

    var label_left = document.getElementById('left_name');
    var label_right = document.getElementById('right_name');

    var word = document.getElementById('search_bar');

    switch(faces[current_face]){

        case "1": // Youtube
            label_left.innerHTML = "Wunderground";
            label_right.innerHTML = "SoundCloud";
            word.value = "";
            word.placeholder = "Enter a word to find a related video...";
        break;
        case "2": // Wunderground
            label_left.innerHTML = "Twitter";
            label_right.innerHTML = "Youtube";
            word.value = "";
            word.placeholder = "Enter a city to find the weather...";
        break;
        case "3": // Twitter
            label_left.innerHTML = "SoundCloud";
            label_right.innerHTML = "Wunderground";
            word.value = "";
             word.placeholder = "Enter a hashtag to find all tweets...";
        break;
        case "4": // Soundcloud
            label_left.innerHTML = "Youtube";
            label_right.innerHTML = "Twitter";
            word.value = "";
            word.placeholder = "Enter a word to find the related songs...";
        break;
    }
    
}


function sendRequests(word_input, face){

    switch(face){

        case "1" :
            alert('not implemented yet');
        break;
        case "2" :
            $('#cube figure').css("animation","explode 2s");
            setTimeout(function(){$('#cube figure').css("animation","implode 2s")},2000);

            $('#cube figure').css("-moz-animation","explode 2s");
            setTimeout(function(){$('#cube figure').css("-moz-animation","implode 2s")},2000);

            $('#cube figure').css("-ms-animation","explode 2s");
            setTimeout(function(){$('#cube figure').css("-ms-animation","implode 2s")},2000);

            word_input = word_input.split(",");

            sendWeatherRequest(word_input[0], word_input[1]);
     
        break;
        case "3" :
            alert('not implemented yet');
        break;
        case "4" :
            $('#cube figure').css("animation","explode 2s");
            setTimeout(function(){$('#cube figure').css("animation","implode 2s")},2000);

            $('#cube figure').css("-moz-animation","explode 2s");
            setTimeout(function(){$('#cube figure').css("-moz-animation","implode 2s")},2000);

            $('#cube figure').css("-ms-animation","explode 2s");
            setTimeout(function(){$('#cube figure').css("-ms-animation","implode 2s")},2000);
            sendSoundCloudRequest(word_input);
        break;
    }

}


function enterPresed(){
    var word = document.getElementById('search_bar');

    if(word.value == ""){
        word.style.color = "red";
        word.placeholder = "Cannot leave bar empty";
        return false;
    }else{
        word.style.color = "black";
        word.placeholder = "Cannot leave bar empty";
        
        sendRequests(word.value, faces[current_face]);   
    }
}

function rightPressed(){
    xAngle += 90;
    if(current_face == 3)
        current_face = 0;
    else
        current_face++;

    updateLabels();

    document.getElementById('cube').style.transform = "translateZ(-100px) rotateY("+xAngle+"deg)";
    document.getElementById('cube').style.MsTransform = "translateZ(-100px) rotateY("+xAngle+"deg)";
    document.getElementById('cube').style.WebkitTransform = "translateZ(-100px) rotateY("+xAngle+"deg)";
}

function leftPressed(){
    xAngle -= 90;
    if(current_face == 0)
        current_face = 3;
    else
        current_face--;

    updateLabels();

    document.getElementById('cube').style.transform = "translateZ(-100px) rotateY("+xAngle+"deg)";
    document.getElementById('cube').style.MsTransform = "translateZ(-100px) rotateY("+xAngle+"deg)";
    document.getElementById('cube').style.WebkitTransform = "translateZ(-100px) rotateY("+xAngle+"deg)";

}