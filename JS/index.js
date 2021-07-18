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
// conditional 1
	if (dd < 1 || dd > 31) {
		alert("Please insert a valid Day Date!");
	  }
	if (mm < 1 || mm > 12) {
		alert("Please enter a valid Month Date!");
	  }
	  if (yy.toString().length !== 4) {
		alert("Please insert a valid Year Date!");
// conditional 2
	} else if (maleGender.checked) {
		alert(
		  "Hello, you were born on a " +
			daysOfTheWeek[dayBorn] +
			" and your Akan name is " +
			maleNames[dayBorn]); 
		} else if (femaleGender.checked) {
			alert(
				"Hello, you were born on a " + 
				daysOfTheWeek[dayBorn] + 
				" and your Akan name is " +
				femaleNames[dayBorn]);
		}
	}
	// leap year calculation