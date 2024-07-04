import { async } from 'regenerator-runtime';
import { API_URL } from './config';
import { getJSON } from './helpers';

export const state = {
  recipe: {},
};

export async function loadRecipe(id) {
  try {
    const data = await getJSON(`${API_URL}/${id}`);
    //const res = await fetch(`${API_URL}/${id}`);
    //const data = await res.json();

    //if (!res.ok) throw new Error(`${data.message} (HTTP ${res.status})`);

    //console.log(res, data);
    const { recipe } = data.data;

    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log(state.recipe);
  } catch (err) {
    // Temp error handling
    console.error(`${err} 💥💥💥`);
    // Necessary to reject promise in the controller code
    // and have access to the error object
    throw err;
  }
}
