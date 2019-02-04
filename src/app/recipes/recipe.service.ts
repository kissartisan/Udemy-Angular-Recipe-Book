import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            "Spicy Salmon Black Bean Salad",
            `This spicy, smoky bean salad packs a whole lot more flavor into it than you’d expect of
        something that takes all of six minutes to make,
        and you have hot smoked salmon to thank for that.`,
            `https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fill,g_auto,w_1460/https://storage.googleapis.com/gen-atmedia/3/2017/06/75a12226c463439db3ff04a723fb6db2b268f77d.jpeg`,
            [
                new Ingredient("Ounces hot smoked salmon", 4),
                new Ingredient("Can black beans, drained and rinsed", 15),
                new Ingredient(
                    "tablespoon freshly squeezed lime juice (from 1/2 medium lime)",
                    1
                )
            ]
        ),
        new Recipe(
            "Collard Green Chicken Salad Wraps",
            `I’ve always loved collard greens, but usually in a stewed, completely cooked-down form,
    with lots of broth flavored with smoky meat. But eating the greens raw never occurred to me
    until recently, when they were suggested as a sandwich bread substitute.
    Turns out they’re a great, light alternative when you’re looking for something other than bread.`,
            "https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fill,g_auto,w_1460/https://storage.googleapis.com/gen-atmedia/3/2016/01/3d30adbb18bdfd0261b1350149089e5c9f6e92ce.jpeg",
            [
                new Ingredient("Cup plain whole-milk Greek yogurt", 1),
                new Ingredient("Tablespoons mayonnaise", 2),
                new Ingredient("Teaspoon curry powder", 1),
                new Ingredient("Scallions, thinly sliced", 2),
                new Ingredient("Teaspoon salt, plus more for seasoning", 1),
                new Ingredient("Freshly ground black pepper", 8),
                new Ingredient(
                    "Cups (about 1 pound) shredded or chopped cooked chicken",
                    4
                )
            ]
        )
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}
