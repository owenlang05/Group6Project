const newFormHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('input[name="review-title"]').value;
    const body = document.querySelector('textarea[name="review-body"]').value;
    const token = localStorage.getItem("token");
    await fetch(`/api/review`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            body
        }),
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
        }
    });
    document.location.replace("/dashboard");
};

document    
    .querySelector("#new-review-form")
    .addEventListener("submit", newFormHandler);