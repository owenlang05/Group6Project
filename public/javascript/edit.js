const editFormHandler = async (event) => {
    event.preventDefault();
    const postId = document.querySelector('input[name="post-id"]').value;
    const title = document.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('textarea[name="post-body"]').value;
    await fetch(`/api/post/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            body
        }),
        headers: { "Content-Type": "application/json"}
    })
    .then(function() {
        document.location.replace('/dashboard');
    })
    .catch(err => console.log(err))  
}

document.querySelector("#edit-post-form").addEventListener("submit", editFormHandler);