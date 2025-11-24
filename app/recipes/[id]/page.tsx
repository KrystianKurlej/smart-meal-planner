import { Button } from "@/components/ui/button";
import recipes from "@/db/recipes.json";
import { Apple, CookingPot, MoveLeft } from "lucide-react";
import Link from "next/link";

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
                <div className="text-zinc-600 flex items-center justify-between">
                    <h2 className="text-sm">Składniki</h2>
                    <Apple className="w-5 h-5" />
                </div>
            </div>
            <div className="bg-white rounded-lg p-4 mb-2">
                <div className="text-zinc-600 flex items-center justify-between">
                    <h2 className="text-sm">Sposób przygotowania</h2>
                    <CookingPot className="w-5 h-5" />
                </div>
            </div>
        </main>
        </>
    )
}