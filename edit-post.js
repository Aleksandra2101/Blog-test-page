const ID = window.location.href.split('=')[1];

const postTitle = document.getElementById("titleId");
const postContent = document.getElementById("contentId");
const postImage = document.getElementById("imageId");

const populateData = function (data) {
  postTitle.value = data.title;
  postContent.value = data.content;
  postImage.value = data.imageUrl;
}

const getData = (id) => {
  fetch(`http://localhost:3000/posts/${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      populateData(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

const updateData = function () {
  if (postTitle === "") {
    alert("Title is required");
    return;
  }
  if (postTitle.length < 11) {
    fetch("http://localhost:3000/errors")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert(data[1].fields.title);
      });

    return;
  }

  let postContent = document.getElementById("contentId").value;
  if (postContent === "") {
    alert("Content is required");
    return;
  }

  let postImage = document.getElementById("imageId").value;
  if (postImage === "") {
    fetch("http://localhost:3000/errors")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert(data[1].fields.imageUrl);
      });
    return;
  }
  const post = {
    title: postTitle.value,
    content: postContent.value,
    imageUrl: postImage.value
  }
  fetch(`http://localhost:3000/posts/${ID}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      window.location = `/view-post.html?post_id=${ID}`;
    })
    .catch((err) => {
      console.log(err);
    });

}
getData(ID);

document.querySelector('.edit-post').addEventListener('click', updateData)



function deletePost() {

  fetch(`http://localhost:3000/posts/${ID}`, {
    method: "delete",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      window.location = "/";
    })
    .catch((error) => {
      console.error("Error:", error);
      alert(error);
    });

}