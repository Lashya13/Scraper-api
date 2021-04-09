// api url
const api_url = 
      "http://594b3720e851.ngrok.io/getAll";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
          <th>Id</th>
          <th>Name</th>
          <th>description</th>
          <th>Price</th>
          <th>Variants</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data) {
        tab += `<tr>
    <td>${r.id} </td>
    <td>${r.description} </td>
    <td>${r.name}</td>
    <td>${r.price}</td> 
    <td>${r.variants}</td>          
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("Electronics").innerHTML = tab;
}