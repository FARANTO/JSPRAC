function userdata('AS'){
    fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
}
console.log('first.js');