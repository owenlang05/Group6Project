const deleteReviewHandler = async (event) => {
    event.preventDefault();
    const postId = document.querySelector('input[name="review-id"]').value;
    await fetch(`/api/review/${reviewId}`, {
        method: 'DELETE'
    })
    .then(function() {
        document.location.replace('/dashboard');
    })
    .catch(err => console.log(err))
}

document.querySelector('#delete-btn').addEventListener('click', deleteReviewHandler);