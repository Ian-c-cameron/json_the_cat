const assert = require('chai').assert;
const {fetchBreedDescription} = require('../breedFetcher');

describe('#fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";
      console.log(`DESC!!!"${desc}"`);
      // compare returned description
      assert.equal(expectedDesc, desc);

      done();
    });
  });

  it('returns an error for an invalid breed, via callback', (done) => {
    fetchBreedDescription('xyz', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(desc, null);

      const expectedError = "xyz not found in the database.";

      // compare returned description
      assert.equal(expectedError, err.message);

      done();
    });
  });

});
