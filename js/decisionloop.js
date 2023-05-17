var table = 17;             // Unit of table
var operator = 'multi'; // Type of calculation
var i = 1;                 // Set counter to 1
var shippingTax = 12		//Shipping tax
var msg = '';              // Message

if (operator === 'addition') {
  // Do addition
  while (i < 12) {
    msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
    i++;
  }
} else {
  // Do multiplication
  while (i < 11) {
    msg += i + ' month(s) ' + ' x ' + '$' + table + ' + ' + '$' + shippingTax + ' = ' + '$' + (i * table + shippingTax) + '<br />';
    i++;
  }
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;