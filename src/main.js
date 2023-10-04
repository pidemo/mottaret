import './styles/style.css'

var currentDate = new Date();
var currentMonth = currentDate.getMonth() + 1; // January is 0
let isSummer;

  if (currentMonth >= 3 && currentMonth <= 9) {
        // Show elements for March to September included
        isSummer = true;
    } else {
        // Show elements for October to March
        isSummer = false;
    };
// Season Switcher
let seasonSwitches = document.querySelectorAll('.season_switcher');

if (isSummer) {
    seasonSwitches.forEach(function(element) {
        element.classList.add('is-summer');
        element.setAttribute("data-current-season", "summer");
    });
} else {
    seasonSwitches.forEach(function(element) {
        element.classList.remove('is-summer');
        element.setAttribute("data-current-season", "winter");
    });
};


let summerStuff = document.querySelectorAll('[data-season="summer"]');
let winterStuff = document.querySelectorAll('[data-season="winter"]');

// initial show/hide elements based on current season
if (isSummer) {
    summerStuff.forEach(function(element) {
        element.classList.remove('is-hidden');
    });
    winterStuff.forEach(function(element) {
    		element.classList.add('is-hidden');
    });
} else {
    summerStuff.forEach(function(element) {
        element.classList.add('is-hidden');
    });
    winterStuff.forEach(function(element) {
    		element.classList.remove('is-hidden');
    });
};

for (var i = 0; i < seasonSwitches.length; i++) {
    seasonSwitches[i].addEventListener('click', function() {
        
        // add or remove is-summer class on all switchers
        seasonSwitches.forEach(function(element) {
                element.classList.toggle('is-summer');
                //element.setAttribute("data-current-season", "summer");
        });
        //console.log('before value reset');
        //let isSummer = true;
        //console.log('after value reset');
        // switch visibility on all seasonal items
        summerStuff.forEach(function(element) {
            element.classList.toggle('is-hidden');
        });
        winterStuff.forEach(function(element) {
            element.classList.toggle('is-hidden');
        });
        console.log(isSummer);
    });
};