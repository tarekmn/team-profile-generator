

// function htmlData(dataArray) {
//   return `${dataArray[0].name}`
// }


function htmlData(dataArray) {

  let htmlTop = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <link rel="stylesheet" href="./dist/practicestyle.css">
    <title>My Team</title>
  </head>
  
  <body>
  
    <div class="container-fluid">
    <header class=" header row"> <h1>Company Staff</h1>
    </header>
    
    </div>
  
    <div class="container-fluid">
      <div class="row cardRow"> `

  let htmlBottom = `
      </div>
    </div>
  
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
  
  </body>
  </html> `

  function appender() {  for (let i = 0; i < dataArray.length; i++) { return `<div class="card">
        <img src="./Assets/img_avatar.png" alt="Avatar" style="width:100%">
        <div class="container">
          <h4><b>${dataArray[i].name}</b></h4>
          <p>${dataArray[i].employeeType}</p>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID:${dataArray[i].employeeID} </li>
              <li class="list-group-item">Email: ${dataArray[i].email}</li>
              <li class="list-group-item"></li>
            </ul>
        </div>
      </div>`
    
  }}


  return htmlTop + appender() + htmlBottom;

  



}




module.exports = htmlData;