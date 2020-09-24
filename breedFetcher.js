const request = require("request");


const fetchBreedDescription = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      callback(error, "error connecting to thecatapi.com");
    } else {
      let breedInfo = JSON.parse(body);
      if (breedInfo[0]) {
        callback(error, breedInfo[0].description); // Print the HTML for the Google homepage.
      } else {
        error = new Error(`${breed} not found in the database.`);
        callback(error, null);
      }
    }
  });
};


module.exports = {fetchBreedDescription};