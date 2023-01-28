var headingName = ["My cuties and me!", "Relaxing time!", "Miao~","Kiss my lovely dog!","Look~","Hi~ My cutie cat!","My cuties and me!","My cuties and me!","My cuties and me!","My cuties and me!","My cuties and me!","Kiss my lovely dog!"];
var poptext = ["Happy time with cuties!", "Happy time with cuties!","Happy time with cuties!","Happy time with cuties!","Happy time with cuties!","Happy time with cuties!","Happy time with cuties!","Happy time with cuties!","Happy time with cuties!","Happy time with cuties!","Happy time with cuties!","Happy time with cuties!"];
var popupheading = [];
var popuptext = [];
var popupClose =[];
var whole = [];
var popupbox = [];
var hOpenTag = "<h3 id='popupH3'>";
var hCloseTag = "</h3>";
var pOpenTag = "<p id='popupP'>";
var pCloseTag = "</p>";
var btnOpenTag = "<button id='popupBtn'>";
var btnCloseTag = "</button>";

for (var i=0; i<12; i++){
    popupheading = hOpenTag + headingName[i] + hCloseTag;
    popuptext = pOpenTag + poptext[i] + pCloseTag;
    popupClose = btnOpenTag + "Close" + btnCloseTag;
    whole = popupheading + popuptext + popupClose;
    popupbox.push(whole);
}

// var span = document.getElementsById("popupBtn")[0];
// span.onclick = function(){
//     popupbox.style.display = "none";
// }

document.getElementById("popupBox").innerHTML = popupbox.join("");