//recipes seed db file
export interface RecipeSummary {
  id: number
  title: string
  description: string
  serves: string
  image: string
  notes: string
}

// one ingredient from recipe_ingredients seed db
export interface RecipeIngredient {
  id: number
  quantity: string
  unit: string
  ingredient: string
  preparation: string
  displayOrder: number
}

// one step of instruction from recipe_steps seed
export interface RecipeStep {
  id: number
  recipeId: number
  stepNumber: number
  instruction: string
}

// recipe_vegetable seed db file (connects recipe to plant in ingredients list)
export interface RecipeVegetable {
  id: number
  name: string
  image: string
}

//Return full recipe
export interface Recipe extends RecipeSummary {
  ingredients: RecipeIngredient[]
  steps: RecipeStep[]
  vegetables: RecipeVegetable[]
}
