/*
Aleksandra Dmitruka, ad22069
 */

function capitalize (str) { //function to capitalize the first letter of every word in str
	var arr=str.split(" ");
	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
	
	}
	const str2 = arr.join(" ");
	return str2;	
}




const table_headers=["Region", "Name", "Address", "Total Voters", "Vote Count","Percentage Voted", "Election Day Vote Count", "Percentage Voted on Election Day"];
 
window.addEventListener('DOMContentLoaded', (event) => { // execute the code when the initial HTML document has been completely loaded, we need the regions select to be loaded 
   

	const search = document.getElementById("search");
	
	const reg_search=document.getElementById("region-list");
	const pol_search=document.getElementById("polling-list");
	var lookup = {};

	for (let i in activities) { // for every item in the activities - every piece of statistic info
		let region;
		if (activities[i].Location.ParentId) 
			region = capitalize(activities[i].Location.ParentId); // read region from an activity
		else 
			region = capitalize(activities[i].Location.Id); // read polling station Id from an activity
		let station = activities[i].Location.Name; // read polling station from an activity
		if (region && !(region in lookup)) { // if the region hasn't been previously processed
			lookup[region] = {}; // add a new region to the lookup
		}
		lookup[region][station] = 1; // add a station to the lookup. lookup is a two-dimensional associative array/object
	}

    //console.log(lookup); // uncomment this line if you want to see the result in the console



	var regions = Object.keys(lookup).sort(); // get the list of keys in the lookup and sort it

   //console.log(regions); // uncomment this line if you want to see the result in the console

	var region_s = document.getElementById("region-list"); // get region select element
	for (let i in regions) { // for every region
		let opt = document.createElement('option'); // create a new option		
		opt.innerHTML = regions[i]; // fill the text with the region name
		opt.value = regions[i]; // fill the value with the region name
		region_s.appendChild(opt); // add newly created option to the region select
	}
    



	var temp;
	var temp2=[];
	var stations;
	var newstations;

	for (let i=0; i<Object.keys(lookup).length;i++){
		temp = Object.keys(lookup[regions[i]]).sort();
		temp2.push(temp);}
		
	
		let flatArray = [].concat.apply([], temp2).sort(); // flats the array of arrays - makes one united array
		
		stations=flatArray;



		var station_s = document.getElementById("polling-list"); // get region select element


		const empty = document.createElement('option'); // adds empty option to improve station list display (when "All" option is selected, we shouldn't display any station as a default one in order to prevent misunderstanding)
		empty.innerHTML = "";
		empty.value = "";
		station_s.appendChild(empty);


	

		for (let i in stations) { // for every station
			let opt = document.createElement('option'); // create a new option		
			opt.innerHTML = stations[i]; // fill the text with the region name
			opt.value = stations[i]; // fill the value with the region name
			station_s.appendChild(opt); // add newly created option to the region select
		}
	

	reg_search.addEventListener('change', (event) => {
		pol_search.innerHTML = ''; //cleans the list
		const chosen = reg_search.value;
		if(chosen!=""){      //if region is not equal to "All"

	
			newstations= Object.keys(lookup[chosen]).sort(); // choose stations, that belong to particular region "chosen"
			
		


			
	

			var listi = document.getElementById("polling-list"); 


			const empty = document.createElement('option');// adds empty option to improve station list display (when region option is selected, we shouldn't display any station as a default one in order to prevent misunderstanding)
			empty.innerHTML = "";
			empty.value = "";
			listi.appendChild(empty);


			for (let i in newstations) {   // add stations, that belong to particular region "chosen" to the dropdown
			let opt = document.createElement('option'); 
			opt.innerHTML = newstations[i]; 
			opt.value = newstations[i]; 
			listi.appendChild(opt); 

	}

	}

	else{   // regenerates the list of stations for "All" regions

		const empty = document.createElement('option');
		empty.innerHTML = "";
		empty.value = "";
		station_s.appendChild(empty);

		for (let i in stations) { 
			let opt = document.createElement('option'); 	
			opt.innerHTML = stations[i]; 
			opt.value = stations[i]; 
			station_s.appendChild(opt); 
		}
	



	}

	



	});



	function isPositiveInteger(str) { // function which checks if a value is a positive integer
		if (typeof str !== 'string') {
		  return false;
		}
	  
		const num = Number(str);
	  
		if (Number.isInteger(num) && num >= 0) {
		  return true;
		}
	  
		return false;
	  }
	


const from=document.getElementById("vote-from");
const until=document.getElementById("vote-until");


  from.addEventListener("change", validate);  // when we enter something in the following input boxes
  function validate(){
    const label = document.getElementById("vldSum");  
    if( isPositiveInteger(from.value) ) {  // if value in input is a positive integer, the warning will not be visible
     
	  label.style.display="none";
     
    } 
    else {
		label.style.display="inline";

    }
  } 			
 
  until.addEventListener("change", validate2); // when we enter something in the following input boxes
  function validate2(){
    const label2 = document.getElementById("vldSum2");  
    if( isPositiveInteger(until.value) ) { // if value in input is a positive integer, the warning will not be visible
     
	  label2.style.display="none";
     
    } 
    else {
		label2.style.display="inline";

    }
  } 			
 
  const table = document.getElementById("tab");
  const button=document.getElementById("show-stats");

  button.onclick = () => {
  table.innerHTML = ''; //cleans the table
  table.border = "1"; // creates border 
  var columnCount = table_headers.length;
  var row = table.insertRow(-1); // adds row to the end of the table
  for (var i = 0; i < columnCount; i++) { // generates table with headers (so far no other cells)
	  var headerCell = document.createElement("TH");
	  headerCell.innerHTML = table_headers[i];
	  row.appendChild(headerCell);
  }


  
  const get_station=pol_search.value;
  const get_reg=(reg_search.value).toLowerCase();



 
 
  

  const filter=activities.filter(resulti=> {  // filters the input result. So far checks if a user has selected any region or/and station (leaves it as optional)

	

	  

	if(get_station==resulti.Location.Name){    // if particuar stations name is selected - add element with that name
		return true;
	}

	if(get_reg==resulti.Location.ParentId && get_station==""){ // if only a region is selected - add all elements with stations in that region
		return true;
	}

	if(get_reg=="" && get_station==""){ // if we have default options(All regions, no particular stations) - add all elements with all stations 
		return true;
	}
	
	
	

	return false;

	





})


const newfilter=filter.filter(elem =>{ // checks filtered results for voter's range (leaves it as optional)


	const numbers=elem.Location.VoterCount; // gets votes count for each filtered element



	if((from.value <=numbers && until.value>=numbers) || (from.value=="" && until.value=="")||(from.value =="" && until.value>=numbers)||(from.value <=numbers && until.value=="")){
		return true;
	}



})



console.log(newfilter);


let checkbox = document.getElementById("total");
let checkbox2= document.getElementById("day");


newfilter.forEach(result => {  // generates table based on users preferences 
	const row = table.insertRow(); // adds new row for each element in newfilter
	const region = row.insertCell(); // adds all needed cells
	const name = row.insertCell();
	const address=row.insertCell();
	const total = row.insertCell();
	const count = row.insertCell();
	const percentage = row.insertCell();
	const elday = row.insertCell();
	const prelday = row.insertCell();

	region.innerHTML = capitalize(result.Location.ParentId); //fills first cell with region name(function capitalize is used)
	name.innerHTML = result.Location.Name;//fills second cell with station name
	address.innerHTML=result.Location.Address;//fills third cell with station adress
	total.innerHTML = result.Location.VoterCount;//fills fourth cell with station name
	if(checkbox.checked){ //if user have also checked the checkbox "Total"
	
	count.innerHTML = result.TotalStatistic.Count; // fill information about the total count and percentage
	percentage.innerHTML = result.TotalStatistic.Percentage+ '%';

}
	if(checkbox2.checked){//if user have also checked the checkbox " Voted on election day"
	
	elday.innerHTML=result.ElectionDayTotalStatistic.Count;// fill information about the election day count and percentage
	prelday.innerHTML=result.ElectionDayTotalStatistic.Percentage+ '%';}


  
});



}



















		



	   	







	



	






});

