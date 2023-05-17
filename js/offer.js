/* The script is placed inside an immediately invoked function expression
   which helps protect the scope of variables */

(function() {

  // PART ONE: CREATE PLAN OBJECT AND WRITE OUT THE OFFER DETAILS

  // Create a plan object using object literal syntax
  var plan = {
    name: 'Premium - 18% off',
    monthRate: 26, // Amount in dollars
    discount: 18,  // Percentage discount
    offerPrice: function() {
      var offerRate = this.monthRate * ((100 - this.discount) / 100);
      return offerRate;
    }
  };

  // Write out the plan name, standard rate, and the special rate
  var planName, monthRate, specialRate;                    // Declare variables

  planName = document.getElementById('planName');        // Get elements
  monthRate = document.getElementById('monthRate');
  specialRate = document.getElementById('specialRate');

  planName.textContent = plan.name;                      // Write plan name
  monthRate.textContent =  '$' + plan.monthRate.toFixed(2); // Write month rate
  specialRate.textContent = '$' + plan.offerPrice();      // Write offer price


  // PART TWO: CALCULATE AND WRITE OUT THE EXPIRY DETAILS FOR THE OFFER
  var expiryMsg; // Message displayed to users
  var today;     // Today's date
  var elEnds;    // The element that shows the message about the offer ending

  function offerExpires(today) {
    // Declare variables within the function for local scope
    var weekFromToday, day, date, month, year, dayNames, monthNames;

    // Add 7 days time (added in milliseconds)
    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

    // Create arrays to hold the names of days / months
    dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // Collect the parts of the date to show on the page
    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();

    // Create the message
    expiryMsg = 'Offer expires next ';
    expiryMsg += day + ' <br />(' + month + ' ' + date + ' ' + year + ')';
    return expiryMsg;
  }

  today = new Date();                             // Put today's date in variable
  elEnds = document.getElementById('offerEnds');  // Get the offerEnds element
  elEnds.innerHTML = offerExpires(today);         // Add the expiry message

// Finish the immediately invoked function expression
}());