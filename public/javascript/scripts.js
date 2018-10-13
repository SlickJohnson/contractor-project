document.getElementById('new-comment').addEventListener('submit', (e) => {
  // Prevent default behavior
  e.preventDefault();

  // Serialize data into object.
  let comment = {};
  const inputs = document.getElementsByClassName('form-control');
  for (var i = 0; i < inputs.length; i++) {
    comment[inputs[i].name] = inputs[i].value;
  }

  // Init post request with axios
  axios.post('/reviews/comments', comment)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
      alert('There was a problem');
    });
});
