const editFormHandler = async (event) => {
    event.preventDefault();
    const postId = document.querySelector('input[name="review-id"]').value;
    const title = document.querySelector('input[name="review-title"]').value;
    const body = document.querySelector('textarea[name="review-body"]').value;
    await fetch(`/api/review/${reviewId}`, {
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