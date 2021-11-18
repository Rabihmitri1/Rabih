fetch('https://still-springs-04993.herokuapp.com/data')
  .then(response => response.json())
  .then(json => console.log(json))