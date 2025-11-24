import { Card, CardHeader, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { ChefHat, Clock3, Star } from "lucide-react";
import Link from "next/link";
import recipes from "@/db/recipes.json";

function formatRating(rating: number): string {
  return `${rating}/5`;
}

function formatDifficulty(level: number): string {
  switch (level) {
    case 1:
      return "Łatwe";
    case 2:
      return "Średnie";
    case 3:
      return "Trudne";
    default:
      return "Nieznane";
  }
}

function formatDuration(minutes: number): string {
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  
  return hrs > 0 ? `${hrs}h ${mins}m` : `${mins}m`;
}

export default function Home() {
  return (
    <>
      {recipes.map((recipe) => (
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
              <div className="grid grid-cols-3 text-sm text-center">
                <div className="flex flex-col items-center border-r px-2">
                  <Star className="mb-1"/>
                  <span className="block">
                    {formatRating(recipe.rating)}
                  </span>
                </div>
                <div className="flex flex-col items-center border-r px-2">
                  <ChefHat className="mb-1"/>
                  <span className="block">
                    {formatDifficulty(recipe.difficulty)}
                  </span>
                </div>
                <div className="flex flex-col items-center px-2">
                  <Clock3 className="mb-1"/>
                  <span className="block">
                    {formatDuration(recipe.duration)}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </>
  );
}