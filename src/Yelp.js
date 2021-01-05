// Yelp module with methods for making requests to Yelp API to get restaurants
const axios = require("axios");
const yelpAPIKey =
  "oHkdstaseptE8BFZZqbi-HNYlXqQvtLkps65RtE0eZFvBvb1_SC4T-DcHOXJXqWNXbSQK4XYC08RV1jNaQmIZvyYnHswhiIVdB7d0KjsA3WxzO-Dj8dlyuRyWfjsX3Yx";
const baseUrl = "https://api.yelp.com/v3/";

const Yelp = {
  restaurantSearch(restaurant, location, cuisine) {
    if (restaurant === "") {
      restaurant = "restaurants";
    }

    if (cuisine === "" || cuisine === "any") {
      cuisine = "";
    }

    const endpoint = "businesses/search";

    // use cors-anywhere to make requests to yelp fusion api
    return axios
      .get("https://cors-anywhere.herokuapp.com/" + baseUrl + endpoint, {
        headers: {
          Authorization: `Bearer ${yelpAPIKey}`,
        },
        params: { location: location, term: restaurant, categories: cuisine },
      })
      .then((jsonResponse) => {
        if (!jsonResponse.data || !jsonResponse.data.businesses) {
          return [];
        }

        return jsonResponse.data.businesses.map((restaurant) => ({
          id: restaurant.id,
          name: restaurant.name,
          location: restaurant.location,
          phone: restaurant.display_phone,
          price: restaurant.price,
          rating: restaurant.rating,
          url: restaurant.url,
          image: restaurant.image_url,
          transactions: restaurant.transactions,
          categories: restaurant.categories,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export default Yelp;
