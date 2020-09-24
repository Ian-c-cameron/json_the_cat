const request = require("request");
const args = process.argv.slice(2);
let breed = args[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
    process.exit();
  }
  let breedInfo = JSON.parse(body);
  if (breedInfo[0]) {
    console.log(breedInfo[0].description); // Print the HTML for the Google homepage.
  } else {
    console.log(`${breed} not found in the database.`);
  }
});
