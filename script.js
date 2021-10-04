
fetch('http://localhost:3000/posts?_page=1&_limit=2')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    data.forEach(posts => {
      document.getElementById("cards").innerHTML += `
      <div class="col-md-4 mb-5">
      <div class="card w-100" >
          <div style="background-image:url(${posts.imageUrl}) ;height:250px;background-position:center"></div>
          
          <div class="card-body">
            <h5 class="card-title">${posts.title}</h5>
            <p class="card-text">${posts.content}</p>
            <a href="#" class="btn  btn-design">Read more</a>
          </div>
        </div>
  </div>
  `
    })
  })
  .catch(err => {
    console.log(err)
  })


let pageNumber = 1;

function loadPage(direction) {

  if (direction === 'next') {
    pageNumber++;
    fetch(`http://localhost:3000/posts?_page=${pageNumber}&_limit=2`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        document.getElementById("cards").innerHTML = ""
        data.forEach(posts => {
          document.getElementById("cards").innerHTML += `
      <div class="col-md-4 mb-5">
      <div class="card w-100" >
          <div style="background-image:url(${posts.imageUrl}) ;height:250px;background-position:center"></div>
          
          <div class="card-body">
            <h5 class="card-title">${posts.title}</h5>
            <p class="card-text">${posts.content}</p>
            <a href="#" class="btn  btn-design">Read more</a>
          </div>
        </div>
  </div>
  `
        })
      })
  } else if(direction === 'previous' && pageNumber > 1) {
    pageNumber--;
    fetch(`http://localhost:3000/posts?_page=${pageNumber}&_limit=2`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      document.getElementById("cards").innerHTML = ""
      data.forEach(posts => {
        document.getElementById("cards").innerHTML += `
    <div class="col-md-4 mb-5">
    <div class="card w-100" >
        <div style="background-image:url(${posts.imageUrl}) ;height:250px;background-position:center"></div>
        
        <div class="card-body">
          <h5 class="card-title">${posts.title}</h5>
          <p class="card-text">${posts.content}</p>
          <a href="#" class="btn  btn-design">Read more</a>
        </div>
      </div>
</div>
`
      })
    })
  }
           
  }


{
  /* <img src="https://64.media.tumblr.com/9901d45b3bf8deffd857dfc5d0e6b677/tumblr_nnp2ze4bIr1r2ll09o1_640.jpg" class="card-img-top " height="400px" alt="..."></img> */
}




