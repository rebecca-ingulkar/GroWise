import db from './connection'

// shows the recipe as a clickable link on PlantGuide component
export async function getRecipesByVegetableId(id: number) {
  return db('recipes')
    .join('recipe_vegetables', 'recipes.id', 'recipe_vegetables.recipe_id')
    .where('recipe_vegetables.vegetable_id', id)
    .select(
      'recipes.id',
      'recipes.title',
      'recipes.description',
      'recipes.image',
      'recipes.ingredients',
      'recipes.method',
    )
}

export async function getRecipeById(id: number) {
  return db('recipes')
    .where('id', id)
    .select('id', 'title', 'description', 'image', 'ingredients', 'method')
    .first()
}

export async function getVegetablesByRecipeId(recipeId: number) {
  return db('vegetables')
    .join(
      'recipe_vegetables',
      'vegetables.id',
      'recipe_vegetables.vegetable_id',
    )
    .where('recipe_vegetables.recipe_id', recipeId)
    .select('vegetables.id', 'vegetables.name', 'vegetables.image')
}
