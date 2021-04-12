
// TODO: Create a function to generate markdown for README
let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <!--head area where style sheet is linked and title writen-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/reset.css" />
    <link rel="stylesheet"  href="assets/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <meta charset="UTF-8">
    <title>Staff Maker</title>
</head>
<body>
    <nav>
        <div class="nav-wrapper teal lighten-2">
          <a href="#" class="brand-logo center">STAFF</a>
    
        </div>
    </nav>
    <div class="divider"></div>`
function generateMarkdown(data) {
  
    for (let i = 0; i < data.length; i++) {
      if(data[i].getRole()==="Manager"){
        html += Manager(data[i])
      }
      if(data[i].getRole()==="Engineer"){
        html += Engineer(data[i])
      }
      if(data[i].getRole()==="Intern"){
        html += Intern(data[i])
      }
      
    }
    html += closer()
    return html

    

 
}
function Manager(data){
  return `<div class="divider"></div>
  <div class="section managerSection">
      <h5>Manager</h5>
      <ul>
          <li>Name:${data.name}</li>
          <li>Employee #:${data.id}</li>
          <li>Office #:${data.office}</li>
      </ul>
      <a href="mailto:${data.email}">${data.email}</a>
  </div>
  <div class="divider"></div>`
}
function Intern(data){
  return `<div class="section internSection">
  <h5>Intern</h5>
  <ul>
      <li>Name:${data.name}</li>
      <li>Employee #:${data.id}</li>
      <li>School:${data.getSchool(data)}</li>
  </ul>
  <a href="mailto:${data.email}">${data.email}</a>
</div>
<div class="divider"></div>`
}


function Engineer(data){
  return `<div class="section engineerSection">
  <h5>Engineer</h5>
  <ul>
      <li>Name:${data.name}</li>
      <li>Employee #:${data.id}</li>
      <li>Github:${data.getGit(data)}</li>
  </ul>
  <a href="mailto:${data.email}">${data.email}</a>
</div>
<div class="divider"></div>`


}
function closer(){
  return `
  </body>
  
  </html>
  `
}
  

// exports this file out to index.js so it  can be used as a module
module.exports = generateMarkdown;
