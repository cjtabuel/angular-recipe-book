import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredient: Ingredients[] = [];

  constructor() { }

  ngOnInit() {
  }

  onIngredientsAdded(ingredientData: {ingredientName: string, ingredientAmount: number}) {
    this.ingredient.push({
      name: ingredientData.ingredientName,
      amount: ingredientData.ingredientAmount
    });
  }

  onIngredientsCleared() {
    this.ingredient = [];
    return this.ingredient;
  }
}
