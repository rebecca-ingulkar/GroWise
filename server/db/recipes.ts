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
      'recipes.notes',
    )
}

//Shows recipe information on Recipe Detail component
export async function getRecipeById(id: number) {
  const recipe = await db('recipes')
    .where({ id })
    .select('id', 'title', 'description', 'image', 'notes')
    .first()
  if (!recipe) {
    return null
  }
  const ingredients = await db('recipe_ingredients')
    .where({ recipe_id: id })
    .select(
      'id',
      'quantity',
      'unit',
      'ingredient',
      'preparation',
      'display_order as displayOrder',
    )
    .orderBy('display_order')
  const steps = await db('recipe_steps')
    .where({ recipe_id: id })
    .select('id', 'step_number as stepNumber', 'instruction')
    .orderBy('step_number')
  const vegetables = await getVegetablesByRecipeId(id)

  return {
    ...recipe,
    ingredients,
    steps,
    vegetables,
  }
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
