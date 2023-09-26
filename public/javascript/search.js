

const search = async (event) => {
    event.preventDefault();
    const searchBar = document.querySelector('#restaurantSearch');
    const query = searchBar.value

    document.location.replace(`/restaurant/${query}`)
}


document   
    .querySelector("#searchBtn")
    .addEventListener("click", search);