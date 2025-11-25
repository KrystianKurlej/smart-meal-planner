import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Apple, CookingPot, FileSearchCorner, MoveLeft } from "lucide-react";
import Link from "next/link";
import recipes from "@/db/recipes.json";
import ingredients from "@/db/ingredients.json";
import RecipeSpecs from "@/components/recipe-specs";
import type { Recipe as RecipeType, Ingredient, RecipeIngredient } from "@/types";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

function getIngredientById(id: number): Ingredient | undefined {
    return (ingredients as Ingredient[]).find(ingredient => ingredient.id === id);
}

export default async function Recipe({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const recipe = (recipes as RecipeType[]).find(r => r.id === parseInt(id));

    if (!recipe) {
        return (
            <Empty className="min-h-screen flex flex-col items-center">
                <EmptyHeader>
                    <EmptyMedia>
                        <FileSearchCorner />
                    </EmptyMedia>
                    <EmptyTitle>
                        Przepis nie został znaleziony
                    </EmptyTitle>
                    <EmptyDescription>
                        Spróbuj wrócić do listy przepisów.
                    </EmptyDescription>
                </EmptyHeader>
                <EmptyContent>
                    <Button asChild>
                        <Link href="/">
                            <MoveLeft />
                            Wróć do listy przepisów
                        </Link>
                    </Button>
                </EmptyContent>
            </Empty>
        );
    }

    return (
        <>
        <header>
            <Button variant="link" className="mb-4" asChild>
                <Link href="/app/">
                    <MoveLeft />
                    Wróć do listy przepisów
                </Link>
            </Button>
            <div className="px-4">
                <h1 className="text-4xl font-bold my-4">
                    {recipe.title}
                </h1>
                <p className="text-lg text-stone-800">
                    {recipe.description}
                </p>
                <div className="my-6">
                    <RecipeSpecs recipe={{ rating: recipe.rating, difficulty: recipe.difficulty, duration: recipe.duration }} />
                </div>
            </div>
            <AspectRatio ratio={16 / 9} className="mb-2 rounded-lg overflow-hidden bg-stone-200">
                <Image
                    src={recipe.thumbnail}
                    alt={recipe.title}
                    width={1080}
                    height={720}
                    className="object-cover object-center w-full h-full"
                />
            </AspectRatio>
        </header>
        <main>
            <Accordion type="single" collapsible>
                <AccordionItem value="ingredients" className="bg-white rounded-lg p-4 mb-2">
                    <AccordionTrigger className="text-stone-500 flex items-center justify-between pt-0 pb-0">
                        <h2 className="text-md flex items-center gap-2.5 pl-0.5">
                            <Apple className="w-4 h-4" />
                            Składniki
                        </h2>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col mt-2">
                        {recipe.ingredients.map((ingredient: RecipeIngredient, index: number) => (
                            <div key={index} className="flex items-center gap-3">
                                <Label htmlFor={`ingredient-${index}`} className="flex items-center gap-3 cursor-pointer w-full border-t py-2 text-md">
                                    <Checkbox id={`ingredient-${index}`} />
                                    <div className="flex flex-1 justify-between">
                                        <span className="block">{getIngredientById(ingredient.id)?.name}</span>
                                        <span className="block text-stone-500">{ingredient.quantity} {ingredient?.unit}</span>
                                    </div>
                                </Label>
                            </div>
                        ))}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
                <AccordionItem value="steps" className="bg-white rounded-lg p-4 mb-2">
                    <AccordionTrigger className="text-stone-500 flex items-center justify-between pt-0 pb-0">
                        <h2 className="text-md flex items-center gap-2.5 pl-0.5">
                            <CookingPot className="w-4 h-4" />
                            Sposób przygotowania
                        </h2>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col mt-2">
                        {recipe.steps.map((step: string, index: number) => (
                            <div key={index} className="py-4 border-t">
                                <h3 className="text-sm text-stone-700">Krok {index + 1}</h3>
                                <p>{step}</p>
                            </div>
                        ))}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </main>
        </>
    )
}