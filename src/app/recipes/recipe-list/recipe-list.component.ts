import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipes } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  recipes: Recipes[] = [
    new Recipes ('Lumpia', 'yummy', 'assets/images/recipe-logo.jpeg'),
    new Recipes ('Leche Flan', 'hella yummy', 'assets/images/recipe-logo.jpeg'),
    new Recipes ('Pizza', 'yummy also', 'assets/images/recipe-logo.jpeg')
  ];

  @Output() recipeToDisplay = new EventEmitter<Recipes>();


  constructor() { }

  ngOnInit() {
  }

  btnClicked(recipe: Recipes) {
    this.recipeToDisplay.emit(recipe);
  }

  // onRecipeReceived(recipeData: {recipeName: string, recipeDesc: string, recipeImg: string}) {
  //   this.recipeToDisplay.emit({
  //     recipeName: recipeData.recipeName,
  //     recipeDesc: recipeData.recipeDesc,
  //     recipeImg: recipeData.recipeImg
  //   });
  // }

}
