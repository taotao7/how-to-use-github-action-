const rimraf = require("rimraf");
const fs = require("fs");

const filePath = `${process.cwd()}/dist`;

fs.exists(filePath, (i) => {
  if (i) {
    rimraf.sync(filePath);
    console.log("CLEAN DONE!");
  } else {
    console.log("NOT SUCH DIR!");
  }
});
