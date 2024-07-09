import { async } from 'regenerator-runtime';
import { API_URL, PAGE_SIZE } from './config';
import { getJSON } from './helpers';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: PAGE_SIZE,
  },
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

export async function loadSearchResults(query) {
  try {
    const data = await getJSON(`${API_URL}?search=${query}`);
    state.search.query = query;
    state.search.results = data.data.recipes.map(recipe => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
      };
    });
  } catch (err) {
    console.error(`${err}💥💥💥 `);
    throw err;
  }
}

export function getSearchResultsPage(page) {
  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;
  this.state.search.page = page;
  return state.search.results.slice(start, end);
}

export function updateServings(newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
  });
  state.recipe.servings = newServings;
}
