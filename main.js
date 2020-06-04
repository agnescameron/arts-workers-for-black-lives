const CLIENT_ID = '331468200564-j86jcspdj1qbk5ier7chbhj9cgali3v1.apps.googleusercontent.com';
const API_KEY = 'AIzaSyAAJmPBmK_swAApb1KQQxEPrkbShAMKc-0';


async function getSignatures() {
	const sheetId = "1Rrj7PQjQcTzeprdGb9d6vBIltiWilACRg7NR411uL_0";
	const sheetUrl = `https://sheets.googleapis.com/v4/spreadsheets/` + sheetId + '/?key=' + API_KEY;

	// $.ajaxSetup({
	//   headers : {
	//     `Authorization: Bearer AIzaSyAAJmPBmK_swAApb1KQQxEPrkbShAMKc-0`,
	//     'Accept: application/json'
	//   }
	// });
	// $.getJSON(sheetUrl, function(data){
	// 	var entry = data.feed.entry;
	// 	console.log('got where')
	// 	console.log('entry is', entry)
	// 	 $(entry).each(function(){
	// 	 	console.log(entry)
	// 	});
	// });



	fetch(sheetUrl, { 
	   method: 'get', 
	   headers: new Headers({
	     'Content-Type': 'application/json'
	   })
	})
	.then((response) => {
    	return response.json();
  	})
  	.then((myJson) => {
    	console.log(myJson);
  });
}

$(document).ready(function() {

	//get signatures from google sheets
	getSignatures();

	//anything else?

})