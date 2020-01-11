// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

//For each record append a new row and fill the table with each value
//depending on columns i.e. datetime, city, etc.
tableData.forEach(ufo => {
    let row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
        let cell = row.append("td");
        cell.text(value);
    })
})

// Assign the data from `data.js` to a descriptive variable
var people = data;

// Select the button
var button = d3.select(".filterBtn");

// Complete the click handler for the form
button.on("click", () => {

  // Select the input element and get the raw HTML node
  let val = d3.select(".form-control")

  // Get the value property of the input element
  let inputValue = val.property("value")

  // Filter depending on input
  let result = tableData.filter(function(d){ return d.datetime == inputValue })
  //Print results to check correctness
  console.log(result)

  //If we get more than one result the do all of this
  if(result.length > 0) {

    //Remove all current table rows
    tbody.selectAll("tr").remove()

    //Add new table rows
    result.forEach(ufo => {
          let row = tbody.append("tr");
          Object.entries(ufo).forEach(([key, value]) => {
              let cell = row.append("td");
              cell.text(value);
          })
     })
  } 
});