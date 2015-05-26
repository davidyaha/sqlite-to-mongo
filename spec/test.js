var SqliteToMongo = require('..');
var mongo = require('mongodb');
var Server = mongo.Server;

describe("Connecting to an sqlite file and mongodb", function () {
  it("Sould connect to a given sqlite file and then to a local mongodb", function () {
    //var importer = new SqliteToMongo('spec/zresources/tables.sqlite', 'mongodb://localhost/');
    //
    expect(false).not.toBe(true);
  });
  it("Sould connect to a given sqlite file and then to a remote mongodb");
  it("Sould connect to a given sqlite file and then to a replicaset of mongodb");
});
