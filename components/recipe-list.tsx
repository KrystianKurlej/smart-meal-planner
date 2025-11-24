import { Card, CardHeader, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import recipes from "@/db/recipes.json";
import RecipeSpecs from "@/components/recipe-specs";
import type { Recipe } from "@/types";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import type { RecipeListProps } from "@/types";

export default function RecipeList({ searchTerm }: RecipeListProps) {
    return(
        <>
        <p className="mb-1 text-sm text-stone-500">
            {searchTerm ? `Wyniki wyszukiwania dla "${searchTerm}"` : 'Wszystkie przepisy'}
        </p>
        {(recipes as Recipe[]).map((recipe) => (
            <Link key={recipe.id} href={`/recipes/${recipe.id}`}>
                <Card className="w-full mb-3 pt-0">
                    <AspectRatio ratio={5 / 2} className="rounded-t-lg overflow-hidden bg-stone-200">
                        <Image
                            src={recipe.thumbnail}
                            alt={recipe.title}
                            width={1080}
                            height={720}
                            className="object-cover object-center w-full h-full"
                        />
                    </AspectRatio>
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
    )
}