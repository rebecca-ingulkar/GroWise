import db from './connection'

export async function getRecipesByVegetableId(id: number) {
  return db('recipes')
    .join('recipe_vegetables', 'recipe.id', 'recipe_vegetables.recipe.id')
    .where('recipe_vegetables.vegetables_id', id)
    .select(
      'recipes.id',
      'recipes.title',
      'recipes.description',
      'recipes.image',
    )
}

export async function getRecipeById(id: number) {
  return db('recipes').where('id', id).first()
}

export async function getVegetablesByRecipeId(recipeId: number) {
  return db('vegetables')
    .join(
      'recipe_vegetables',
      'vegetables.id',
      'recipe_vegetables.vegetables_id',
    )
    .where('recipe_vegetables.recipe_id', recipeId)
    .select('vegetables.id', 'vegetables.name', 'vegetables.image')
}
