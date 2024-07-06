import 'core-js/stable'; // Polyfill ES6
import 'regenerator-runtime/runtime'; //Polyfill async/await
import * as model from './model';
import recipeView from './views/recipeView';
import searchView from './views/searchView';

async function controlRecipes() {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return; // guard (modern style)

    recipeView.renderSpinner();

    // 1. Loading recipe
    await model.loadRecipe(id);

    // 2. rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
}

async function controlSearchResults() {
  try {
    const query = searchView.getQuery();
    if (!query) return;

    await model.loadSearchResults(query);
    console.log(model.state.search);
  } catch (err) {
    console.error(err);
  }
}

(function init() {
  // Subscribes
  searchView.addHandlerSearch(controlSearchResults);
  recipeView.addHandlerRender(controlRecipes);
})();
