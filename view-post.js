let url = window.location.href;
let id = url.substring(url.lastIndexOf("=") + 1);

const renderData = function (post) {
  const html = `
    <div class="card" style="width: 30rem; height: 30rem;">
    <div class="card-img" style="background-image:url(${post.imageUrl}) ;height:30rem;"></div>
    <div class="card-body">
      <h5 class="card-title">${post.title}</h5>
      <p class="card-text" style = "height:5rem;">${post.content}</p>
      <a href="/edit-post.html?post_id=${post.id}" class="btn btn-design">Edit post</a>
      
    </div>
  </div>
  `;

  document.querySelector(".posts").innerHTML += html;
};

fetch(`http://localhost:3000/posts/${id}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    renderData(data);
  })
  .catch((err) => {
    console.log(err);
  });

  
