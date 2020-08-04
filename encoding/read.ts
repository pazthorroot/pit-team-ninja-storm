// Character encoding
// https://en.wikipedia.org/wiki/Character_encoding
// https://www.w3.org/International/questions/qa-what-is-encoding

// Is used to represent a repertoire of characters by some kind of encoding system.

import {readFile} from "fs";

readFile("./ascii.txt", "ascii", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log("ascii", data);
  }
});

readFile("./utf8.txt", "utf8", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log("utf8", data);
  }
});

readFile("./ascii.txt", "utf8", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log("ascii-2", data);
  }
});

readFile("./utf8.txt", "ascii", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log("utf8-2", data);
  }
});
