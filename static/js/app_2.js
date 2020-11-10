// Level 1: Automatic Table and Date Search

///////////////////////////////////////////////////////////////////////////////
/* Create a basic HTML web page. Using the UFO dataset provided in the form of 
an array of JavaScript objects, write code that appends a table to your web page 
and then adds new rows of data for each UFO sighting. Make sure you have a column
for date/time, city, state, country, shape, and comment at the very least.*/
///////////////////////////////////////////////////////////////////////////////

/*
Define a function that perform the following:
Step 1: Loop Through `data` and log each ufo observation object
Step 2:  Use d3 to append one table row `tr` for each ufo observation object
Step 3:  Use `Object.entries` to log each ufo observation value
Step 4: Use d3 to append 1 cell per ufo observation value (Date, City, State, Country, Shape, Duration, Comments)
Step 5: Use d3 to update each cell's text with ufo observation values (Date, City, State, Country, Shape, Duration, Comments)
*/
function populateTable(dataEntry, tbodyObject) {
    // Use d3 to append one table row `tr` for each ufo observation object
    var row = tbodyObject.append("tr");

    // Use `Object.entries` to log each object's value
    Object.entries(dataEntry).forEach(([key, value]) => {

        // Step 4: Use d3 to append 1 cell per ufo observation value (Date, City, State, Country, Shape, Duration, Comments)
        var cell = row.append("td");

        // Step 5: Use d3 to update each cell's text with
        // ufo observation values (Date, City, State, Country, Shape, Duration, Comments)
        cell.text(value);
    });
};

// Define a function that populate s the table when called using the function populateTable
function updateTable(dataObject, tbodyObject) {
    dataObject.forEach(dataEntry => populateTable(dataEntry, tbodyObject));
}


// Assign the data from `data.js` to a descriptive variable
var ufos = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Call function to load the table that contains tbody with the data
updateTable(ufos, tbody);



///////////////////////////////////////////////////////////////////////////////////
/* Use a date form in your HTML document and write JavaScript code that will listen
for events and search through the date/time column to find rows that match user input.*/
///////////////////////////////////////////////////////////////////////////////////

// Filter data based on the target value change
function filterBasedTrigger(dataSet, key, newText) {

    // Check if the data field is empty to decide how to populate the table
    if (newText === '') {
        // if the data field is empty load the whole table; assign filtered data as the whole data set
        var filteredData = dataSet;
    }
    else {
        // Use the form input to filter the data by datetime
        var filteredData = dataSet.filter(element => element[key] === newText);
    };

    return filteredData
};






// Define a function to filter data based on a text from input box
function filterData() {
    // Remove all table rows from tbody (update table)
    var table = d3.select("tbody").selectAll("tr").remove();

    // Select the input element and get the raw HTML node
    var newText = d3.event.target.value;
    var inputSelector = d3.event.target.id;

    console.log(newText)
    console.log(inputSelector)


    if (inputSelector === 'datetime') {
        var datetimeFiltered = filterBasedTrigger(ufos, "datetime", newText);
    } else if (inputSelector === 'city') {
        var cityFiltered = filterBasedTrigger(ufos, "city", newText);
    }

    console.log(datetimeFiltered);
    console.log(cityFiltered);


    var datetimeText = d3.select("#datetime").value;
    console.log(datetimeText);
    if (datetimeText === undefined) {
        console.log("A");
    } else if (datetimeText === ' ') {
        console.log("B");
    } else {
        console.log("C");
    };


    // updateTable(datetimeFiltered, tbody);
    // updateTable(cityFiltered, tbody);



    // var filteredCity = cityFiltered[0].city

    // function selectNamesWithL(student) {
    //     return student.city === filteredCity
    // }

    // var studentsWithL = datetimeFiltered.filter(selectNamesWithL)
    // console.log(studentsWithL)

    // // console.log(filteredCity)

    // // console.log(datetimeFiltered.filter(element => { element.city == filteredCity }))

};




// Getting a reference to the input element on the page with the id property set to 'datetime'
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");


// Complete the form handler for the form
inputFieldDate.on("change", filterData);
inputFieldCity.on("change", filterData);

// d3.selectAll("input").on("change", function () {
//     var changes = d3.select(this);
//     console.log(changes)
// });

// console.log(d3.select("#datetime").value)

// Level 2: Multiple Search Categories

///////////////////////////////////////////////////////////////////////////////
/* Using multiple input tags and/or select dropdowns, write JavaScript code so
the user can to set multiple filters and search for UFO sightings using the
following criteria based on the table columns: date/time, city, state, country, shape */
///////////////////////////////////////////////////////////////////////////////




// var findCity = data.forEach(element => console.log(element.city === 'fresno'))

var findDate = data.filter(element => element.datetime === '1/1/2010');
console.log(findDate);

var findCity = findDate.filter(element => element.city === 'el cajon');
console.log(findCity);



var datetimeText = d3.select("#datetime").value;

console.log(datetimeText);


if (datetimeText === undefined) {
    console.log("A");
} else if (datetimeText === ' ') {
    console.log("B");
} else {
    console.log("C");
};