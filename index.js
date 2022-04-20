const inquirer = require('inquirer');
const fs = require('fs');
inquirer
  .prompt([{
      type:'input',
      name:'yourName',
      message:'What is your name?',
  },{
      type:'input',
      name:'location',
      message:'What is your location?',
  },{
      type:'input',
      name:'bio',
      message:'What is your Bio?',
  },{
    type:'input',
    name:'linkin',
    message:'What is your linkin URL?',
},{
    type:'input',
    name:'github',
    message:'What is your github URL?',
}
   
  ])
  .then((answers) => {
      const content = 
      `<!DOCTYPE html>
      <html lang="en">
      
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Portfolio</title>
      </head>
      
      <body>
          <main>
              <h1>My header</h1>
              <p>${answers.yourName}</p>
              <h1>My location</h1>
              <p>${answers.location}</p>
              <h1>Bio</h1>
              <p>${answers.bio}</p>
              <h1>Linkin</h1>
              <a href="${answers.linkin}" target="_blank">${answers.linkin}</a>
              <h1>GitHub</h1>
              <a href="${answers.github}"  target="_blank">${answers.github}</a>
          </main>
      </body>
      
      </html>`
    fs.writeFile(`./${answers.yourName}.html`, content, err => {
        if(err){
            console.error(err)
            return
        }
    })
  })