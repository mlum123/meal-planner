// Spoonacular module with methods for making requests to Spoonacular API to get recipes
const spoonacularAPIKey = "35335fb30c544f0f89461ecc95fcc85d";
const baseUrl =
  "https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&apiKey=";

const Spoonacular = {
  recipeSearch(dish, ingredients, cuisine) {
    let dishQuery = "";
    if (dish) {
      dishQuery = `&query=${dish}`;
    }

    let ingredientsQuery = "";
    if (ingredients) {
      ingredientsQuery = `&includeIngredients=${ingredients}`;
    }

    let cuisineQuery = "";
    if (cuisine && cuisine !== "any") {
      cuisineQuery = `&cuisine=${cuisine}`;
    }

    const url =
      baseUrl + spoonacularAPIKey + dishQuery + ingredientsQuery + cuisineQuery;

    return fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (!jsonResponse.results || jsonResponse.results.length === 0) {
          return [];
        }

        return jsonResponse.results.map((recipe) => ({
          vegetarian: recipe.vegetarian,
          vegan: recipe.vegan,
          glutenFree: recipe.glutenFree,
          dairyFree: recipe.dairyFree,
          aggregateLikes: recipe.aggregateLikes,
          sourceName: recipe.sourceName,
          id: recipe.id,
          title: recipe.title,
          readyInMinutes: recipe.readyInMinutes,
          servings: recipe.servings,
          sourceUrl: recipe.sourceUrl,
          image: recipe.image,
          summary: recipe.summary,
          cuisines: recipe.cuisines,
          analyzedInstructions: recipe.analyzedInstructions,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export default Spoonacular;
