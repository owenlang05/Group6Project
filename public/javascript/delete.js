const deletePostHandler = async (event) => {
    event.preventDefault();
    const postId = document.querySelector('input[name="post-id"]').value;
    await fetch(`/api/post/${postId}`, {
        method: 'DELETE'
    })
    .then(function() {
        document.location.replace('/dashboard');
    })
    .catch(err => console.log(err))
}

document.querySelector('#delete-btn').addEventListener('click', deletePostHandler);