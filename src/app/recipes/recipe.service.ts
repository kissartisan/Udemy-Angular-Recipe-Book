import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
            'Brocolli',
            'Super food vegetable',
            `https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto,w_640,c_fit,fl_strip_profile/https://s3.amazonaws.com/pixtruder/original_images/d852987f86aeae8b65926f9e7a260c28285ea744`
        ),
        new Recipe(
            'Dark Chocolate',
            'Super food snacks',
            'https://media.gettyimages.com/photos/dark-chocolate-texture-picture-id94391222'
        )
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}
