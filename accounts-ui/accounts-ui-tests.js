// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by accounts-ui.js.
import { name as packageName } from "meteor/ensemblebd:accounts-ui";

// Write your tests here!
// Here is an example.
Tinytest.add('accounts-ui - example', function (test) {
  test.equal(packageName, "accounts-ui");
});
