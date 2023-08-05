const fs = require("fs");

// holds user command line arguments
const profileDataArgs = process.argv.slice(2, process.argv.length);

// capture first two inputs from command line and assign to name and github

const name = profileDataArgs[0];
const github = profileDataArgs[1];

// input user name and github into HTML
const generatePage = (name, github) => {
  return `<!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>
  
    <body>
      <h1>${name}</h1>
      <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
};

// use Node module to write File
fs.writeFile("index.html", generatePage(name, github), (err) => {
  if (err) throw err;

  console.log("Portfolio complete! View index.html");
});
