const request = require('request');

const arr = process.argv.slice(2);



request(arr[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

  console.log(arr[1]);
  if (response.statusCode === 200) {
    const fs = require('fs');
    const data=fs.writeFile(arr[1], body, { flag: 'w+' }, err => {
      if (err) {
        console.error(err)
        return
      }
      var stats = fs.statSync(arr[1]);
      var size = stats.size;
      console.log("size:",size);
      console.log(`Downloaded and saved ${size} bytes to ${arr[1]}`);
     });
     
     
  }

})