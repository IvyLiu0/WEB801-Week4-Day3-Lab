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