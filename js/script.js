
var model = {
    cats: [
        {
            count: 0,
            name: "Bob",
            imgUrl: "images/cat1.jpg"
        },
        {
            count: 0,
            name: "Dylan",
            imgUrl: "images/cat2.jpg"
        },
        {
            count: 0,
            name: "Maria",
            imgUrl: "images/cat3.jpg"
        },
        {
            count: 0,
            name: "Abraham",
            imgUrl: "images/cat4.jpg"
        },
        {
            count: 0,
            name: "ZebroWiskey",
            imgUrl: "images/cat5.jpg"
        }]
};

//initial cat
document.getElementById('cat-pic').src = model.cats[0].imgUrl;
document.getElementById('name').innerHTML = model.cats[0].name;
document.getElementById('counter').innerHTML = model.cats[0].count;


var catList = document.getElementsByClassName("thumbnail");

var currentCat = 0;
for (let i = 0; i < catList.length; i++) {
    var cat = catList[i];
    cat.addEventListener('click', function() {
        document.getElementById('cat-pic').src = model.cats[i].imgUrl;
        document.getElementById('name').innerHTML = model.cats[i].name;
        document.getElementById('counter').innerHTML = model.cats[i].count;
        currentCat = i;
        
    });   
    
}

$('#cat-pic').click(function(e) {
        model.cats[currentCat].count += 1;
        document.getElementById('counter').innerHTML = model.cats[currentCat].count;
});