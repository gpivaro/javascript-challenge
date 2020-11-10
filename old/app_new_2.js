// Level 1: Automatic Table and Date Search

///////////////////////////////////////////////////////////////////////////////
/* Create a basic HTML web page. Using the UFO dataset provided in the form of 
an array of JavaScript objects, write code that appends a table to your web page 
and then adds new rows of data for each UFO sighting. Make sure you have a column
for date/time, city, state, country, shape, and comment at the very least.*/
///////////////////////////////////////////////////////////////////////////////

// Get a reference to the table body
var tbody = d3.select("tbody");
var tbody_old = tbody

// Step 1: Loop Through `data` and log each ufo observation object
data.forEach(ufo => {

    // Step 2:  Use d3 to append one table row `tr` for each ufo observation object
    var row = tbody.append("tr");

    // Step 3:  Use `Object.entries` to log each ufo observation value
    Object.entries(ufo).forEach(([key, value]) => {

        // Step 4: Use d3 to append 1 cell per ufo observation value (Date, City, State, Country, Shape, Duration, Comments)
        var cell = row.append("td");

        // Step 5: Use d3 to update each cell's text with
        // ufo observation values (Date, City, State, Country, Shape, Duration, Comments)
        cell.text(value);
    });
});


///////////////////////////////////////////////////////////////////////////////////
/* Use a date form in your HTML document and write JavaScript code that will listen 
for events and search through the date/time column to find rows that match user input.*/
///////////////////////////////////////////////////////////////////////////////////

// Assign the data from `data.js` to a descriptive variable
var ufos = data;

// Getting a reference to the input element on the page with the id property set to 'datetime'
var inputField = d3.select("#datetime");

// Complete the form handler for the form
inputField.on("change", function () {
    // Remove all table rows from tbody (update table)
    var table = d3.select("tbody").selectAll("tr").remove()

    // Select the input element and get the raw HTML node
    var newText = d3.event.target.value;

    // Check if the data field is empty to decide how to populate the table
    if (newText === '') {
        // if the data field is empty load the how table; assign filtered data as the whole data set
        var filteredUfos = ufos;
    }
    else {
        // Use the form input to filter the data by datetime
        var filteredUfos = ufos.filter(ufo => ufo.datetime === newText);
    }

    // Step 1: Loop Through `filteredUfos` and log each ufo observation object
    filteredUfos.forEach(ufo => {

        // Step 2:  Use d3 to append one table row `tr` for each filtered observation object
        var row = tbody.append("tr");

        // Step 3:  Use `Object.entries` to log each ufo observation value
        Object.entries(ufo).forEach(([key, value]) => {

            // Step 4: Use d3 to append 1 cell per ufo observation value (Date, City, State, Country, Shape, Duration, Comments)
            var cell = row.append("td");

            // Step 5: Use d3 to update each cell's text with
            // ufo observation values (Date, City, State, Country, Shape, Duration, Comments)
            cell.text(value);
        });
    });
});


// Level 2: Multiple Search Categories

///////////////////////////////////////////////////////////////////////////////
/* Using multiple input tags and/or select dropdowns, write JavaScript code so
the user can to set multiple filters and search for UFO sightings using the
following criteria based on the table columns: date/time, city, state, country, shape */
///////////////////////////////////////////////////////////////////////////////


var updateTable = function (field) {
    // Remove all table rows from tbody (update table)
    var table = d3.select("tbody").selectAll("tr").remove()

    // Select the input element and get the raw HTML node
    var newText = d3.event.target.value;

    // Check if the data field is empty to decide how to populate the table
    if (newText === '') {
        // if the data field is empty load the how table; assign filtered data as the whole data set
        var filteredUfos = ufos;
    }
    else {
        // Use the form input to filter the data by datetime
        var filteredUfos = ufos.filter(ufo => ufo.field === newText);
    }

    // Step 1: Loop Through `filteredUfos` and log each ufo observation object
    filteredUfos.forEach(ufo => {

        // Step 2:  Use d3 to append one table row `tr` for each filtered observation object
        var row = tbody.append("tr");

        // Step 3:  Use `Object.entries` to log each ufo observation value
        Object.entries(ufo).forEach(([key, value]) => {

            // Step 4: Use d3 to append 1 cell per ufo observation value (Date, City, State, Country, Shape, Duration, Comments)
            var cell = row.append("td");

            // Step 5: Use d3 to update each cell's text with
            // ufo observation values (Date, City, State, Country, Shape, Duration, Comments)
            cell.text(value);
        });
    });
};


// Getting a reference to the input element on the page with the id property set to 'city'
var inputFieldCity = d3.select("#city");

// Complete the form handler for the form
inputFieldCity.on("change", updateTable(city));

















// Create an array with the unique date
var dates = [];
ufos.forEach(date => {
    if (dates.includes(date.datetime) === false) {
        dates.push(date.datetime);
    };
});
console.log(dates)

// Create an array with the unique cities
var cities = [];
ufos.forEach(city => {
    if (cities.includes(city.city) === false) {
        cities.push(city.city);
    };
});
console.log(cities)


// Create an array with the unique states
var states = [];
ufos.forEach(state => {
    if (states.includes(state.state) === false) {
        states.push(state.state);
    };
});
console.log(states)

// Create an array with the unique country
var countries = [];
ufos.forEach(country => {
    if (countries.includes(country.country) === false) {
        countries.push(country.country);
    };
});
console.log(countries)

// Create an array with the unique shape
var shapes = [];
ufos.forEach(shape => {
    if (shapes.includes(shape.shape) === false) {
        shapes.push(shape.shape);
    };
});
console.log(shapes)




// Clickable Dropdown

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}