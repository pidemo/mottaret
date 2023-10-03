import './styles/style.css'

console.log('code is live');

document.addEventListener("DOMContentLoaded", function() {
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth() + 1; // January is 0

    if (currentMonth >= 3 && currentMonth <= 9) {
        // Show elements for January to June
        isSummer = true;
    } else {
        // Show elements for July to December
        isSummer = false;
    };
    
    console.log(isSummer);
    
    
    
// Season Switcher
let seasonSwitches = document.querySelectorAll('.season_switcher');
if (isSummer) {
	seasonSwitches.forEach.classList.add(".is-summer")
};
let summerStuff = document.querySelectorAll('[data-season="summer"]');
let winterStuff = document.querySelectorAll('[data-season="winter"]');

// to remove
let initialSeason = seasonSwitches[0].getAttribute('data-current-season');
let seasonSwitch = document.getElementById('season-switch');

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

// change visibility on click
for (var i = 0; i < seasonSwitches.length; i++) {
	seasonSwitches[i].addEventListener('click', function() {
		// get current season
    let currentSeason = seasonSwitch.getAttribute('data-current-season');
    
    // switch visibility on all seasonal items
    summerStuff.forEach(function(element) {
      element.classList.toggle('is-hidden');
    });
    winterStuff.forEach(function(element) {
    	element.classList.toggle('is-hidden');
    });
    
    //switch current season
    if (currentSeason == "summer") {
    	seasonSwitch.setAttribute("data-current-season", "winter");
    } else {
    	seasonSwitch.setAttribute("data-current-season", "summer");
    };
    
 });
};
    
});