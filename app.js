// from data.js
var tableArr = data;

//create a Tbody Object
var tbody = d3.select("tbody");
//get table class
tbody.attr("class", "table table-striped");
// loop through each ufo record
tableArr.forEach((ufoEvent) => {
  //create a new row
  var row = tbody.append("tr");
  //loop through the items in a record and add a column for each item in that row
  Object.entries(ufoEvent).forEach(([key, value]) => {
    var cell = tbody.append("td");
    cell.text(value);
  });
});

//Clicking filter button
var Filter_button = d3.select("#filter-btn");

// This function is triggered when the button is clicked
function handleClick() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  
  // console.log(inputValue);
  // console.log(tableArr);

  //created filtered variable
  var filteredData = tableArr.filter(tableArr => tableArr.datetime === inputValue);
  tbody.remove()
  var table = d3.select("table");
  table.append("tbody")

  var tbody2 = d3.select("tbody");
  //get table class
  tbody2.attr("class", "table table-striped");
  // loop through each filtered ufo record
  filteredData.forEach((ufoEvent) => {
    //create a new row
    var row = tbody2.append("tr");
    //loop through the items in a record and add a column for each item in that row
    Object.entries(ufoEvent).forEach(([key, value]) => {
      var cell = tbody2.append("td");
      cell.text(value);
    });
  });
}

// We can use the `on` function in d3 to attach an event to the handler function
Filter_button.on("click", handleClick);