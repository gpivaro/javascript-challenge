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

///////////////////////////////////////////////////////////////////////////////
/* Using multiple input tags and/or select dropdowns, write JavaScript code so
the user can to set multiple filters and search for UFO sightings using the
following criteria based on the table columns: date/time, city, state, country, shape */
///////////////////////////////////////////////////////////////////////////////


// Define a function that use the selector to change the filter object
function selectFieldChange(inputSelector, key, newText) {
    // Conditional test
    if (inputSelector == key & newText == '') {
        delete filter[key];
        console.log('AAA');
    } else if (inputSelector == key) {
        filter[key] = newText;
        console.log('BBB');
    } else if (inputSelector != key & oldDateText == '') {
        delete filter[key];
        console.log('CCC');
    };
    return filter[key]
};




const filter = {};
oldCityText = '';
oldDateText = '';
oldStateText = '';
oldCountryText = '';
oldShapeText = '';

// Define a function to filter data based on a text from input box
function filterData() {
    // Remove all table rows from tbody (update table)
    var table = d3.select("tbody").selectAll("tr").remove();


    // Select the input element and get the raw HTML node
    var newText = d3.event.target.value;
    console.log(`Event value: ${newText}`)
    // Define a selector to identify which id was triggered
    var inputSelector = d3.event.target.id;
    console.log(`Event id: ${inputSelector}`)

    // selectFieldChange(inputSelector, 'datetime', newText)


    // Conditional tests based on the selector id to build the filter object
    if (inputSelector == 'datetime' & newText == '') {
        delete filter.datetime;
        console.log('datetime: AAA');
    } else if (inputSelector == 'datetime') {
        filter.datetime = newText;
        oldDateText = newText;
        console.log('datetime: BBB');
    } else if (inputSelector != 'datetime' & oldDateText == '') {
        filter.datetime = oldDateText;
        delete filter.datetime;
        console.log('datetime CCC');
    };

    if (inputSelector == 'city' & newText == '') {
        delete filter.city;
        console.log(`${inputSelector}: AAA`);
    } else if (inputSelector == 'city') {
        filter.city = newText;
        oldCityText = newText;
        console.log(`${inputSelector}: BBB`);
    } else if (inputSelector != 'city' & oldCityText == '') {
        filter.city = oldCityText;
        delete filter.city;
        console.log(`${inputSelector}: CCC`);
    };

    if (inputSelector == 'state' & newText == '') {
        delete filter.state;
        console.log(`${inputSelector}: AAA`);
    } else if (inputSelector == 'state') {
        filter.state = newText;
        oldStateText = newText;
        console.log(`${inputSelector}: BBB`);
    } else if (inputSelector != 'state' & oldCityText == '') {
        filter.state = oldStateText;
        delete filter.state;
        console.log(`${inputSelector}: CCC`);
    };

    if (inputSelector == 'country' & newText == '') {
        delete filter.country;
        console.log(`${inputSelector}: AAA`);
    } else if (inputSelector == 'country') {
        filter.country = newText;
        oldCountryText = newText;
        console.log(`${inputSelector}: BBB`);
    } else if (inputSelector != 'state' & oldCountryText == '') {
        filter.country = oldCountryText;
        delete filter.country;
        console.log(`${inputSelector}: CCC`);
    };

    if (inputSelector == 'shape' & newText == '') {
        // var escapeTest = + 1;
        delete filter.shape;
        console.log(`${inputSelector}: AAA`);
    } else if (inputSelector == 'shape') {
        filter.shape = newText;
        oldShapeText = newText;
        console.log(`${inputSelector}: BBB`);
    } else if (inputSelector != 'shape' & oldShapeText == '') {
        filter.shape = oldShapeText;
        delete filter.shape;
        console.log(`${inputSelector}: CCC`);
    };
    console.log(filter)

    // Conditional test to filter the data or load the whole table

    if (filter.length == 0) {
        // If the filter object is empty then load the table with origina/ulfitered data
        updateTable(ufos, tbody);
    } else {
        // Filter data based on the filter object
        var results = data.filter(item => {
            for (let key in filter) {
                if (item[key] === undefined || item[key] != filter[key])
                    return false;
            }
            return true;
        });
        // Load table with filtered data
        updateTable(results, tbody);
    };
};


// Getting a reference to the input element on the 
// page with the id property set to 'datetime'
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var inputFieldState = d3.select("#state");
var inputFieldCountry = d3.select("#country");
var inputFieldShape = d3.select("#shape");


// Complete the form handler for the form
inputFieldDate.on("change", filterData);
inputFieldCity.on("change", filterData);
inputFieldState.on("change", filterData);
inputFieldCountry.on("change", filterData);
inputFieldShape.on("change", filterData);


