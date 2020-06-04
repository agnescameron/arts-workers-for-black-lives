const CLIENT_ID = '331468200564-j86jcspdj1qbk5ier7chbhj9cgali3v1.apps.googleusercontent.com';
const API_KEY = 'AIzaSyAAJmPBmK_swAApb1KQQxEPrkbShAMKc-0';


async function getSignatures() {
	const sheetId = "1Rrj7PQjQcTzeprdGb9d6vBIltiWilACRg7NR411uL_0";
	const sheetUrl = `https://sheets.googleapis.com/v4/spreadsheets/` + sheetId + '/values/A1:F1000?key=' + API_KEY;

	fetch(sheetUrl, { 
	   method: 'get', 
	   headers: new Headers({
	     'Content-Type': 'application/json'
	   })
	})
	.then((response) => {
    	return response.json();
  	})
  	.then((data) => {
    	console.log(data);
  });
}

$(document).ready(function() {

	//get signatures from google sheets
	getSignatures();

	//anything else?

})