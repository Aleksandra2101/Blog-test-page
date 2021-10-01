[1, 2, 3, 4, 5, 6].forEach(
  () =>
    (document.getElementById("cards").innerHTML += `
    <div class="col-md-4 mb-5">
    <div class="card w-100" >
        <div style="background-image:url('https://64.media.tumblr.com/9901d45b3bf8deffd857dfc5d0e6b677/tumblr_nnp2ze4bIr1r2ll09o1_640.jpg') ;height:250px;background-size:cover;background-position:center"></div>
        
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn  btn-design">Read more</a>
        </div>
      </div>
</div>
`)
);


{
  /* <img src="https://64.media.tumblr.com/9901d45b3bf8deffd857dfc5d0e6b677/tumblr_nnp2ze4bIr1r2ll09o1_640.jpg" class="card-img-top " height="400px" alt="..."></img> */
}
