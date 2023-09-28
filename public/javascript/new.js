// const Starry = require('starry-rating');
// const starRatingEl = document.querySelector("#star-rating");
// const starRatingId = 'ExampleRating';

// console.log(starRatingEl);

// const starRating = new Starry(starRatingEl, {
// 	name: starRatingId, // Use a name to determine tooltips for only this Starry element
// 	// labels: [
// 	// 	'Low',
// 	// 	'Nice to have',
// 	// 	'Very nice',
// 	// 	'Perfect',
// 	// 	'Excellent'
// 	// ],
// 	onClear: function () {
// 		$('[data-name="' + starRatingId + '"] [data-tooltip]').tooltip('close');
// 	},
// 	onRender: function () {
// 		$('[data-name="' + starRatingId + '"] [data-tooltip]').tooltip({
// 			trigger: 'hover',
// 			placement: 'top'
// 		});
// 	},
// 	onRate: function (rating) {
// 		console.log(rating)
// 	},
// 	icons: {
// 		// File path, uri or base64 string for `src` attribute
// 		blank: '/images/icons/blank.svg',
// 		hover: '/images/icons/hover.svg',
// 		active: '/images/icons/active.svg'
// 	}
// });

const newFormHandler = async (event) => {
    event.preventDefault();
    const reviewBox = document.querySelector('#reviewBox');
	const body = reviewBox.value
    const token = localStorage.getItem("token");
    const restaurant_id = reviewBox.dataset.id;
    await fetch(`/api/review`, {
        method: 'POST',
        body: JSON.stringify({
            body,
			restaurant_id
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

