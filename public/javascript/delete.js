const deleteReviewHandler = async (event) => {
    event.preventDefault();
    const deleteBtnEl = document.getElementById('delete-btn');
    const reviewId = deleteBtnEl.dataset.id;
    console.log(reviewId)
    await fetch(`/api/review/${reviewId}`, {
        method: 'DELETE'
    })
    .then(function() {
        document.location.replace('/dashboard');
    })
    .catch(err => console.log(err))
}

document.querySelector('#delete-btn').addEventListener('click', deleteReviewHandler);