import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Brocolli',
      'Super food vegetable',
      'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto,w_640,c_fit,fl_strip_profile/https://s3.amazonaws.com/pixtruder/original_images/d852987f86aeae8b65926f9e7a260c28285ea744'
      ),
    new Recipe(
      'Brocolli',
      'Super food vegetable',
      'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto,w_640,c_fit,fl_strip_profile/https://s3.amazonaws.com/pixtruder/original_images/d852987f86aeae8b65926f9e7a260c28285ea744'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
