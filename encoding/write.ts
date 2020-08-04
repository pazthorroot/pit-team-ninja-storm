// Character encoding
// https://en.wikipedia.org/wiki/Character_encoding
// https://www.w3.org/International/questions/qa-what-is-encoding

import {writeFile} from "fs";

const value = "ábcdêfghüjk";

writeFile("./ascii.txt", value, "ascii", function (err) {
  if (err) {
    console.log(err);
  }
});

writeFile("./utf8.txt", value, "utf8", function (err) {
  if (err) {
    console.log(err);
  }
});
