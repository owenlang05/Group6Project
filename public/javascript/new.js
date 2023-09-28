const starRatingEl = document.querySelector("#star-rating");
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
	onRate: function (rating) {
		console.log(rating)
	},
	icons: {
		// File path, uri or base64 string for `src` attribute
		blank: '/images/icons/blank.svg',
		hover: '/images/icons/hover.svg',
		active: '/images/icons/active.svg'
	}
});

starRating.on('rate', function (rating) {
	console.log('Rating: ' + rating)
});

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

