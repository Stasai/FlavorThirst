// ADDING ITEMS TO START AND END OF LIST
var list = document.getElementsByTagName('ul')[0];                 // Get the <ul> element

var listItems = document.querySelectorAll('li');                   // All <li> elements

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var i;                                                             // Counter variable
for (i = 0; i < listItems.length; i++) {                           // Loop through elements
  listItems[i].className = 'flavor';                                 // Change class to cool
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h4');                        // h4 element
var headingText = heading.firstChild.nodeValue;                    // h4 text
var totalItems = listItems.length;                                 // No. of <li> elements
var newHeading =  headingText + '<span>' + " " + totalItems + '</span>'; // Content
heading.innerHTML = newHeading;                                    // Update h2 using innerHTML (not textContent) because it contains markup