import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Apple, CookingPot, MoveLeft } from "lucide-react";
import Link from "next/link";
import recipes from "@/db/recipes.json";
import ingredients from "@/db/ingredients.json";

function getIngredientById(id: number) {
    return ingredients.find(ingredient => ingredient.id === id);
}

export default async function Recipe({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const recipe = recipes.find(r => r.id === parseInt(id));

    return (
        <>
        <header>
            <Button variant="link" className="mb-4" asChild>
                <Link href="/">
                    <MoveLeft />
                    Wróć do listy przepisów
                </Link>
            </Button>
            <h1 className="text-4xl font-bold mb-4">
                {recipe?.title}
            </h1>
            <p className="text-lg text-zinc-800 mb-8">
                {recipe?.description}
            </p>
        </header>
        <main>
            <div className="bg-white rounded-lg p-4 mb-2">
                <div className="text-zinc-500 flex items-center justify-between">
                    <h2 className="text-md flex items-center gap-2.5 pl-0.5">
                        <Apple className="w-4 h-4" />
                        Składniki
                    </h2>
                </div>
                <div className="flex flex-col mt-2">
                    {recipe?.ingredients.map((ingredient, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <Label htmlFor={`ingredient-${index}`} className="flex items-center gap-3 cursor-pointer w-full border-t py-2 text-md">
                                <Checkbox id={`ingredient-${index}`} />
                                <div className="flex flex-1 justify-between">
                                    <span className="block">{getIngredientById(ingredient.id)?.name}</span>
                                    <span className="block text-zinc-500">{ingredient.quantity} {ingredient?.unit}</span>
                                </div>
                            </Label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-white rounded-lg p-4 mb-2">
                <div className="text-zinc-500 flex items-center justify-between">
                    <h2 className="text-sm flex items-center gap-2">
                        <CookingPot className="w-4 h-4" />
                        Sposób przygotowania
                    </h2>
                </div>
            </div>
        </main>
        </>
    )
}