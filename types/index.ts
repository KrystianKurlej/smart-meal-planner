export interface Ingredient {
  id: number;
  name: string;
}

export interface RecipeIngredient {
  id: number;
  quantity: number;
  unit: string;
}

export interface Recipe {
  id: number;
  title: string;
  description: string;
  rating: number;
  difficulty: 1 | 2 | 3;
  duration: number;
  thumbnail: string;
  ingredients: RecipeIngredient[];
  steps: string[];
}

export interface RecipeSpecs {
  rating: number;
  difficulty: 1 | 2 | 3;
  duration: number;
}
