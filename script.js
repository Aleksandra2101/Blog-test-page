//Hero section
function displayHero() {
  document.getElementById("hero-section").innerHTML += `
  <div class="col-md-6 m-4 p-4 px-0">
               
                <h1 class="display-4 ">Welcome to the blog </h1>
                <p class="lead my-3">Multiple lines of text , informing new readers quickly and
                    efficiently about what’s most interesting about this blog.</p>
            </div>  `;
}
displayHero();

//Cards
fetch("http://localhost:3000/posts?_page=1&_limit=6")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((posts) => {
      document.getElementById("cards").innerHTML += `
      <div class="col-md-4 mb-5 ">
      <div class="card w-100" >
          <div class="card-img" style="background-image:url(${posts.imageUrl}) ;height:250px;background-position:center "></div>
          <div class="card-body">
            <h5 class="card-title">${posts.title}</h5>
            <p class="card-text">${posts.content}</p>
            <a href="/view-post.html?post_id=${posts.id}"  class="btn btn-design" >Read more</a>
          </div>
        </div>
  </div>
  `;
    });
  })
  .catch((err) => {
    console.log(err);
  });

let pageNumber = 1;

function loadPage(direction) {
  if (direction === "next") {
    pageNumber++;
    fetch(`http://localhost:3000/posts?_page=${pageNumber}&_limit=6`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        document.getElementById("cards").innerHTML = "";
        data.forEach((posts) => {
          document.getElementById("cards").innerHTML += `
      <div class="col-md-4 mb-5 ">
      <div class="card w-100" >
          <div class="card-img" style="background-image:url(${posts.imageUrl}) ;height:250px;background-position:center"></div>
          
          <div class="card-body">
            <h5 class="card-title">${posts.title}</h5>
            <p class="card-text">${posts.content}</p>
            <a href="/view-post.html?post_id=${posts.id}"  class="btn  btn-design">Read more</a>
          </div>
        </div>
  </div>
  `;
        });
      });
  } else if (direction === "previous" && pageNumber > 1) {
    pageNumber--;
    fetch(`http://localhost:3000/posts?_page=${pageNumber}&_limit=6 `)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        document.getElementById("cards").innerHTML = "";
        data.forEach((posts) => {
          document.getElementById("cards").innerHTML += `
            <div class="col-md-4 mb-5 ">
            <div class="card w-100" >
              <div class="card-img" style="background-image:url(${posts.imageUrl}) ;height:250px;background-position:center"></div>
        
            <div class="card-body">
               <h5  id="title" class="card-title">${posts.title}</h5>
                <p class="card-text">${posts.content}</p>
                <a  href="/view-post.html?post_id=${posts.id}"  class="btn  btn-design">Read more</a>
                 </div>
               </div>
                </div>
`;
        });
      });
  }
}

function search() {
  let input = document.getElementById("myInput");
  let filter = input.value.toUpperCase();
  let cards = document.getElementsByClassName("card");

  for (i = 0; i < cards.length; i++) {
    let title = cards[i].children[1].firstElementChild.innerText;
    if (title.toUpperCase().indexOf(filter) > -1) {
      cards[i].parentNode.style.display = "";
    } else {
      cards[i].parentNode.style.display = "none";
    }
  }
}
