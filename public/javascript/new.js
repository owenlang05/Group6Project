const starRatingEl = document.getElementById("star-rating");
const starRatingId = 'ExampleRating';

console.log(starRatingEl);

const starRating = new Starry(starRatingEl, {
	name: starRatingId, // Use a name to determine tooltips for only this Starry element
	onClear: function () {
		$('[data-name="' + starRatingId + '"] [data-tooltip]').tooltip('close');
	},
	onRender: function () {
		$('[data-name="' + starRatingId + '"] [data-tooltip]').tooltip({
			trigger: 'hover',
			placement: 'top'
		});
	},
	icons: {
		// File path, uri or base64 string for `src` attribute
		blank: '/images/icons/blank.svg',
		hover: '/images/icons/hover.svg',
		active: '/images/icons/active.svg'
	}
});

const newFormHandler = async (event) => {
    event.preventDefault();
    const reviewBox = document.querySelector('#reviewBox');
	const body = reviewBox.value
    const token = localStorage.getItem("token");
    const restaurant_id = reviewBox.dataset.id;
    const rating = starRating.getCurrentRating()

    await fetch(`/api/review`, {
        method: 'POST',
        body: JSON.stringify({
            body,
			restaurant_id,
            rating
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
    .addEventListener("click", newFormHandler);

