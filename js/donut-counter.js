//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts

var guests
guests = prompt("Please enter number of guests", 0);
var donuts 
donuts = prompt("Please enter number of donuts", 0);

//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
//use parseInt to convert the users answer from a string to an integer.
parseInt(guests, 10)
parseInt(donuts, 10)
//write a conditional to check if there are enough donuts
if (guests > donuts) {
  console.log(`There are ${guests} guests and ${donuts} donuts. There are not enough donuts for the guests!`);
  alert(`There are ${guests} guests and ${donuts} donuts. There are not enough donuts for the guests!`)
} else {
  console.log(`There are ${guests} guests and ${donuts} donuts. There are enough donuts for the guests. Congratulations!`);
  alert(`There are ${guests} guests and ${donuts} donuts. There are enough donuts for the guests. Congratulations!`)
};



  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.
