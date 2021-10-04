
function submitBlogPost() {
    let postTitle = document.getElementById('titleId').value;
    if (postTitle === "" ){
        alert('Title is required')
        return;
    }
    if(postTitle.length < 11) {
        fetch('http://localhost:3000/errors')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    alert (data[1].fields.title)
    })

       
        return;
    } 
      
    let postContent = document.getElementById('contentId').value;
     if (postContent ===""){
        alert('Content is required')
        return;
     }    
      
     

    let postImage = document.getElementById('imageId').value;
    if (postImage ==="") {
        fetch('http://localhost:3000/errors')
        .then(response => response.json())
        .then(data => {
          console.log(data)
          alert (data[1].fields.imageUrl)
          })
        return;

    }

    const data = { 
        title: postTitle,
        content: postContent, 
        imageUrl: postImage, 
    };

fetch(' http://localhost:3000/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
   window.location = "/"

})
.catch((error) => {
  console.error('Error:', error);
  alert(error)

});
}