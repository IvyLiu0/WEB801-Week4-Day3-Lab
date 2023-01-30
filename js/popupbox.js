// Get the modal
var modal = document.getElementById("popupBox");
        
// Get the image and insert it inside the modal - use its "alt" text as a caption
document.getElementById("album").addEventListener("click",popupboxx);
function popupboxx(){
  
    // var headingName = ["My cuties and me!", "Relaxing time!", "Miao~","Kiss my lovely dog!","Look~","Hi~ My cutie cat!","My cuties and me!","My cuties and me!","My cuties and me!","My cuties and me!","My cuties and me!","Kiss my lovely dog!"];
    // var poptext = ["Happy time with cuties!", "Happy time with cuties!","Happy time with cuties!","Happy time with cuties!","Happy time with cuties!","Happy time with cuties!","Happy time with cuties!","Happy time with cuties!","Happy time with cuties!","Happy time with cuties!","Happy time with cuties!","Happy time with cuties!"];
    var popupheading = [];
    var popuptext = [];
    var popupClose =[];
    var whole = [];
    var popupbox = [];
    var hOpenTag = "<div id='popupContent'><h3 id='popupH3'>";
    var hCloseTag = "</h3>";
    var pOpenTag = "<p id='popupP'>";
    var pCloseTag = "</p>";
    var btnOpenTag = "<button onclick = 'closeBtn()' id='popupBtn'>";
    var btnCloseTag = "</button></div>";

for (var i=0; i<1; i++){
    popupheading = hOpenTag + "My cutie friends" + hCloseTag;
    popuptext = pOpenTag + "Thank you for visiting!" + pCloseTag;
    popupClose = btnOpenTag + "X" + btnCloseTag;
    whole = popupheading + popuptext + popupClose;
    popupbox.push(whole);
}

// var span = document.getElementsById("popupBtn")[0];
// span.onclick = function(){
//     popupbox.style.display = "none";
// }

document.getElementById("popupBox").innerHTML = popupbox.join("");
modal.style.display = "block";
}

// function openDes(){
    
// }
// Get the <span> element that closes the modal
// document.getElementById("popupBtn").addEventListener("click",popupclose);
// function popupclose (){
//     var span = document.getElementsById("popupBtn");

//     // When the user clicks on <span> (x), close the modal
//     span.onclick = function() { 
//     modal.style.display = "none";
// }
// }

function closeBtn(){
    modal.style.display="none";
}