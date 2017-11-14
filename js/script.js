
var model = {
    currentCat: null,
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
        }
    ]
};

var octopus = {
    init: function(){
        model.currentCat = model.cats[0];
        
        catListView.init();
        catView.init();
    },
    
    getCurrentCat: function(){
        return model.currentCat;
    },
    
    getCats: function(){
        return model.cats;
    },
    
    setCurrentCat: function(cat){
        model.currentCat = cat;
    },
    
    incrementCounter: function(){
        model.currentCat.count++;
        catView.render();
    }
    
};

var catView = {

    init: function() {
        
        this.catNameElem = document.getElementById('name');
        this.catImageElem = document.getElementById('cat-pic');
        this.countElem = document.getElementById('counter');

        this.catImageElem.addEventListener('click', function(){
            octopus.incrementCounter();
        });

        this.render();
    },

    render: function() {
        var currentCat = octopus.getCurrentCat();
        this.countElem.textContent = currentCat.count;
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = currentCat.imgUrl;
    }
};

var catListView = {

    init: function() {
        this.catListElem = document.getElementById('catlist');
        this.render();
    },

    render: function() {
        var cat, elem, i;
        var cats = octopus.getCats();

        this.catListElem.innerHTML = '';

        for (i = 0; i < cats.length; i++) {
            cat = cats[i];

            elem = document.createElement('li');
            pic = document.createElement('img');
            pic.src = cat.imgUrl;
            pic.classList.add('smallpic')
            elem.appendChild(pic);

            elem.addEventListener('click', (function(catCopy) {
                return function() {
                    octopus.setCurrentCat(catCopy);
                    catView.render();
                };
            })(cat));

            this.catListElem.appendChild(elem);
        }
    }
};

octopus.init();