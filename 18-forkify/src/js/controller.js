import 'core-js/stable'; // Polyfill ES6
import 'regenerator-runtime/runtime'; //Polyfill async/await
import * as model from './model';
import recipeView from './views/recipeView';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

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

(function init() {
  // Subscribe
  recipeView.addHandlerRender(controlRecipes);
})();
