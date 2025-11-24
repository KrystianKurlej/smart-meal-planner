import { Card, CardHeader, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import recipes from "@/db/recipes.json";
import RecipeSpecs from "@/components/receipe-specs";
import type { Recipe } from "@/types";

export default function Home() {
  return (
    <>
      {(recipes as Recipe[]).map((recipe) => (
        <Link key={recipe.id} href={`/recipes/${recipe.id}`}>
          <Card className="w-full mb-3">
            <CardHeader>
              <CardTitle>
                {recipe.title}
              </CardTitle>
              <CardDescription>
                {recipe.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RecipeSpecs recipe={{ rating: recipe.rating, difficulty: recipe.difficulty, duration: recipe.duration }} />
            </CardContent>
          </Card>
        </Link>
      ))}
    </>
  );
}