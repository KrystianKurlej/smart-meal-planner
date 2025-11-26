import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Ingredient } from "@/types";

export async function getIngredients(): Promise<Ingredient[]> {
    try {
        const ingredientsCollection = collection(db, "ingredients");
        const snapshot = await getDocs(ingredientsCollection);
        
        const ingredients: Ingredient[] = snapshot.docs.map((doc) => ({
            id: doc.id,
            name: doc.data().name,
        }));

        return ingredients;
    } catch (error) {
        console.error("Error fetching ingredients:", error);
        return [];
    }
}

export function getIngredientById(ingredients: Ingredient[], id: string): Ingredient | undefined {
    return ingredients.find(ingredient => ingredient.id === id);
}