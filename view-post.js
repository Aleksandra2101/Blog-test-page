let url = window.location.href;
let id = url.substring(url.lastIndexOf("=") + 1);

fetch(`http://localhost:3000/posts/${id}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
