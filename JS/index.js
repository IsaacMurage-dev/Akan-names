// Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

// StringConstructor
var maleNames = [ "Kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// conversion
// function
function akanName() {
    var dd = parseInt(document.getElementById("DD").value);
    var mm = parseInt(document.getElementById("MM").value);
    var yy = parseInt(document.getElementById("YY").value);
    var femaleGender = document.getElementById("femaleGender");
    var maleGender = document.getElementById("maleGender");

	var date = new Date(yy + "-" + mm + "-" + dd);
    var dayBorn = date.getDay();

	if (dd < 1 || dd > 31) {
		alert("Enter a valid day!");
	  }