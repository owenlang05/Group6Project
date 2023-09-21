const commentFormHandler = async (event) => {
    event.preventDefault();
    const reviewId = document.querySelector('input[name="review-id"]').value;
    const body = document.querySelector('textarea[name="comment-body"]').value;
    if (body) {
        await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({
                reviewId,
                body
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        document.location.reload();
    }
};

document
    .querySelector('#new-comment-form')
    .addEventListener('submit', commentFormHandler);