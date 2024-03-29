/* Add all the required libraries*/
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');
   
/* Connect to your database using mongoose - remember to keep your key secret*/
mongoose.connect(config.db.uri);
/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */

   Listing.find({code: 'LBW'}, function(err,data){
    if (err) throw err;
    console.log(data);
   });
  
  };

var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  // find the user with id 4
Listing.findOneAndRemove({ code:'CABL' }, function(err,data) {
  if (err) throw err;

  // we have deleted the user
  console.log(data);
});

};
var updatePhelpsLab = function() {
  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
    
    Correct Address: 1953 Museum Rd, Gainesville, FL 32603

   */
  Listing.findOneAndUpdate({ code: 'PHL' }, { address: '1953 Museum Rd, Gainesville, FL 32603' }, function(err, data) {
    if (err) throw err;
    // we have the updated user returned to us
    console.log(data);
  });
};
var retrieveAllListings = function() {
   /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  // get all the users
Listing.find({}, function(err, users) {
  if (err) throw err;

  // object of all the users
  console.log(users);
});
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
