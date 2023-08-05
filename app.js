const fs = require("fs");
const generatePage = require("./src/page-template");

// holds user command line arguments
const profileDataArgs = process.argv.slice(2);
// capture first two inputs from command line and assign to name and github

const [name, github] = profileDataArgs;

// use Node module to write File
fs.writeFile("./index.html", generatePage(name, github), (err) => {
  if (err) throw err;

  console.log("Portfolio complete! View index.html");
});
