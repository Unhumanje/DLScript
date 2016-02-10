// now working
// script to download data tables from url, extract csv files from archives and rename
var https = require('https');
var fs = require('fs');
var unzip = require('unzip');

var urlchunk1 = "https://w3-117.ibm.com/software/sales/passportadvantage/pricepub/user/DownloadCSV.do?regionCode=";
var urlchunk2 = "&fileCntryName=";
var urlchunk3 = "&fileType=SSA&fileFormat=CSV&fileContentType=601&controlCode=&fileNamePrefix=";
var urlchunk4 = "&fileDate=";
var urlchunk5 = "&jobId=";
var urlchunk6 = "&priceType=C&channelCode=A";
var fullUrl = "https://w3-117.ibm.com/software/sales/passportadvantage/pricepub/user/DownloadCSV.do?regionCode=EMEA&fileCntryName=EURO&fileType=SSA&fileFormat=CSV&fileContentType=601&controlCode=&fileNamePrefix=Eurcountries&fileDate=2016-01-13&jobId=1070&priceType=C&channelCode=A"
var path = "C:/Users/IBM_ADMIN/Documents/Work/SSP Mobile App/DLScript/";
var fName = undefined;
//var filePath = undefined;
var destination = path + "Unzipped";
var urlC = undefined;
var date = "2016-02-10";		// must be updated to current date whenever run.
var jobid = "1070"  // must be updated to current date whenever run. 
var tableNames = [
{region : "EMEA",
fileNamePrefix : "Eurcountries",
fileCntryName : "EURO"},

{fileNamePrefix : "Unitedkingdom",
region : "EMEA",
fileCntryName : "GBR"},

{fileNamePrefix : "Southafrica",
region : "EMEA",
fileCntryName : "ZAF"},

{fileNamePrefix : "Unitedstates",
region : "AMERICAS",
fileCntryName : "USA"},

{fileNamePrefix : "Brazil",
region : "AMERICAS",
fileCntryName : "BRA"},

{fileNamePrefix : "Australia",
region : "APAC",
fileCntryName : "AUS"},

{fileNamePrefix : "India",
region : "APAC",
fileCntryName : "IND"},

{fileNamePrefix : "NewZealand",
region : "APAC",
fileCntryName : "NZL"},

{fileNamePrefix : "Singapore",
region : "APAC",
fileCntryName : "SGP"},

{fileNamePrefix : "Denmark",
region : "EMEA",
fileCntryName : "DNK"},

{fileNamePrefix : "Sweden",
region : "EMEA",
fileCntryName : "SWE"}
];

for (i = 0; i < tableNames.length; i++){
	// build strings for urls and file names
	urlC = urlchunk1 + tableNames[i].region + urlchunk2 + tableNames[i].fileCntryName +
	urlchunk3 + tableNames[i].fileNamePrefix + urlchunk4 + date + urlchunk5 + jobid + urlchunk6;
	fName = tableNames[i].region + tableNames[i].fileNamePrefix + tableNames[i].fileCntryName + "new3.zip";
	console.log(urlC);
	downloadWithGet(fName, urlC);
}


function nextFunction(fName){
	// extracts the downloaded archive
	var filePath = path + fName;
	var uzName = undefined;
	console.log("nextFunction called successfully " + filePath);
//  create a read stream that parses to find the name of the file in the zip archive
	fs.createReadStream(filePath)
	.pipe(unzip.Parse())
	.on('entry', function (entry) {
	    uzName = entry.path;
	    console.log(uzName);
	    entry.autodrain();
  	});
  	// create a new Read Stream to extract the file to destination folder
  	var file = fs.createReadStream(filePath).pipe(unzip.Extract({ path: destination }));

  	file.on('close',function(){
  		// change file name to remove the date (use same filename as for the .zip file but change to .csv
  		var csvName = fName.substring(0,fName.length - 5) + ".csv";
  		fs.rename(destination + "/" + uzName, destination + "/" + csvName, function(err) {
		    if ( err ) console.log('ERROR: ' + err);
		    console.log("finished");
		});
  	});
}

function downloadWithGet(fName, webAddress){
//	downloads from a url using a get request
	https.get(webAddress, function(response){
		var file = fs.createWriteStream(fName);

			console.log("firstfunction called");
			console.log("fName: "+fName);
			response.pipe(file);
			file.on('finish', function() {
				console.log("fName2: "+fName);
				file.close(nextFunction(fName));  // close() is async, call cb after close completes.
    	});

	});

}

console.log("go!");




