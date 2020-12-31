// Yelp module with methods for making requests to Yelp API to get restaurants
/*
const yelpAPIKey =
  "oHkdstaseptE8BFZZqbi-HNYlXqQvtLkps65RtE0eZFvBvb1_SC4T-DcHOXJXqWNXbSQK4XYC08RV1jNaQmIZvyYnHswhiIVdB7d0KjsA3WxzO-Dj8dlyuRyWfjsX3Yx";
const baseUrl = "https://api.yelp.com/v3/businesses/search?location=";

const Yelp = {
  restaurantSearch(restaurant, location, cuisine) {
    let restaurantQuery = "";
    if (restaurant) {
      restaurantQuery = `&term=${restaurant}`;
    } else {
      restaurantQuery = `&term=restaurants`;
    }

    let cuisineQuery = "";
    if (cuisine && cuisine !== "any") {
      cuisineQuery = `&categories=${cuisine}`;
    }

    const url = baseUrl + location + restaurantQuery + cuisineQuery;

    return fetch(url, {
      headers: {
        Authorization: `Bearer ${yelpAPIKey}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (!jsonResponse.businesses || jsonResponse.businesses.length === 0) {
          return [];
        }

        return jsonResponse.businesses.map((restaurant) => ({
          rating: restaurant.rating,
          price: restaurant.price,
          phone: restaurant.phone,
          id: restaurant.id,
          name: restaurant.name,
          image: restaurant.image_url,
          location: restaurant.location,
          transactions: restaurant.transactions,
        }));
      });
  },
};

export default Yelp;
*/

const axios = require("axios");
const yelpAPIKey =
  "oHkdstaseptE8BFZZqbi-HNYlXqQvtLkps65RtE0eZFvBvb1_SC4T-DcHOXJXqWNXbSQK4XYC08RV1jNaQmIZvyYnHswhiIVdB7d0KjsA3WxzO-Dj8dlyuRyWfjsX3Yx";
const baseUrl = "https://api.yelp.com/v3/";

const Yelp = {
  restaurantSearch(restaurant, location, cuisine) {
    if (restaurant === "") {
      restaurant = "restaurants";
    }

    const endpoint = "businesses/search";

    const yelpREST = axios.create({
      baseURL: baseUrl,
      headers: {
        Authoriation: `Bearer ${yelpAPIKey}`,
        "Content-type": "application/json",
      },
    });

    yelpREST(endpoint, {
      params: { location: location, term: restaurant, cuisine: cuisine },
    }).then(({ data }) => {
      const { businesses } = data;
      businesses.forEach((business) => {
        console.log("Business: ", business.name);
      });
    });
  },
};

export default Yelp;
