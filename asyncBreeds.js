const fs = require('fs');

const breedDetailsFromFile = function(breed, returnValue) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) returnValue(data);
    else returnValue(undefined);
  });
} 
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.

function returnValue(data) {
  console.log('Return Value: ' + data);
} 
// we try to get the return value

//console.log('Return Value: ', callback); // => will NOT print out details, instead we will see undefined!
module.exports = breedDetailsFromFile;