// HOME [ START ]

if (document.getElementById("home")) {
  // Hover over "me" color swap.
  document.getElementById("me").onmouseover = function () {
    meColor();
  };

  function meColor() {
    document.getElementById("me").src = "/images/arr/me-color.png";
  }

  // Hover out "me" monochrome swap.
  document.getElementById("me").onmouseout = function () {
    meMono();
  };

  function meMono() {
    document.getElementById("me").src = "/images/arr/me-mono.png";
  }
}

// HOME [ END ]

// -----------------------------------------------------------------------

// BLOG [ START ]

// Append all the published blog posts.
function appendBlogPosts(data) {
  // console.log(data.posts);
  for (let i = 0; i < data.posts.length; i++) {
    let postDate = data.posts[i].postDate;
    let postName = data.posts[i].postName;
    let postPath = data.posts[i].postPath;
    let node = document.createElement("li");
    let nodeSpan = document.createElement("span");
    nodeSpan.innerText = postDate + " ";
    nodeSpan.classList.add("post-dates");
    node.appendChild(nodeSpan);
    let nodeA = document.createElement("a");
    nodeA.href = postPath;
    nodeA.innerText = postName;
    nodeA.classList.add("post-links");
    node.appendChild(nodeA);
    document.getElementById("blog-posts").appendChild(node);
  }
}

// Fetch all the published blog posts.
let checkBlog = document.getElementById("blog-posts");
if (checkBlog !== null) {
  fetch("/posts/blog/blog.json")
    .then((response) => response.json())
    .then((data) => appendBlogPosts(data));
}

// BLOG [ END ]

// -----------------------------------------------------------------------

// MONOCHROME [ START ]

// Append all the published monochrome posts.
function appendMonochromePosts(data) {
  // console.log(data.posts);
  for (let i = 0; i < data.posts.length; i++) {
    let postDate = data.posts[i].postDate;
    let postName = data.posts[i].postName;
    let postPath = data.posts[i].postPath;
    let node = document.createElement("li");
    let nodeSpan = document.createElement("span");
    nodeSpan.innerText = postDate + " ";
    nodeSpan.classList.add("post-dates");
    node.appendChild(nodeSpan);
    let nodeA = document.createElement("a");
    nodeA.href = postPath;
    nodeA.innerText = postName;
    nodeA.classList.add("post-links");
    node.appendChild(nodeA);
    document.getElementById("monochrome-posts").appendChild(node);
  }
}

// Fetch all the published monochrome posts.
let checkMonochrome = document.getElementById("monochrome-posts");
if (checkMonochrome !== null) {
  fetch("/posts/monochrome/monochrome.json")
    .then((response) => response.json())
    .then((data) => appendMonochromePosts(data));
}

// MONOCHROME [ END ]
