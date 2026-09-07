// Recipe information page, linking back to vegetables
// with ability to add recipe to cookbook (favorites)

import { Link, useLocation, useNavigate, useParams } from 'react-router'
import ThemedH1 from './theme/ThemedHeader'
import ThemedText from './theme/ThemedText'
import { Card, CardContent } from './card'
import { useRecipeById } from '../hooks/useRecipe'
import Button from './theme/Button'

export default function RecipeDetail() {
  const { id } = useParams()
  const recipeId = Number(id)

  const { data: recipe, isPending, error } = useRecipeById(recipeId)

  const location = useLocation()
  const navigate = useNavigate()

  const fromPlantId = location.state?.fromPlantId
  const regionName = location.state?.regionName
  const month = location.state?.month

  if (isPending) {
    return <p>Loading recipe...</p>
  }
  if (error) {
    return <p>Something went wrong: {error.message}</p>
  }
  if (!recipe) {
    return <p>Recipe not found</p>
  }
  console.log(recipe)

  return (
    <Card className="p-6">
      <CardContent className="space-y-6">
        <ThemedH1>{recipe.title}</ThemedH1>

        {recipe.image && (
          <img
            src={recipe.image}
            alt={recipe.title}
            className="max-h-[450px] w-full rounded-[20px] object-cover"
          />
        )}
        <ThemedText>{recipe.description}</ThemedText>
        <ThemedH1>Ingredients</ThemedH1>
        <ThemedText>{recipe.ingredients}</ThemedText>
        <ThemedH1>Method</ThemedH1>
        <ThemedText>{recipe.method}</ThemedText>
        <Button
          className="gap-4
      rounded-[40px]
      bg-[#e8e6e1]
      px-6
      py-3
      text-center
      text-[clamp(14px,3vw,20px)]
      font-semibold
      text-[#2f2f2f]
      transition hover:bg-[#dcd8ce]"
          onClick={() => {
            if (fromPlantId) {
              navigate(`/plant/${fromPlantId}/guide`, {
                state: {
                  regionName,
                  month,
                },
              })
            } else {
              navigate(-1)
            }
          }}
        >
          ← Back
        </Button>
      </CardContent>
    </Card>
  )
}
