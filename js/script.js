var count = [0,0,0,0,0];

var names = ["Bob","Dylan","Maria","Abraham","ZebroWiskey"];

var catList = document.getElementsByClassName("thumbnail");

var currentCat = 0;
for (let i = 0; i < catList.length; i++) {
    var cat = catList[i];
    cat.addEventListener('click', function() {
        document.getElementById('cat-pic').src = "images/cat"+(i+1)+".jpg";
        document.getElementById('name').innerHTML = names[i];
        document.getElementById('counter').innerHTML = count[i]
        currentCat = i;
        
    });   
    
}

$('#cat-pic').click(function(e) {
        count[currentCat] += 1;
        document.getElementById('counter').innerHTML = count[currentCat];
});