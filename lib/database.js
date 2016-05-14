/**
 * database class
 */
  var Datastore = require('nedb');
  var db = {
    //store api base info
    apiList: new Datastore({ filename: './data/api-list.db', autoload: true }),
    //store api's simulator data
    simulators: new Datastore({ filename: './data/api-simulators.db', autoload: true }),
    //store api update history
    apiHistory: new Datastore({ filename: './data/api-history.db', autoload: true })
  };

  module.exports = db;