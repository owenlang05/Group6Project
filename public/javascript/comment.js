const commentFormHandler = async (event) => {
    event.preventDefault();
    const postId = document.querySelector('.post').dataset.id;
    const body = document.querySelector('textarea[name="comment-body"]').value;
    const userId = document.querySelector('input[name="user-id"]').value;
    if (body) {
        await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({
                body,
                postId,
                userId
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