const postContainer = document.getElementById("post-container");
function loadPost() {


    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
            const firstTenPost = json.slice(0, 10);

            for (const post of firstTenPost) {
                const div = document.createElement("div");

                div.classList.add("post")
                div.innerHTML = `
                <h2>  ${post.title} </h2>
                <p> ${post.body} </p>

                <button onClick={viewPost(${post.id})}> View Details ${post.id} </button>
                `

                postContainer.appendChild(div);



            }


        })
}

function viewPost(postId) {
    console.log("view Details click", postId);


    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(data => {


            const singlePost = document.getElementById("single-post");

            for (const postSingle of data) {
                const div = document.createElement("div");
                div.classList.add("single-post");
                div.innerHTML = `
<h2> User Name:  ${postSingle.name} </h2>
<h3> User Email:  ${postSingle.email} </h3>
<p> User COmment: ${postSingle.body} </p>
`;
                singlePost.appendChild(div);


            }
        })
}