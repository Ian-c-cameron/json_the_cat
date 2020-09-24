const args = process.argv.slice(2);
const passedBreed = args[0];
const {fetchBreedDescription} = require('./breedFetcher');

fetchBreedDescription(passedBreed, (error, description) => {
  if (error) {
    console.log(error);
  }
  console.log(description); // Print the HTML for the Google homepage.
});