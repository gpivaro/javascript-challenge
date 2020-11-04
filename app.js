///////////////////////////////////////////////////////////////////////////////
/* Create a basic HTML web page. Using the UFO dataset provided in the form of 
an array of JavaScript objects, write code that appends a table to your web page 
and then adds new rows of data for each UFO sighting. Make sure you have a column
for date/time, city, state, country, shape, and comment at the very least.*/
///////////////////////////////////////////////////////////////////////////////

// Get a reference to the table body
var tbody = d3.select("tbody");

// Step 1: Loop Through `data` and log each ufo observation object
data.forEach(ufo => {
  //console.log(ufo);

  // Step 2:  Use d3 to append one table row `tr` for each ufo observation object
  var row = tbody.append("tr");

  // Step 3:  Use `Object.entries` to log each ufo observation value
  Object.entries(ufo).forEach(([key, value]) => {
    //console.log(key, value);

    // Step 4: Use d3 to append 1 cell per ufo observation value (Date, City, State, Country, Shape, Duration, Comments)
    var cell = row.append("td");

    // Step 5: Use d3 to update each cell's text with
    // ufo observation values (Date, City, State, Country, Shape, Duration, Comments)
    cell.text(value);
  });
});

///////////////////////////////////////////////////////////////////////////////////

// Assign the data from `data.js` to a descriptive variable
var ufos = data;

// Getting a reference to the input element on the page with the id property set to 'input-field'
var inputField = d3.select("#datetime");

/*
// Input fields can trigger a change event when new text is entered.
inputField.on("change", function() {
  var newText = d3.event.target.value;
  console.log(newText);
});
*/


// Complete the form handler for the form
inputField.on("change", function() {
	

  // Select the input element and get the raw HTML node
  var newText = d3.event.target.value;
  console.log(newText);

  // Get the value property of the input element

  // Use the form input to filter the data by blood type
  var dateSelected = ufos.filter(ufo => {ufo.datetime === newText});
  
  console.log(dateSelected)



  
});
