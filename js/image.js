var photos = []; //declare an empty array to store image element
        var fileName = []; //declare an empty element to store image file name
        var imageList = []; //decalre an empty array to store html list that contain an image
        var image; //declare an empty variable to store the assembled image list codes
        var openList1 = "<li id='photo"; //decalre a variable to contain open list tag
        var openList2 = "'>";
        var closeList = "</li>"; // declare a variable to contain close list tag
        var captions = ["My cuties and me!", "Relaxing time!", "Miao~","Kiss my lovely dog!","Look~","Hi~ My cutie cat!","My cuties and me!","My cuties and me!","My cuties and me!","My cuties and me!","My cuties and me!","Kiss my lovely dog!"];
        // var captionName = [];
        var openCaptionTag = "<p class='captionName'>";
        var closeCaptionTag = "</p>";
        // var description;
        var descText = ["Happy time with cuties!", "Happy time with cuties!","Happy time with cuties!","Happy time with cuties!","Happy time with cuties!","Happy time with cuties!","Happy time with cuties!","Happy time with cuties!","Happy time with cuties!","Happy time with cuties!","Happy time with cuties!","Happy time with cuties!"];
        var openDescTag = "<p class='description'>";
        var closeDescTag = "</p>";

        //create a loop to create 6 images starting with index of 0
        for (var i=0; i<12; i++){
            fileName.push("gallery"+(i+1)); //create image file name and store in the array
            // captionName.push("Me and my cuties " + (i+1));
            photos.push("<img src='images/gallery/"+fileName[i]+".jpg'>");// assemble file name into image element and store in an array
            // captions = openCaptionTag + closeCaptionTag;
            // description= openDescTag + descText +closeDescTag;
            image = openList1 + (i+1) + openList2 + photos[i] + openCaptionTag + captions[i]+ closeCaptionTag + openDescTag + descText[i] +closeDescTag  + closeList; //assemble image element from array with list elements and store in a variable
            imageList.push(image); //store (push) the assembled list codes into an array
        }
        


        //display all six image codes stored in the array
        document.getElementById("album").innerHTML=imageList.join("");

        


        // // Get the modal
        // var modal = document.getElementById("popupBox");
        
        // // Get the image and insert it inside the modal - use its "alt" text as a caption
        // document.getElementById("album").addEventListener("click",popupboxx);
        // function popupboxx(){
          
        //     var headingName = ["My cuties and me!", "Relaxing time!", "Miao~","Kiss my lovely dog!","Look~","Hi~ My cutie cat!","My cuties and me!","My cuties and me!","My cuties and me!","My cuties and me!","My cuties and me!","Kiss my lovely dog!"];
        //     var poptext = ["Happy time with cuties!", "Happy time with cuties!","Happy time with cuties!","Happy time with cuties!","Happy time with cuties!","Happy time with cuties!","Happy time with cuties!","Happy time with cuties!","Happy time with cuties!","Happy time with cuties!","Happy time with cuties!","Happy time with cuties!"];
        //     var popupheading = [];
        //     var popuptext = [];
        //     var popupClose =[];
        //     var whole = [];
        //     var popupbox = [];
        //     var hOpenTag = "<h3 id='popupH3'>";
        //     var hCloseTag = "</h3>";
        //     var pOpenTag = "<p id='popupP'>";
        //     var pCloseTag = "</p>";
        //     var btnOpenTag = "<button id='popupBtn'>";
        //     var btnCloseTag = "</button>";

        // for (var i=0; i<12; i++){
        //     popupheading = hOpenTag + headingName[i] + hCloseTag;
        //     popuptext = pOpenTag + poptext[i] + pCloseTag;
        //     popupClose = btnOpenTag + "Close" + btnCloseTag;
        //     whole = popupheading + popuptext + popupClose;
        //     popupbox.push(whole);
        // }

        // // var span = document.getElementsById("popupBtn")[0];
        // // span.onclick = function(){
        // //     popupbox.style.display = "none";
        // // }

        // document.getElementById("popupBox").innerHTML = popupbox.join("");
        // modal.style.display = "block";
        // }

        // // function openDes(){
            
        // // }
        // // Get the <span> element that closes the modal
        // var span = document.getElementsById("popupBtn");
        
        // // When the user clicks on <span> (x), close the modal
        // span.onclick = function() { 
        //   modal.style.visibility = "hidden";
        // }