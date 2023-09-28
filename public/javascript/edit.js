const starRatingEl = document.getElementById("star-rating");
const starRatingId = 'ExampleRating';

console.log(starRatingEl);

const starRating = new Starry(starRatingEl, {
	name: starRatingId, // Use a name to determine tooltips for only this Starry element
	// labels: [
	// 	'Low',
	// 	'Nice to have',
	// 	'Very nice',
	// 	'Perfect',
	// 	'Excellent'
	// ],
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

const editFormHandler = async (event) => {
    event.preventDefault();
    const reviewBox = document.querySelector('#reviewBox');
	const body = reviewBox.value
    const rating = starRating.getCurrentRating();
    const reviewId = reviewBox.dataset.id;

    await fetch(`/api/review/${reviewId}`, {
        method: 'PUT',
        body: JSON.stringify({
            body,
            rating
        }),
        headers: { "Content-Type": "application/json"}
    })
    .then(function() {
        document.location.replace('/dashboard');
    })
    .catch(err => console.log(err))  
}

document.querySelector("#edit-review-form").addEventListener("click", editFormHandler);